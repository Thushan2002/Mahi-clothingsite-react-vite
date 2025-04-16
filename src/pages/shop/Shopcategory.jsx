import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import drop_down from "../../assets/Frontend_Assets/dropdown_icon.png";
import Item from "../../components/item/Item";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          return props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null;
        })}
      </div>
      <div className="shopCategory-btn">Explore More</div>
    </div>
  );
};

export default Shopcategory;
