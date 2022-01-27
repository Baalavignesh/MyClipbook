import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";

function CheckPage() {
  let uniqueRoute = uid();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${uniqueRoute}`);
  });
  return <div></div>;
}

export default CheckPage;
