import { doc, setDoc, getFirestore } from "firebase/firestore";

async function AddData(id, allBoard) {
  const db = getFirestore();

  console.log("update data");
  console.log(allBoard);

  let allData = [];

  await setDoc(doc(db, "allData", id), {
    allClipboard: allBoard,
  });
  return allData;
}

export default AddData;
