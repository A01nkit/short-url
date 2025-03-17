import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    originalUrl: {//From user aka orignal url
        type: String,
        required: true
    },
    analytics: [{
        ipAddress: {
            type: String,
        },
        device: {//sec-ch-ua-mobile
            type: String,
        },
        os: {//sec-ch-ua-platform
            type: String,
        },
        browser: {
            type: String,
        },
        timestamp: { 
            type: Date, default: Date.now 
        }
    }],

},
{ timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);
