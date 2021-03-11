import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../contextProvider";

const Main = () => {
  const history = useHistory();
  const [{ user }] = useStateValue();
  return (
    <div>
      {!user && history.push("/login")}
      <Link to="/home">Home </Link>
      <h1>Main UI</h1>
    </div>
  );
};

export default Main;
