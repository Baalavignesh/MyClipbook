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
import "./HomePage.styles.css";

function HomePage() {
  let [allClipboard, setClipboard] = useState(null);

  let [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    let uniqueID = uid();

    if (id) {
      uniqueID = id;
    }

    const fetchData = async () => {
      const result = await CheckRoute(uniqueID, allClipboard);

      setClipboard(result);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
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
    setClipboard(updatedData);

    // AddData(id, allClipboard);
  }

  function deleteClipboard(id) {
    setClipboard((prev) => {
      return allClipboard.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="totalpage">
      {!loading && (
        <>
          <Header />
          <div className="expanding-div">
            <InputArea addBoard={addClipboard} />
            <Clipboard
              allBoard={allClipboard}
              updateClipboard={updateClipBoard}
              deleteClipboard={deleteClipboard}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
export default HomePage;
