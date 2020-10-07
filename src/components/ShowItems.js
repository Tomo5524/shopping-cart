import React from "react";
// import "font-awesome/css/font-awesome.min.css";

function ShowItems(props) {
  console.log(props, "props in ShowCards ///////////////");

  return (
    <div className="bg-dark item flex-wrap">
      {/* add button  */}
      <img
        className="item-photo"
        alt={props.item.name}
        src={require(`../images/${props.item.photo}.jpg`)}
      />
      <p className="text-light">{props.item.name}</p>
      <p className="text-light">$: {props.item.price}</p>
      <p className="text-light">{props.item.amount}</p>

      <input type="number"></input>
      <button className="d-block">Add to Cart</button>
    </div>
  );
}

export default ShowItems;
