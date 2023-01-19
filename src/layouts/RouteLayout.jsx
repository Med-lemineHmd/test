import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const UserContext = createContext();

const RouteLayout = () => {
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

  return (
    <UserContext.Provider value={users}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </UserContext.Provider>
  );
};

export default RouteLayout;
