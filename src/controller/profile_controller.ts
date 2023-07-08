import mongoose from "mongoose";

import { Request, Response } from "express";
import profileSchema from "../model/profile";



const Profile = mongoose.model('Profile', profileSchema);



const profile = new Profile({
    name: "John Doe",
    age: 30,
    gender: "male",
    address: "123 Main Street, Anytown, USA",
    phone_number: "123-456-7890",
    email: "johndoe@example.com",
});

export class ProfileController {


    async getProfile(req: Request, res: Response) {

    }

    async getProfiles(req: Request, res: Response) {
        const result = await Profile.find({})

        return res.json(
            {
                status: 1,
                profiles: result
            }
        )

    }
    async createProfile(req: Request, res: Response) {
        try {

            await profile.save();
            return res.json(
                {
                    status: 1,
                }
            )

        } catch (error) {
            console.log(error);

            return res.json(
                {
                    status: error,
                    "message": "catch bloc "
                }
            )
        }
    }
    async updateProfile(req: Request, res: Response) {

    }
    async deleteProfile(req: Request, res: Response) {

    }
}