import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <h1>Welcome</h1>
      <Link to="/shop">
        <button className="btn btn-dark">Go Shop</button>
      </Link>
    </div>
  );
};

export default Home;
