import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js';

import { Url } from '../models/url.model.js';


export const returnAnalytics = asyncHandler(async (req, res, next) => {
    
    const {shortUrl} = req.params;
    console.log(shortUrl);

    /*
    Write an aggregation pipleline to get analytics for the given id. Id should be calculated from the frontend.
    1. Match the id
    2. then retreive the analytics array
    */
    /*const url = await Url.aggregate([
        {
            $match: {
                shortUrl
            },
            {

            }

        }
    ])
    
    return ApiResponse.send(res, 'Analytics', 200, url.readData)*/
    
});