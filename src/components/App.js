import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 w-screen h-screen text-white">
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
