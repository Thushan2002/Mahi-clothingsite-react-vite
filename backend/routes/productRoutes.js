import express from "express"
import { addProduct, getAllProducts, removeProduct } from "../controllers/productController.js"

const productRouter = express.Router()

productRouter.post("/addproduct", addProduct)
productRouter.get("/allproducts", getAllProducts)
productRouter.delete('/removeproduct', removeProduct)

export default productRouter;