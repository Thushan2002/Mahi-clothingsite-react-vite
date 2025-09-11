import React from "react";
import "./Popular.css";
import product_data from "../../assets/Frontend_Assets/data";
import Item from "../item/Item";
import Title from "../title/Title";

const Popular = () => {
  return (
    <div className="popular">
      <Title title={"POPULAR"} size={"lg"} />
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
