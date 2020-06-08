import React from "react";

const Nav = () => {
  return (
    <nav className="fixed w-full flex justify-between px-16 py-4 text-4xl font-hairline ">
      <a className="hover:text-gray-700 duration-500" href="#">
        athena
      </a>
      <a
        className="hover:text-gray-700 duration-500"
        href="https://github.com/tsukii21/athena"
      >
        github repo
      </a>
    </nav>
  );
};

export default Nav;
