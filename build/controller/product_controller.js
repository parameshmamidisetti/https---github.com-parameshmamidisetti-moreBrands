"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_1 = __importDefault(require("../model/product"));
const Product = mongoose_1.default.model("Product", product_1.default);
const product = new Product({
    name: "My Product",
    description: "This is my product.",
    price: 100,
    quantity: 10,
});
class ProductController {
    // Get all products
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Product.find({});
            return res.json({
                status: 1,
                products: result
            });
        });
    }
    // Get a single product
    getProduct(req, res) {
    }
    // Create a new product
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product.save();
                return res.json({
                    status: 1,
                    msg: 'new product added'
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    // Update a product
    updateProduct(req, res) {
    }
    // Delete a product
    deleteProduct(req, res) {
    }
}
exports.ProductController = ProductController;
