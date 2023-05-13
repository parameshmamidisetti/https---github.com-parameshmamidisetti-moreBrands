import { Request, Response } from "express";
import mongoose from "mongoose";
import productSchema from "../model/product";

const Product = mongoose.model("Product", productSchema);

const product = new Product({
    name: "My Product",
    description: "This is my product.",
    price: 100,
    quantity: 10,
});




export class ProductController {

    // Get all products
    async getProducts(req: Request, res: Response) {
        const result = await Product.find({})
        return res.json(
            {
                status: 1,
                products: result
            }
        )
    }

    // Get a single product
    getProduct(req: Request, res: Response) {

    }

    // Create a new product
    async createProduct(req: Request, res: Response) {
        try {
            await product.save()
            return res.json(
                {
                    status: 1,
                    msg: 'new product added'
                }
            )
        } catch (e) {
            console.log(e);
        }
    }

    // Update a product
    updateProduct(req: Request, res: Response) {

    }

    // Delete a product
    deleteProduct(req: Request, res: Response) {

    }
}
