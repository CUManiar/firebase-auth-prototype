import React, { useState } from "react";
import "./styles.css";
import { auth } from "../../config/firebase";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/main-ui");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Log in</h1>
        <form onSubmit={signIn}>
          <input
            className="login__input"
            type="email"
            placeholder="Enter email i.e. john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login__input"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Submit" className="login__submit" />
        </form>
        <Link to="/reset-password">Reset Password</Link>
      </div>
    </div>
  );
}

export default Login;
