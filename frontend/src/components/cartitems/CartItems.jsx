import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    getTotalCartItems,
    getTotalAmount,
    all_product,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items_format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Array.isArray(all_product) &&
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cart-items_format">
                  <img
                    src={e.image}
                    alt=""
                    className="cart-icon_product-icon"
                  />
                  <p>{e.name}</p>
                  <p>Rs.{e.new_price}</p>
                  <button className="cart-items_quantitiy">
                    {cartItems[e.id]}
                  </button>
                  <p>Rs.{e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    alt="Remove"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      <div className="cart-items_down">
        <div className="cart-items_total">
          <h1>Total amount</h1>
          <div>
            <div className="cart-items_total-item">
              <p>Sub-Total</p>
              <p>Rs.{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-items_total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items_total-item">
              <h3>Total</h3>
              <h3>Rs.{getTotalAmount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cart-items_promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items_promobox">
            <input type="text" name="" id="" placeholder="Enter code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
