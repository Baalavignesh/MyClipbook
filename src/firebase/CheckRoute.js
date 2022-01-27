import { doc, getDoc, getFirestore } from "firebase/firestore";
async function CheckRoute(id, allBoard, setLoad) {
  const db = getFirestore();

  const docRef = doc(db, "allData", id);
  const docSnap = await getDoc(docRef);
  let allData = [];

  if (docSnap.exists()) {
    // Get Data from Firestore
    console.log("data found");
    console.log(docSnap.data());
    allData = docSnap.data().allClipboard;
  } else {
    console.log("no data");
  }

  return allData;
}

export default CheckRoute;
