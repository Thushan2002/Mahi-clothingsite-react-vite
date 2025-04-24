import React from "react";
import "./Popular.css";
import product_data from "../../assets/Frontend_Assets/data";
import Item from "../item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {product_data.map((item, id) => {
          return (
            <Item
              key={id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
