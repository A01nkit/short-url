import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js';

import { Url } from '../models/url.model.js';
import { commandOptions } from 'redis';

export const createShortUrl = asyncHandler(async (req, res, next) => {
    const {originalUrl} = req.body;
    if (!originalUrl) {
        throw new ApiError(404, 'Please provide a valid url');
    }
    
    const result = await Url.create({
        originalUrl
    });
    if (!result) {
        throw new ApiError(404, 'Something went wrong');
    }
    //const shortId = result._id.toString().slice(-6);
    const shortId = result._id;

    let shortUrl = process.env.BASE_URL + shortId;
    
    return ApiResponse.send(res, 'Sucessfully generated', 200, shortUrl)

});

export const returnOriginalUrl = asyncHandler(async (req, res, next) => {
    const {shortId} = req.params
   
    let {'sec-ch-ua-platform': os, 'sec-ch-ua-mobile': device, 'sec-ch-ua': browser, 'user-agent': userAgent} = req.headers;
    const ipAddress = req.socket.remoteAddress;
    console.log(req.headers.userAgent);
    device = device === "?0" ? "Desktop" : "Mobile";

    const originalUrl = await  Url.findOne({ _id: shortId });
    if (!originalUrl) {
        throw new ApiError(404, 'Short URL is invalid');
    }
    originalUrl.analytics.push({
        os,
        device,
        ipAddress,
        browser
    });
    await originalUrl.save();
    
    res.redirect(originalUrl.originalUrl);
    
    
});


