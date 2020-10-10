import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
// import ShowItems from "./ShowItems";

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
        <tbody>
          {/* for name */}
          <tr>
            {props.location.state.cart.map((item) => (
              // console.log(item, "item in map////");
              <th key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>{item.price}</td>
                {/* <td>{getTotal}</td> */}
              </th>
            ))}
          </tr>
          {/* for quantitiey */}

          {/* for total */}
          {/* <tr>
            {props.location.state.cart.map((item) => (
              // console.log(item, "item in map////");
              <th key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.name}</td>
              =
              </th>
            ))}
          </tr> */}
        </tbody>
      </Table>
      {/* display all the itmes in cart */}

      {/* <div className="d-flex flex-wrap">{items}</div> */}
      <Link to="/Order">
        <button className="btn btn-dark">Place Order</button>
      </Link>
    </div>
  );
};

export default Cart;
