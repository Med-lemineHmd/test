import React, { useState, useRef, useEffect } from "react";

const About = () => {
  const [posts, setPosts] = useState("");

  const refInput = useRef();

  useEffect(() => {
    refInput.current.focus();
    refInput.current.setAttribute("id", "type");
    console.log(refInput);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <label htmlFor="">Your Text: </label>
        <input
          type="text"
          name=""
          ref={refInput}
          onChange={(e) => setPosts(e.target.value)}
        />
      </div>
      <div>
        <h2>{posts}</h2>
      </div>
    </div>
  );
};

export default About;
