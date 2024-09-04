const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services")
const {SuccessResponse,ErrorResponse} = require('../utils/common')

const create=async (req,res)=>{

    try{
    const flight=await FlightService.create({
        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        arrivalAirportId:req.body.arrivalAirportId,
        departureAirportId:req.body.departureAirportId,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        price:req.body.price,
    })
    SuccessResponse.data=flight;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
}catch(err){
    ErrorResponse.error={explanation:err};
    res.status(err.StatusCodes).json(ErrorResponse);
}
}

module.exports={
    create
}