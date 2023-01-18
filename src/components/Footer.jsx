import React from "react";
import HigherComp from "./HigherComp";

const Footer = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default HigherComp(Footer);
