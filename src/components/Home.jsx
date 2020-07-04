import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1
        style={{ fontSize: "6rem", color: "#00adb5" }}
        className="animate__animated animate__fadeInDown font-hairline"
      >
        athena
      </h1>
      <h3 className="w-1/4 text-gray-500 text-center animate__animated animate__fadeInDown text-2xl font-hairline">
        a fully automated tool to reconnaissance against a target
      </h3>
      <Link to="/search">
        <button class="animate__animated animate__fadeIn animate__delay-1s btn mt-4 text-2xl py-2 px-4 rounded-full duration-500">
          Search
        </button>
      </Link>
    </div>
  );
};

export default Home;
