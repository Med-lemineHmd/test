import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Header } from "../components";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Header title="This is a Header" />
      <main>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </main>
      <Footer title="This is a Footer" />
    </>
  );
};

export default Home;
