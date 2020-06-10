import React, { useState } from "react";
import Loading from "./Loading";

const Home = () => {
  const [domain, setDomain] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setDomain(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      {submitted ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="text-center border-none bg-transparent focus:outline-none text-6xl"
            type="text"
            value={domain}
            placeholder="enter domain"
            required
          />
        </form>
      )}
    </div>
  );
};

export default Home;
