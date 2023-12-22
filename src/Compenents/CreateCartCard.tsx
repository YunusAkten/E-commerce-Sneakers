import React, { FormEvent } from "react";
import { useState } from "react";
import { shoes } from "../types/shoesType";
function CreateCartCard(props: shoes) {
  const [item, setItem] = useState(props);
  const handleChange = (e: React.ChangeEvent) => {};
  return (
    <div className=" mt-4">
      <div className="d-flex align-items-center">
        <div>
          <img className="cartImg" alt={item.name} src={item.img}></img>
        </div>
        <div>
          <h2>{item.name}</h2>
          <h2>${item.price}</h2>
          <input
            type="number"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={handleChange}
            defaultValue={item.amount}
          />
        </div>
      </div>
    </div>
  );
}
export default CreateCartCard;
