import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
// import ShowItems from "./ShowItems";

const Cart = (props) => {
  // console.log(props, "props in Cart");
  // console.log(props.location, "props.location in Cart");
  // console.log(props.location.state.products, "props.location in Cart");
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
  const getItemtotal = (amount, price) => {
    return amount * price;
  };

  const getTotal = () =>
    props.location.state.cart.reduce(
      (prev, cur) => prev + cur.amount * cur.price,
      0
    );

  const renderItems = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.price}</td>
        <td>{getItemtotal(item.amount, item.price)}</td>
      </tr>
    );
  };

  return (
    <div className="itmes-container bg-white text-dark">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{props.location.state.cart.map(renderItems)}</tbody>
        <tbody>
          <tr>
            <th>Total</th>
            <th>{getTotal()}</th>
          </tr>
        </tbody>
      </Table>
      {/* display all the itmes in cart */}

      {/* <div className="d-flex flex-wrap">{items}</div> */}
      <Link to="/Order">
        <div className="d-flex justify-content-center p-3">
          <button className="btn btn-dark">Place Order</button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
