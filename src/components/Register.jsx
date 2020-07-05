import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    await axios
      .post("http://localhost:5000/auth/register", user)
      .then((res) => {
        if (res.data.error === "") props.logInUser(res.data.username);
        else setError(res.data.error);
      });
  };
  return props.session.loggedIn ? (
    <Redirect to="/search" />
  ) : (
    <div className="flex justify-center flex-col items-center h-full">
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn w-1/5 px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-500 text-md mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="iamadam69"
            value={user.username}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-md mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="jonas@winden.com"
            value={user.email}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-500 text-md mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            value={user.password}
            required
          />
          {error !== "" && (
            <p className="text-red-500 text-xs italic">{error}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn-normal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <Link to="/login">
            <span className="link inline-block align-baseline font-bold text-sm duration-500">
              Already a user? <br /> Log in!
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
