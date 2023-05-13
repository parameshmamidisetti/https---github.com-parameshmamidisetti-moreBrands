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
exports.ProfileController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const profile_1 = __importDefault(require("../model/profile"));
const Profile = mongoose_1.default.model('Profile', profile_1.default);
const profile = new Profile({
    name: "John Doe",
    age: 30,
    gender: "male",
    address: "123 Main Street, Anytown, USA",
    phone_number: "123-456-7890",
    email: "johndoe@example.com",
});
class ProfileController {
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getProfiles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield profile.save();
                return res.json({
                    status: 1,
                });
            }
            catch (error) {
                console.log(error);
                return res.json({
                    status: error,
                    "message": "catch bloc "
                });
            }
        });
    }
    updateProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.ProfileController = ProfileController;
