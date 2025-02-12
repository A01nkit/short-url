import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    originalUrl: {//From user aka orignal url
        type: String,
        required: true
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    readCount: {
        type: Number,
        default: 0
    }
},
{ timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);
