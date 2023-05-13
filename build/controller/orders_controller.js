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
exports.OrderController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orders_1 = __importDefault(require("../model/orders"));
const Order = mongoose_1.default.model('order', orders_1.default);
const order = new Order({
    userId: 1,
    productId: 1,
    quantity: 1,
    price: 100,
    totalPrice: 100,
    status: "pending",
});
const order1 = new Order({
    userId: 1,
    productId: 2,
    quantity: 2,
    price: 50,
    totalPrice: 100,
    status: "shipped",
});
const order2 = new Order({
    userId: 1,
    productId: 3,
    quantity: 3,
    price: 25,
    totalPrice: 75,
    status: "delivered",
});
const order3 = new Order({
    userId: 1,
    productId: 4,
    quantity: 4,
    price: 10,
    totalPrice: 40,
    status: "pending",
});
const order4 = new Order({
    userId: 1,
    productId: 5,
    quantity: 5,
    price: 5,
    totalPrice: 25,
    status: "shipped",
});
const order5 = new Order({
    userId: 1,
    productId: 6,
    quantity: 6,
    price: 3,
    totalPrice: 18,
    status: "delivered",
});
const order6 = new Order({
    userId: 1,
    productId: 7,
    quantity: 7,
    price: 7,
    totalPrice: 49,
    status: "pending",
});
const order7 = new Order({
    userId: 1,
    productId: 8,
    quantity: 8,
    price: 8,
    totalPrice: 64,
    status: "shipped",
});
const order8 = new Order({
    userId: 1,
    productId: 9,
    quantity: 9,
    price: 9,
    totalPrice: 81,
    status: "delivered",
});
const order9 = new Order({
    userId: 1,
    productId: 10,
    quantity: 10,
    price: 10,
    totalPrice: 100,
    status: "pending",
});
const order10 = new Order({
    userId: 1,
    productId: 11,
    quantity: 11,
    price: 11,
    totalPrice: 121,
    status: "shipped",
});
const orders = [order1, order2, order3, order4, order5, order6, order7, order8, order9, order10];
class OrderController {
    getOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (const i of orders) {
                    yield i.save();
                }
                return res.json({
                    status: 'success',
                });
            }
            catch (error) {
            }
        });
    }
    updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.OrderController = OrderController;
