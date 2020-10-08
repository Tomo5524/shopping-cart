import React from "react";
// import "font-awesome/css/font-awesome.min.css";

function ShowItems(props) {
  console.log(props, "props in ShowCards ///////////////");

  return (
    <div className="bg-dark item px-3 text-center">
      {/* add button  */}
      <img
        className="item-photo"
        alt={props.item.name}
        src={require(`../images/${props.item.photo}.jpg`)}
      />
      <h3 className="text-light">{props.item.name}</h3>
      <p className="text-light">$: {props.item.price}</p>
      {/* <p className="text-light">{props.item.amount}</p> */}
      <input
        className="d-block m-auto my-2"
        type="number"
        min="1"
        max="30"
      ></input>
      <button className="btn btn-secondary my-2">Add to Cart</button>
    </div>
  );
}

export default ShowItems;
