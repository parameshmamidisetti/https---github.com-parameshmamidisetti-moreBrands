"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./controller/product_controller");
const mongoose_1 = __importDefault(require("mongoose"));
const company_controller_1 = require("./controller/company_controller");
const profile_controller_1 = require("./controller/profile_controller");
const orders_controller_1 = require("./controller/orders_controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3001;
const productController = new product_controller_1.ProductController();
const companyController = new company_controller_1.CompanyController();
const profileController = new profile_controller_1.ProfileController();
const orderController = new orders_controller_1.OrderController();
mongoose_1.default.connect('mongodb+srv://parameshmamidisetti:paramesh@cluster0.5wsinm7.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!')).catch((e) => console.log(e));
app.get("/products", productController.getProducts);
app.get("/products/:productId", productController.getProduct);
app.post("/products", productController.createProduct);
app.put("/products/:productId", productController.updateProduct);
app.delete("/products/:productId", productController.deleteProduct);
// companies routes 
app.get("/companies", companyController.getCompanies);
app.get("/company/:companyId", companyController.getCompany);
app.post("/company", companyController.createCompany);
app.put("/company/:companyId", companyController.updateCompany);
app.delete("/company/:companyId", companyController.deleteCompany);
// profile routes 
app.get("/profiles", profileController.getProfiles);
app.get("/profile/:profileId", profileController.getProfile);
app.post("/profile", profileController.createProfile);
app.put("/profile/:profileId", profileController.updateProfile);
app.delete("/profile/:profileId", profileController.deleteProfile);
// orders routes 
app.get("/orders", orderController.getOrders);
app.get("/order/:ordersId", orderController.getOrder);
app.post("/order", orderController.createOrder);
app.put("/order/:ordersId", orderController.updateOrder);
app.delete("/order/:ordersId", orderController.deleteOrder);
app.get("/", (req, res) => {
    res.status(200).send("api working fine ");
});
app.listen(port, () => {
    console.log("listening on port " + port);
});
