import React from "react";

const HigherComp = (Component) => {
  return function HOC({ title }) {
    return (
      <div style={{ textAlign: "center", color: "#A6A6A6" }}>
        <Component title={title} />
      </div>
    );
  };
};

export default HigherComp;
