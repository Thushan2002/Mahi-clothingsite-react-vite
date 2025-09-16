import Product from "../models/product.js";
import generateToken from "../utils/generateToken.js";



export const addProduct = async (req, res) => {
    try {
        let products = await Product.find({})
        let id;
        if (products.length > 0) {
            let last_product_array = products.slice(-1)
            let last_product = last_product_array[0]
            id = last_product.id + 1
        }
        else {
            id = 1
        }
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        })
        await product.save()
        res.status(200).json({
            success: true,
            name: req.body.name,
            message: "Product Added Successfully"
        })
    } catch (err) {
        console.log(`Error in AddProduct controller: ${err.message}`);
        res.status(500).json({ error: "Failed to add products" });
    }
}

// all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, products });
    } catch (err) {
        console.log(`Error in getAllProduct controller: ${err.message}`);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

// creating API for deleting products

export const removeProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id })
        console.log("Removed");
        res.json({
            success: true,
            name: req.body.name
        })
    } catch (err) {
        console.log(`Error in removeProduct controller: ${err.message}`);
        res.status(500).json({ error: "Failed to Delete product" });
    }
}