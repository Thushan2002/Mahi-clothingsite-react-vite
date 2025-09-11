import React from "react";
import "./NewCollections.css";
import newCollections from "../../assets/Frontend_Assets/new_collections";
import Item from "../item/Item";
import Title from "../title/Title";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <Title title={"NEW COLLECTIONS"} size={"lg"} />
      <div className="collections">
        {newCollections.map((item, id) => {
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

export default NewCollections;
