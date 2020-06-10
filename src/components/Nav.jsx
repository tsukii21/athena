import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center px-16 py-4 text-4xl font-hairline ">
      <a className="nav-link duration-500" href="#">
        athena
      </a>
      <a
        className="nav-link duration-500"
        href="https://github.com/tsukii21/athena"
      >
        <AiFillGithub />
      </a>
    </nav>
  );
};

export default Nav;
