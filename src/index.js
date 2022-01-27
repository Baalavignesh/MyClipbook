import firebase from "firebase/compat/app";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebaseConfig from "./firebase/FirebaseConfig";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
