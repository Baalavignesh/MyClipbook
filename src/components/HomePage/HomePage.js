import React, { useEffect } from "react";
import { useState } from "react";
import Clipboard from "../HomePage/Components/Clipboard/Clipboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import InputArea from "../HomePage/Components/InputArea/InputArea";
import { uid } from "uid";
import { useParams } from "react-router-dom";
import CheckRoute from "../../firebase/CheckRoute";
import AddData from "../../firebase/AddData";

function HomePage() {
  let [allClipboard, setClipboard] = useState(null);

  let [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    console.log("main use Effect");
    let uniqueID = uid();

    if (id) {
      uniqueID = id;
    }

    const fetchData = async () => {
      const result = await CheckRoute(uniqueID, allClipboard);
      console.log("set clipboard calledd");
      setClipboard(result);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("add data use effect");
    if (allClipboard !== null) {
      AddData(id, allClipboard);
    }
  }, [allClipboard]);

  function addClipboard(noteData) {
    setClipboard((prev) => {
      prev = prev ? prev : [];
      return [...prev, noteData];
    });
  }

  function updateClipBoard(updatedData) {
    console.log("updating clipboard");
    setClipboard(updatedData);

    // AddData(id, allClipboard);
  }

  function deleteClipboard(id) {
    console.log("deleting clipboard");
    setClipboard((prev) => {
      return allClipboard.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {!loading && (
        <div>
          <Header />
          <InputArea addBoard={addClipboard} />
          <Clipboard
            allBoard={allClipboard}
            updateClipboard={updateClipBoard}
            deleteClipboard={deleteClipboard}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}
export default HomePage;
