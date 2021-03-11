import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useStateValue } from "../../contextProvider";

const Home = () => {
  const [{ user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="home">
      <h6>Hello {user ? user.email : "Guest!"}</h6>

      <div>
        <Link to={!user && "/login"}>
          <div>
            <span onClick={handleAuthentication}>
              {user ? "Sign out" : "Sing In"}
            </span>
          </div>
        </Link>

        <Link to="/main-ui">
          <div style={{ margin: 10, padding: 20 }}>Main</div>
        </Link>
      </div>
      <div className="home__header">
        <h1>FAQ Page</h1>
      </div>
    </div>
  );
};

export default Home;
