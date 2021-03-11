import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";
import "./styles.css";

const ResetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then((user) => {
        alert("Link to reset your password is sent to your email-id");
        history.push("/login");
      })
      .catch((err) => alert("Something went wrong!"));
  };

  return (
    <div className="reset">
      <h3> Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="reset__input"
          type="email"
          placeholder="Enter email id"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Reset Password" className="reset__submit" />
      </form>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default ResetPassword;
