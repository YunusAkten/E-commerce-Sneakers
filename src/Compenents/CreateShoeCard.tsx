import React from "react";
function CreateShoeCard(props: any) {
  return (
    <div className="shoediv m-2">
      <a href={`/shop/${props.name}`}>
        <div className="  shadow-sm">
          <img alt="name" className="shoeImg" src={props.img}></img>
          <div className="textDiv">
            <p> {props.name}</p>
            <p className="bold">${props.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CreateShoeCard;
