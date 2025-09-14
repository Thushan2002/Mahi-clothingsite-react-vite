import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiTag,
  FiShoppingBag,
} from "react-icons/fi";

const CartItems = () => {
  const {
    getTotalCartItems,
    getTotalAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim() !== "") {
      setPromoApplied(true);
      // Here you would typically validate and apply the promo code
    }
  };

  const handleQuantityChange = (productId, change) => {
    if (change > 0) {
      addToCart(productId);
    } else if (cartItems[productId] > 1) {
      // Only remove if quantity is more than 1
      removeFromCart(productId);
    }
  };

  return (
    <div className="cart-items">
      <div className="cart-header">
        <h1>
          <FiShoppingBag /> Your Shopping Cart
        </h1>
        <p>{getTotalCartItems()} items</p>
      </div>

      <div className="cart-items-container">
        {Array.isArray(all_product) &&
        all_product.some((e) => cartItems[e.id] > 0) ? (
          all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id} className="cart-item-card">
                  <div className="cart-item-image">
                    <img src={e.image} alt={e.name} />
                  </div>

                  <div className="cart-item-details">
                    <h3>{e.name}</h3>
                    <p className="item-price">
                      Rs. {e.new_price.toLocaleString()}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => handleQuantityChange(e.id, -1)}
                        disabled={cartItems[e.id] <= 1}>
                        <FiMinus />
                      </button>
                      <span>{cartItems[e.id]}</span>
                      <button onClick={() => handleQuantityChange(e.id, 1)}>
                        <FiPlus />
                      </button>
                    </div>

                    <p className="item-total">
                      Total: Rs.{" "}
                      {(e.new_price * cartItems[e.id]).toLocaleString()}
                    </p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(e.id)}
                    aria-label="Remove item">
                    <FiTrash2 />
                  </button>
                </div>
              );
            }
            return null;
          })
        ) : (
          <div className="empty-cart">
            <FiShoppingBag size={48} />
            <h2>Your cart is empty</h2>
            <p>Add some items to get started</p>
          </div>
        )}
      </div>

      {getTotalCartItems() > 0 && (
        <div className="cart-summary">
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-item">
              <span>Subtotal</span>
              <span>Rs. {getTotalAmount().toLocaleString()}</span>
            </div>

            <div className="summary-item">
              <span>Shipping</span>
              <span className="free-shipping">Free</span>
            </div>

            {promoApplied && (
              <div className="summary-item promo-applied">
                <span>Discount (Promo Code)</span>
                <span>-Rs. {(getTotalAmount() * 0.1).toLocaleString()}</span>
              </div>
            )}

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <span>
                Rs.{" "}
                {promoApplied
                  ? (getTotalAmount() * 0.9).toLocaleString()
                  : getTotalAmount().toLocaleString()}
              </span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout <FiArrowRight />
            </button>
          </div>

          <div className="promo-section">
            <div className="promo-header">
              <FiTag />
              <h3>Promo Code</h3>
            </div>

            <p>Enter your promo code if you have one</p>

            <div className="promo-input-group">
              <input
                type="text"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
              />
              <button
                onClick={handleApplyPromo}
                disabled={promoApplied || promoCode.trim() === ""}>
                {promoApplied ? "Applied" : "Apply"}
              </button>
            </div>

            {promoApplied && (
              <div className="promo-success">
                Promo code applied successfully! 10% discount added.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
