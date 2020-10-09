import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import ShowItems from "./ShowItems";

const Cart = (props) => {
  console.log(props, "props in Cart");
  console.log(props.location, "props.location in Cart");
  console.log(props.location.state.products, "props.location in Cart");
  // product.products if property key and next key are the same, throws an error
  // const items = props.location.state.products.map((item) => (
  //   <ShowItems
  //     // changeHandle={this.props.changeHandle}
  //     // changeToggle={this.props.changeToggle}
  //     key={item.id}
  //     item={item}
  //     // onClick={props.onClick}
  //   />
  // ));
  return (
    <div>
      <h1>Cart Hiya Hiya</h1>
      {/* display all the itmes in cart */}
      {/* return (products.map((obj) => (
      <h4>{obj.name}</h4>
      <h4>{obj.amount}</h4>
   ) ) */}

      {/* <div className="d-flex flex-wrap">{items}</div> */}
      <Link to="/Order">
        <button className="btn btn-dark">Place Order</button>
      </Link>
    </div>
  );
};

export default Cart;
