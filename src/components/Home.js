import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/galaxy.jpg";

const Home = () => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center galaxy-bg">
      {/* theme is space galaxy so add a background of space */}
      <h1>Welcome</h1>
      <Link to="/shop">
        <button className="btn btn-dark">Buy Planets!!</button>
      </Link>
      {/* <div className="vh-100">
        <img src={logo} />
      </div> */}
    </div>
  );
};

export default Home;
