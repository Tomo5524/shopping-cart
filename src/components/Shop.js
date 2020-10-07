import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../Products";
import ShowItems from "./ShowItems";

const Shop = () => {
  const [products, setProducts] = useState(Products); // store items

  // useffect?
  // useEffect(() => {
  //   setProducts(
  //     [...products].map((object) => {
  //       if (object.id === product && object.amount + n >= 0) {
  //         return {
  //           ...object,
  //           amount: object.amount + n,
  //         };
  //       }
  //       return object;
  //     })
  //   );
  //   console.log(products, "product");
  // });

  const updateProducts = (product, n) => {
    setProducts(
      [...products].map((object) => {
        if (object.id === product && object.amount + n >= 0) {
          return {
            ...object,
            amount: object.amount + n,
          };
        }
        return object;
      })
    );
    console.log(product, "product");
  };

  const items = products.map((item) => (
    <ShowItems
      // changeHandle={this.props.changeHandle}
      // changeToggle={this.props.changeToggle}
      key={item.id}
      item={item}
      // onClick={props.onClick}
    />
  ));

  return (
    <div className="bg-dark itmes-container">
      <h1>Hello from Shop</h1>
      {/* display items and price */}
      <div className="d-flex flex-wrap">{items}</div>
      <Link
        to={{
          pathname: "/Cart",
          updateProducts: { updateProducts },
          state: { products },
          // products: { products },
        }}
      >
        <button className="btn btn-dark">Check Out</button>
      </Link>
    </div>
  );
};

export default Shop;
