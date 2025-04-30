import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import remove_icon from "../../assets/Admin_Assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:5000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-product_format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-product_all-products">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="list-product_format-main list-product_format">
                <img
                  src={product.image}
                  alt=""
                  className="list-product_product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => remove_product(product.id)}
                  className="list-product_remove-icon"
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
