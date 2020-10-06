import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Cart Hiya Hiya</h1>
      {/* display all the itmes in cart */}
      <Link to="/Order">
        <button className="btn btn-dark">Place Order</button>
      </Link>
    </div>
  );
};

export default Cart;
