import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js';

import { Url } from '../models/url.model.js';
import { generateShortCode } from '../services/shortner.js';

export const createShortUrl = asyncHandler(async (req, res, next) => {
    const {originalUrl} = req.body;
    if (!originalUrl) {
        throw new ApiError(404, 'Please provide a valid url');
    }
    
    const urlCode = generateShortCode()
    console.log(urlCode)
    await Url.create({
        originalUrl,
        shortId: urlCode
    })
    
    let shortUrl = process.env.BASE_URL + urlCode

    return ApiResponse.send(res, 'Sucessfully generated', 200, shortUrl)

});

export const returnOriginalUrl = asyncHandler(async (req, res, next) => {
    const {shortId} = req.params
    
    const result = await Url.findOne({shortId})
    if (!result) {
        throw new ApiError(404, 'Short Url is invalid');
    }
    
    const newResult = await Url.updateOne(
        { shortId: shortId },
        { $inc: { readCount: 1 } }
      );
    

    const {originalUrl} = result

    res.redirect(originalUrl);    
});
