import React from "react";
import { UserContext } from "../layouts/RouteLayout";

const Contact = () => {
  return (
    <UserContext.Consumer>
      {(users) => (
        <ul>
          {users.map((user) => (
            <li>{user.email}</li>
          ))}
        </ul>
      )}
    </UserContext.Consumer>
  );
};

export default Contact;
