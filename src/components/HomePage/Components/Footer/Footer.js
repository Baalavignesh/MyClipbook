import React from "react";
import "./Footer.styles.css";

function Footer() {
  let year = new Date().getFullYear();

  return <footer className="footer">©{year} MyClipBook, Inc.</footer>;
}

export default Footer;
