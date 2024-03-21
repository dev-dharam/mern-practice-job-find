import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        minLength: [3, "Name must be contain 3 character"],
        maxLength: [30, "Name can't exceed 30 character"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"]
    },
    phone: {
        type: Number,
        required: [true, "Please Enter Your Name"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [3, "Name must be contain 3 character"],
        maxLength: [30, "Name can't exceed 30 character"]
    },
    role: {
        type: String,
        required: true,
        enum: ["Job Seeker", "Employer"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
