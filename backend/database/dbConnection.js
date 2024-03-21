import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017");
        console.log("Database Connected");
    } catch (error) {
        console.log(`Error occured in database:- ${error}`);
    }
}

