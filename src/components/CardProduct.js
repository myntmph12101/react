import React from "react";

const CardProduct = (props) => {
  return (
    <div>
      {props.products.map((item, index) => {
        return (
          <li className=' list-none' key={index}>
            <img className=' h-20' src={item.photo} alt />
            {item.name}
          </li>
        );
      })}
    </div>
  );
};

export default CardProduct;
