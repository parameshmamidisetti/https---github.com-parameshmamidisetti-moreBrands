import express, { Application, Request, Response } from "express";
import { ProductController } from "./controller/product_controller";
import mongoose from 'mongoose';
import { CompanyController } from "./controller/company_controller";
import { ProfileController } from "./controller/profile_controller";
import { OrderController } from "./controller/orders_controller";


const app: Application = express();

app.use(express.json());
const port: number = 3001;

const productController = new ProductController();
const companyController = new CompanyController();
const profileController = new ProfileController();
const orderController = new OrderController();

mongoose.connect('mongodb+srv://parameshmamidisetti:paramesh@cluster0.5wsinm7.mongodb.net/?retryWrites=true&w=majority')
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

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("api working fine ")
});
app.listen(port, () => {
    console.log("listening on port " + port);
});





