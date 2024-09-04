const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateFlightCreateRequest(req, res, next) {

    if(!req.body.flightNumber || !req.body.airplaneId || !req.body.arrivalAirportId || !req.body.departureAirportId || !req.body.arrivalTime ||!req.body.departureTime || !req.body.price ) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError('Fill all the details', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }else
    if(req.body.arrivalAirportId == req.body.departureAirportId ){
        ErrorResponse.message = 'Incorrect details';
        ErrorResponse.error = new AppError('Arrival airport and destination airport can not be same', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }else
    if(getTime(req.body.arrivalTime)<=getTime(req.body.departureTime)){
        ErrorResponse.message = 'Incorrect details';
        ErrorResponse.error = new AppError('Arrival time and departure time are incorrect', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    
    next();
}

module.exports = {
    validateFlightCreateRequest
}