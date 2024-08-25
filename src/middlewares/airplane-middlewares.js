const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

const validateCreateRequest=(req,res,next)=>{
    console.log(req.body);

    if(!req.body.modelNumber){

        ErrorResponse.error=new AppError('Model Number not found !',StatusCodes.BAD_REQUEST)

        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }

    next();
}

module.exports={validateCreateRequest}