import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="fixed w-full flex justify-between items-center px-16 py-4 text-4xl font-hairline ">
      <Link to="/">
        <h1 className="nav-link duration-500">athena</h1>
      </Link>
      {props.session.loggedIn ? (
        <button
          onClick={props.logOutUser}
          className="nav-link duration-500 font-hairline"
        >
          {props.session.username}
        </button>
      ) : (
        <Link to="/login">
          <h1 className="nav-link duration-500">sign in</h1>
        </Link>
      )}

      <a
        className="fixed bottom-0 right-0 mb-8 mr-16 nav-link duration-500"
        href="https://github.com/tsukii21/athena"
      >
        <AiFillGithub />
      </a>
    </nav>
  );
};

export default Nav;
