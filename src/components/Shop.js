import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../Products";
import ShowItems from "./ShowItems";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState(Products); // store items
  const [itemNum, setItemNum] = useState(0);

  // useffect?
  useEffect(() => {
    console.log(products, "products");
    const sum = Object.values(products).reduce(
      (pv, value) => pv + value.amount,
      0
    );
    console.log(sum, "sum amount");
    setItemNum(sum); // get sum of amount
  }, [setProducts]);

  // when add to cart clicked
  // function handleClick(e) {
  //   itemNum(itemNum + e.target.value)
  // }

  const updateProducts = (product, n) => {
    console.log("Setproducts updated");
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
    <div className="d-flex itmes-container bg-dark my-2 radius">
      <div className="col-9 border-r">
        <h1>Hello from Shop</h1>
        {/* display items and price */}
        <div className="d-flex flex-wrap">{items}</div>
      </div>
      <div className="d-flex align-items-center justify-content-center col-3">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <button
              style={{ backgroundColor: "transparent", height: 46, width: 50 }}
            >
              <FaShoppingCart color="white" size="3rem" />
            </button>
            <h4 className="px-2">{itemNum}</h4>
          </div>
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
      </div>
    </div>
  );
};

export default Shop;
