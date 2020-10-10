import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../Products";
import ShowItems from "./ShowItems";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState(Products); // store items
  const [itemNum, setItemNum] = useState(0);
  const [cart, setCart] = useState([]);

  // useffect?
  // useEffect(() => {
  //   console.log(products, "products");
  //   const sum = Object.values(products).reduce(
  //     (prev, cur) => prev + cur.amount,
  //     0
  //   );
  //   console.log(sum, "sum amount");
  //   setItemNum(sum); // get sum of amount
  // }, []);

  useEffect(() => {
    setItemNum(cart.length); //  get sum of amount
    console.log(cart.length, "cart.length in useEffect");
  }, [cart]);

  // handle add cart
  const handleClick = (props) => {
    console.log(props, "props in handleClick ////");
    // const sum = Object.values(products).reduce(
    //   (prev, cur) => prev + cur.amount,
    //   0
    // );
    // console.log(sum, "sum amount");
    if (isInCart(props)) {
      // check if item is already in cart or not
      console.log("in cart /////////////");
      const new_cart = cart.map((obj) => {
        let temp = Object.assign({}, obj);
        if (obj.id === props.id) {
          temp.amount = props.amount;
          // temp.bg = changed_state;
          // console.log(temp, "temp//////");
        }
        return temp;
      });
      // setItemNum(new_cart.length); //  get sum of amount
      setCart(new_cart);
      // console.log(products, "product after updated");
    } else {
      const updated_cart = cart.slice();
      updated_cart.push(props);
      setCart(updated_cart);
    }
    console.log(cart.length, "cart.length");
  };

  function isInCart(props) {
    console.log(props.id, " props.id ////");
    for (let item of cart) {
      if (item.id === props.id) {
        console.log("hiya");
        return true;
      }
    }
    return false;
  }

  // onchange
  const updateProducts = (product, num) => {
    console.log(product, num, "product and num");
    setProducts(
      [...products].map((object) => {
        if (object.id === product.id && object.amount + parseInt(num) >= 0) {
          // console.log(object, "object in map");
          return {
            ...object,
            amount: parseInt(num),
          };
        }
        // console.log(object, "object in map");
        return object;
      })
    );
    console.log(products, "product after updated");
  };

  // when add to cart clicked
  // function handleClick(e) {
  //   itemNum(itemNum + e.target.value)
  // }

  // const handleChange = () => {};

  const items = products.map((item) => (
    <ShowItems
      // changeHandle={this.props.changeHandle}
      // changeToggle={this.props.changeToggle}
      key={item.id}
      item={item}
      onChange={updateProducts}
      onClick={handleClick}
    />
  ));

  return (
    <div className="itmes-container vh-100 bg-dark radius p-3">
      {/* make it responsive */}
      <div className="d-flex pb-3 align-items-center justify-content-end">
        <Link
          to={{
            pathname: "/Cart",
            // updateProducts: { updateProducts },
            state: { products, cart },

            // products: { products },
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              height: 33,
              width: 33,
            }}
          >
            <FaShoppingCart color="white" size="2rem" />
          </button>
        </Link>
        <h4 className="ml-3">{itemNum}</h4>
      </div>

      {/* display items and price */}
      <div className="d-flex flex-wrap">{items}</div>
    </div>
  );
};

export default Shop;
