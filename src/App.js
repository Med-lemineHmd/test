import React from "react";
import { Header, Footer } from "./components";

const data = [
  {
    name: "Mo",
    desc: "lorem",
  },
  {
    name: "Alex",
    desc: "lorem",
  },
  {
    name: "Ran",
    desc: "lorem",
  },
  {
    name: "Conan",
    desc: "lorem",
  },
  {
    name: "Togo",
    desc: "lorem",
  },
];

const App = () => {
  return (
    <div>
      <Header title="This is a Header" />
      <main>
        {data.map((item) => (
          <ul key={`${Math.random()}-id`}>
            <li>{item.name}</li>
            <li>{item.desc}</li>
          </ul>
        ))}
      </main>
      <Footer title="This is a Footer" />
    </div>
  );
};

export default App;
