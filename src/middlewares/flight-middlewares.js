const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateFlightCreateRequest(req, res, next) {

    // if(req.body.arrivalTime ){

    // console.log(req.body.arrivalTime)
    // let x=new Date(req.body.arrivalTime)
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
    if(req.body.arrivalTime<=req.body.departureTime){
        ErrorResponse.message = 'Incorrect details';
        ErrorResponse.error = new AppError('Arrival time and departure time are incorrect', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    
    next();
}


function validateUpdateSeats(req,res,next){
    console.log('middleware')
    if(!req.body.id){
        ErrorResponse.message = 'Incorrect details';
        ErrorResponse.error = new AppError('Flight Id missing', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.seats){
        ErrorResponse.message = 'Incorrect details';
        ErrorResponse.error = new AppError('Seats missing', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateFlightCreateRequest,
    validateUpdateSeats
}