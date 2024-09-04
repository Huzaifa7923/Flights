const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateAirportCreateRequest(req, res, next) {

    if(!req.body.code || !req.body.name || !req.body.cityId) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError('Fill all the details', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateAirportCreateRequest
}