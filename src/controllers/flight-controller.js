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

const getFlights=async(req,res)=>{
    try{
        const flights=await FlightService.getFlights(req.query);
        SuccessResponse.data=flights;

        res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(err){
        ErrorResponse.error=err;
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}

const getFlight=async(req,res)=>{
    try{
    const flight=await FlightService.getFlight(req.params.id);
    SuccessResponse.data=flight;
    
    res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(err){
        ErrorResponse.error=err;
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}

const updateRemainingSeats=async(req,res)=>{
    try{
        const resp=await FlightService.updateRemainingSeats({
            id:req.params.id,
            seats:req.body.seats?req.body.seats:1,
            dec:req.body.dec== ('0' || 0)?0:1
        })
        SuccessResponse.data=resp;
        res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(err){
        ErrorResponse.error=err;
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}
module.exports={
    create,
    getFlights,
    getFlight,
    updateRemainingSeats
}