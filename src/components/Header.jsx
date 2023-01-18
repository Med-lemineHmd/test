import React from "react";
import HigherComp from "./HigherComp";

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default HigherComp(Header);
