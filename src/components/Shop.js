import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1>Hello from Shop</h1>
      {/* display items and price */}
      <Link to="/Cart">
        <button className="btn btn-dark">Check Out</button>
      </Link>
    </div>
  );
};

export default Shop;
