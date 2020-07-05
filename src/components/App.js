import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [session, setSession] = useState({
    loggedIn: false,
    username: "",
  });
  const logInUser = (username) => {
    setSession({
      loggedIn: true,
      username: username,
    });
  };
  const logOutUser = () => {
    setSession({
      loggedIn: false,
      username: "",
    });
  };
  return (
    <Router>
      <div className="bg-gray-900 w-screen h-screen text-white">
        <Nav session={session} logOutUser={logOutUser} />
        <Route exact path="/">
          <Home session={session} />
        </Route>
        <Route exact path="/search">
          <Search session={session} />
        </Route>
        <Route exact path="/login">
          <Login logInUser={logInUser} session={session} />
        </Route>
        <Route exact path="/register">
          <Register logInUser={logInUser} session={session} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
