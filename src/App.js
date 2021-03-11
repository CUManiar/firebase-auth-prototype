import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/error";
import Home from "./components/home";
import Login from "./components/loginCard";
import Main from "./components/main";
import ResetPassword from "./components/resetPassword";
import { auth } from "./config/firebase";
import { useStateValue } from "./contextProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main-ui">
            <Main />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
