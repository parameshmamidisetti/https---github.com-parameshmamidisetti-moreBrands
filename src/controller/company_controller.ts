import mongoose from "mongoose";
import companySchema from "../model/company";
import { Request, Response } from "express";





const Company = mongoose.model("Company", companySchema);




const company1 = new Company({
    name: "ABB India Ltd.",
    description: "ABB India Ltd. is an Indian multinational corporation headquartered in Bangalore, India. It is a subsidiary of ABB Group, a Swiss-Swedish multinational corporation headquartered in Zurich, Switzerland. ABB India Ltd. is engaged in the business of power and automation technologies.",
    products: ["Power generation", "Transmission", "Distribution", "Automation", "Robotics"],
    website: "https://www.abb.com/in",
    logo: "https://www.abb.com/in/globalassets/image/brand/logos/abb-india-logo.png",
    address: "1, Hadapsar Industrial Estate, Pune, Maharashtra 411028, India",
    city: "Pune",
    state: "Maharashtra",
    zipcode: "411028",
    country: "India",
    phone: "020 6600 0000",
    email: "info.in@abb.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});

const company2 = new Company({
    name: "Bajaj Electricals Ltd.",
    description: "Bajaj Electricals Limited is an Indian multinational company headquartered in Mumbai, India. It is a part of the Bajaj Group, a diversified conglomerate founded by Jamnalal Bajaj in 1926. Bajaj Electricals Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",
    products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
    website: "https://www.bajajelectricals.com/",
    logo: "https://www.bajajelectricals.com/static/frontend/assets/img/common/logo.svg",
    address: "144, Dr. E. Moses Road, Worli, Mumbai, Maharashtra 400 018, India",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: "400 018",
    country: "India",
    phone: "022 2491 0000",
    email: "contactus@bajajelectricals.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});

const company3 = new Company({
    name: "Crompton Greaves Consumer Electricals Ltd.",
    description: "Crompton Greaves Consumer Electricals Limited is an Indian multinational company headquartered in Mumbai, India. It is a part of the RPG Group, a diversified conglomerate founded by Ram Prasad Goenka in 1920. Crompton Greaves Consumer Electricals Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",

    products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
    website: "https://www.cromptongreeves.com/",
    logo: "https://www.cromptongreeves.com/static/frontend/assets/img/common/logo.svg",
    address: "4, Dr. E. Moses Road, Worli, Mumbai, Maharashtra 400 018, India",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: "400 018",
    country: "India",
    phone: "022 2491 0000",
    email: "contactus@cromptongreeves.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});
const company4 = new Company({
    name: "Havells India Ltd.",
    description: "Havells India Limited is an Indian multinational company headquartered in Kolkata, India. It is a part of the Havells Group, a diversified conglomerate founded by Shri Tulsi Tanti in 1958. Havells India Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",

    products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
    website: "https://www.havells.com/",
    logo: "https://www.havells.com/static/frontend/assets/img/common/logo.svg",
    address: "29, Camac Street, Kolkata, West Bengal 700 001, India",
    city: "Kolkata",
    state: "West Bengal",
    zipcode: "700 001",
    country: "India",
    phone: "033 2228 1111",
    email: "contactus@havells.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});
const company5 = new Company({
    name: "Legrand India Pvt. Ltd.",
    description: "Legrand India Pvt. Ltd. is an Indian multinational company headquartered in Gurugram, India. It is a part of the Legrand Group, a French multinational company founded in 1886. Legrand India Pvt. Ltd. is engaged in the business of electrical wiring, fixtures, and fittings.",

    products: ["Electrical wiring", "Fixtures", "Fittings"],
    website: "https://www.legrand.in/",
    logo: "https://www.legrand.in/static/frontend/assets/img/common/logo.svg",
    address: "Plot No. 1",
    city: "Gurugram",
    state: "Haryana",
    zipcode: "122001",
    country: "India",
    phone: "0124 477 0000",
    email: "contactus@legrand.in",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});

const company6 = new Company({
    name: "Schneider Electric India Pvt. Ltd.",
    description: "Schneider Electric India Pvt. Ltd. is an Indian multinational company headquartered in Gurgaon, India. It is a subsidiary of Schneider Electric, a French multinational company founded in 1836. Schneider Electric India Pvt. Ltd. is engaged in the business of power management, automation, and security.",

    products: ["Power management", "Automation", "Security"],
    website: "https://www.schneider-electric.in/",
    logo: "https://www.schneider-electric.in/static/frontend/assets/img/common/logo.svg",
    address: "Plot No. 1, Sector 14, Institutional Area, Gurgaon, Haryana 122001, India",
    city: "Gurgaon",
    state: "Haryana",
    zipcode: "122001",
    country: "India",
    phone: "0124 477 0000",
    email: "contactus@schneider-electric.in",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});

const company7 = new Company({
    name: "Siemens Ltd.",
    description: "Siemens Ltd. is an Indian multinational company headquartered in Mumbai, India. It is a subsidiary of Siemens AG, a German multinational company founded in 1847. Siemens Ltd. is engaged in the business of power generation, transmission, distribution, automation, and software.",

    products: ["Power generation", "Transmission", "Distribution", "Automation", "Software"],
    website: "https://www.siemens.com/in/",
    logo: "https://www.siemens.com/in/static/frontend/assets/img/common/logo.svg",
    address: "1, Worli Seaface, Worli, Mumbai, Maharashtra 400 025, India",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: "400 025",
    country: "India",
    phone: "022 2491 0000",
    email: "contactus@siemens.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});


const company8 = new Company({
    name: "V-Guard Industries Ltd.",
    description: "V-Guard Industries Ltd. is an Indian multinational company headquartered in Kochi, India. It is a part of the V-Guard Group, a diversified conglomerate founded by Kochouseph Chittilappilly in 1977. V-Guard Industries Ltd. is engaged in the business of electrical equipment, lighting, fans, and appliances.",

    products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
    website: "https://www.v-guard.com/",
    logo: "https://www.v-guard.com/static/frontend/assets/img/common/logo.svg",
    address: "17/18, Kakkanad-Kumbalangi Road, Edappally, Kochi, Kerala 682024, India",
    city: "Kochi",
    state: "Kerala",
    zipcode: "682024",
    country: "India",
    phone: "0484 237 7777",
    email: "contactus@v-guard.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});

const company9 = new Company({
    name: "Finolex Cables Ltd.",
    description: "Finolex Cables Ltd. is an Indian multinational company headquartered in Mumbai, India. It is a part of the Finolex Group, a diversified conglomerate founded by P. N. Gadgil in 1958. Finolex Cables Ltd. is engaged in the business of cables and wires.",

    products: ["Cables", "Wires"],
    website: "https://www.finolex.com/",
    logo: "https://www.finolex.com/static/frontend/assets/img/common/logo.svg",
    address: "191, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra 400 018, India",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: "400 018",
    country: "India",
    phone: "022 2491 0000",
    email: "contactus@finolex.com",
    createdAt: "2023-05-13T12:00:00Z",
    updatedAt: "2023-05-13T12:00:00Z"
});

export class CompanyController {

    // Get all products
    async getCompanies(req: Request, res: Response) {
        const result = await Company.find({})
        return res.json(
            {
                status: 1,
                companies: result
            }
        )
    }

    // Get a single product
    async getCompany(req: Request, res: Response) {

    }



    // Create a new company
    async createCompany(req: Request, res: Response) {


        try {
            await company1.save();
            await company2.save();
            await company3.save();
            await company4.save();
            await company5.save();
            await company6.save();
            await company7.save();
            await company8.save();
            await company9.save();

            return res.json(
                {
                    status: 1,
                    msg: 'new company  added'
                }
            )

        } catch (e) {
            console.log(e);
        }
    }

    // Update a product
    async updateCompany(req: Request, res: Response) {

    }

    // Delete a product
    async deleteCompany(req: Request, res: Response) {

    }



}








// {
//     "name": "ABB India Ltd.",
//     "description": "ABB India Ltd. is an Indian multinational corporation headquartered in Bangalore, India. It is a subsidiary of ABB Group, a Swiss-Swedish multinational corporation headquartered in Zurich, Switzerland. ABB India Ltd. is engaged in the business of power and automation technologies.",
//     "industry": "Electrical",
//     "website": "https://www.abb.com/in",
//     "logo": "https://www.abb.com/in/globalassets/image/brand/logos/abb-india-logo.png",
//     "address": "1, Hadapsar Industrial Estate, Pune, Maharashtra 411028, India",
//     "city": "Pune",
//     "state": "Maharashtra",
//     "zipcode": "411028",
//     "country": "India",
//     "phone": "020 6600 0000",
//     "email": "info.in@abb.com",
//     "createdAt": "2023-05-13T12:00:00Z",
//     "updatedAt": "2023-05-13T12:00:00Z"
//   },
//   {
//     "name": "Bajaj Electricals Ltd.",
//     "description": "Bajaj Electricals Limited is an Indian multinational company headquartered in Mumbai, India. It is a part of the Bajaj Group, a diversified conglomerate founded by Jamnalal Bajaj in 1926. Bajaj Electricals Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     "industry": "Electrical",
//     "website": "https://www.bajajelectricals.com/",
//     "logo": "https://www.bajajelectricals.com/static/frontend/assets/img/common/logo.svg",
//     "address": "144, Dr. E. Moses Road, Worli, Mumbai, Maharashtra 400 018, India",
//     "city": "Mumbai",
//     "state": "Maharashtra",
//     "zipcode": "400 018",
//     "country": "India",
//     "phone": "022 2491 0000",
//     "email": "contactus@bajajelectricals.com",
//     "createdAt": "2023-05-13T12:00:00Z",
//     "updatedAt": "2023-05-13T12:00:00Z"
//   },
//   {
//     "name": "Crompton Greaves Consumer Electricals Ltd.",
//     "description": "Crompton Greaves Consumer Electricals Limited is an Indian multinational company headquartered in Mumbai, India. It is a part of the RPG Group, a diversified conglomerate founded by Ram Prasad Goenka in 1920. Crompton Greaves Consumer Electricals Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     "industry": "Electrical",
//     "website": "https://www.cromptongreeves.com/",
//     "logo": "https://www.cromptongreeves.com/static/frontend/assets/img/common/logo.svg",
//     "address": "4, Dr. E. Moses Road, Worli, Mumbai, Maharashtra 400 018, India",
//     "city": "Mumbai",
//     "state": "Maharashtra",
//     "zipcode": "400 018",
//     "country": "India",
//     "phone": "022 2491 0000",
//     "email": "contactus@cromptongreeves.com",
//     "createdAt": "2023-05-13T12:00:00Z",
//     "updatedAt": "2023-05-13T12:00:00Z"
//   },
//   {
//     "name": "Havells India Ltd.",
//     "description": "Havells India Limited is an Indian multinational company headquartered in Kolkata, India. It is a part of the Havells Group, a diversified conglomerate founded by Shri Tulsi Tanti in 1958. Havells India Limited is engaged in the business of electrical equipment


// const company1 = new Company({
//     name: "ABB India Ltd.",
//     description: "ABB India Ltd. is an Indian multinational corporation headquartered in Bangalore, India. It is a subsidiary of ABB Group, a Swiss-Swedish multinational corporation headquartered in Zurich, Switzerland. ABB India Ltd. is engaged in the business of power and automation technologies.",
//     founded: 1988,
//     headquarters: "Bangalore, India",
//     employees: 14000,
//     revenue: 2500000000,
//     products: ["Power generation", "Transmission", "Distribution", "Automation", "Robotics"],
// });

// const company2 = new Company({
//     name: "Bajaj Electricals Ltd.",
//     description: "Bajaj Electricals Limited is an Indian multinational company headquartered in Mumbai, India. It is a part of the Bajaj Group, a diversified conglomerate founded by Jamnalal Bajaj in 1926. Bajaj Electricals Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     founded: 1926,
//     headquarters: "Mumbai, India",
//     employees: 20000,
//     revenue: 1500000000,
//     products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
// });

// const company3 = new Company({
//     name: "Crompton Greaves Consumer Electricals Ltd.",
//     description: "Crompton Greaves Consumer Electricals Limited is an Indian multinational company headquartered in Mumbai, India. It is a part of the RPG Group, a diversified conglomerate founded by Ram Prasad Goenka in 1920. Crompton Greaves Consumer Electricals Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     founded: 1920,
//     headquarters: "Mumbai, India",
//     employees: 25000,
//     revenue: 1200000000,
//     products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
// });

// const company4 = new Company({
//     name: "Havells India Ltd.",
//     description: "Havells India Limited is an Indian multinational company headquartered in Kolkata, India. It is a part of the Havells Group, a diversified conglomerate founded by Shri Tulsi Tanti in 1958. Havells India Limited is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     founded: 1958,
//     headquarters: "Kolkata, India",
//     employees: 20000,
//     revenue: 1100000000,
//     products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
// });

// const company5 = new Company({
//     name: "Legrand India Pvt. Ltd.",
//     description: "Legrand India Pvt. Ltd. is an Indian multinational company headquartered in Gurugram, India. It is a part of the Legrand Group, a French multinational company founded in 1886. Legrand India Pvt. Ltd. is engaged in the business of electrical wiring, fixtures, and fittings.",
//     founded: 1986,
//     headquarters: "Gurugram, India",
//     employees: 10000,
//     revenue: 700000000,
//     products: ["Electrical wiring", "Fixtures", "Fittings"],
// });

// const company6 = new Company({
//     name: "Schneider Electric India Pvt. Ltd.",
//     description: "Schneider Electric India Pvt. Ltd. is an Indian multinational company headquartered in Gurgaon, India. It is a subsidiary of Schneider Electric, a French multinational company founded in 1836. Schneider Electric India Pvt. Ltd. is engaged in the business of power management, automation, and security.",
//     founded: 1986,
//     headquarters: "Gurgaon, India",
//     employees: 14000,
//     revenue: 600000000,
//     products: ["Power management", "Automation", "Security"],
// });
// const company7 = new Company({
//     name: "Siemens Ltd.",
//     description: "Siemens Ltd. is an Indian multinational company headquartered in Mumbai, India. It is a subsidiary of Siemens AG, a German multinational company founded in 1847. Siemens Ltd. is engaged in the business of power generation, transmission, distribution, automation, and software.",
//     founded: 1986,
//     headquarters: "Mumbai, India",
//     employees: 12000,
//     revenue: 500000000,
//     products: ["Power generation", "Transmission", "Distribution", "Automation", "Software"],
// });

// const company8 = new Company({
//     name: "V-Guard Industries Ltd.",
//     description: "V-Guard Industries Ltd. is an Indian multinational company headquartered in Kochi, India. It is a part of the V-Guard Group, a diversified conglomerate founded by Kochouseph Chittilappilly in 1977. V-Guard Industries Ltd. is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     founded: 1977,
//     headquarters: "Kochi, India",
//     employees: 15000,
//     revenue: 400000000,
//     products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
// });

// const company9 = new Company({
//     name: "Finolex Cables Ltd.",
//     description: "Finolex Cables Ltd. is an Indian multinational company headquartered in Mumbai, India. It is a part of the Finolex Group, a diversified conglomerate founded by P. N. Gadgil in 1958. Finolex Cables Ltd. is engaged in the business of cables and wires.",
//     founded: 1958,
//     headquarters: "Mumbai, India",
//     employees: 10000,
//     revenue: 350000000,
//     products: ["Cables", "Wires"],
// });

// const company10 = new Company({
//     name: "Orient Electric Ltd.",
//     description: "Orient Electric Ltd. is an Indian multinational company headquartered in Kolkata, India. It is a part of the Orient Group, a diversified conglomerate founded by P. K. Sen in 1946. Orient Electric Ltd. is engaged in the business of electrical equipment, lighting, fans, and appliances.",
//     founded: 1946,
//     headquarters: "Kolkata, India",
//     employees: 12000,
//     revenue: 300000000,
//     products: ["Electrical equipment", "Lighting", "Fans", "Appliances"],
// });