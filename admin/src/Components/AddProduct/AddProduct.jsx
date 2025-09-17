import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/Admin_Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    old_price: "",
    new_price: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    if (
      !productDetails.name ||
      !productDetails.category ||
      !productDetails.old_price ||
      !productDetails.new_price
    ) {
      alert("Please fill out all fields");
      return;
    }

    try {
      // Step 1: Upload image
      const formData = new FormData();
      formData.append("product", image);

      const imageUploadResponse = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const imageData = await imageUploadResponse.json();

      if (!imageData.success) {
        alert("Image upload failed.");
        return;
      }

      // Step 2: Send product info
      const product = {
        ...productDetails,
        image: imageData.image_url,
        old_price: Number(productDetails.old_price),
        new_price: Number(productDetails.new_price),
      };

      const productResponse = await fetch(
        "http://localhost:5000/api/product/addproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      const result = await productResponse.json();

      if (productResponse.ok && result.success) {
        alert("Product added successfully!");
        // Reset form
        setProductDetails({
          name: "",
          image: "",
          category: "",
          old_price: "",
          new_price: "",
        });
        setImage(null);
      } else {
        alert("Failed to add product");
        console.error("Add product failed:", result.message || result);
      }
    } catch (error) {
      console.error("Error during product add:", error);
      alert("Something went wrong while adding the product.");
    }
  };

  return (
    <div className="add-product">
      <div className="add-product_item-field">
        <label htmlFor="name">Product Title</label>
        <input
          type="text"
          name="name"
          placeholder="Type Here"
          value={productDetails.name}
          onChange={handleChange}
        />
      </div>

      <div className="add-product_price">
        <div className="add-product_item-field">
          <label htmlFor="old_price">Price</label>
          <input
            type="text"
            name="old_price"
            placeholder="Type Here"
            value={productDetails.old_price}
            onChange={handleChange}
          />
        </div>

        <div className="add-product_item-field">
          <label htmlFor="new_price">Offer Price</label>
          <input
            type="text"
            name="new_price"
            placeholder="Type Here"
            value={productDetails.new_price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="add-product_item-field">
        <div className="input-select">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            className="add-product-selector"
            value={productDetails.category}
            onChange={handleChange}>
            <option value="">Select</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
          </select>
        </div>
      </div>

      <div className="add-product_item-field">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="add-product_thumbnail"
            alt="thumbnail"
          />
        </label>
        <input
          onChange={handleImage}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={addProduct} className="add-produc_btn">
        Add
      </button>
    </div>
  );
};

export default AddProduct;
