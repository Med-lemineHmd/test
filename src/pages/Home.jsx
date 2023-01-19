import React, { useContext } from "react";
import { Footer, Header } from "../components";
import { UserContext } from "../layouts/RouteLayout";

const Home = () => {
  const users = useContext(UserContext);

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
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </main>
      <Footer title="This is a Footer" />
    </>
  );
};

export default Home;
