const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /airports/:id 
 * req-body {}
 */

const getAirport=async(req,res)=>{
    try{
        const airport=await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airport;
        res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(err){
        ErrorResponse.error={err}
        res.status(err.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /airports
 * req-body {}
 */

async function getAirports(req,res){
    try{
        const airports=await AirportService.getAirports();
        SuccessResponse.data=airports;
        res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(err){
        ErrorResponse.error={err}
        res.status(err.statusCode).json(ErrorResponse);
    }
}
/**
 * POST : /airports 
 * req-body {name: 'IGI', cityId: 5, code: 'DEL'}
 */

const createAirport=async(req,res)=>{
    try{
        console.log('creating s')
        const airport=await AirportService.createAirport({
            name:req.body.name,
            address:req.body.address,
            cityId:req.body.cityId,
            code:req.body.code
        });
        SuccessResponse.data=airport;
        res.status(StatusCodes.CREATED).json(SuccessResponse);
    }catch(err){
        ErrorResponse.error={err}
        res.status(err.statusCode).json(ErrorResponse);
    }
}

/**
 * DELETE : /airports/:id
 * req-body {}
 */
const deleteAirport=async(req,res)=>{
    try{
        console.log('creating s')
        const resp=await AirportService.deleteAirport(req.params.id);
        SuccessResponse.data=resp;
        res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(err){
        ErrorResponse.error={err}
        res.status(err.statusCode).json(ErrorResponse);
    }
}

module.exports={getAirport,getAirports,createAirport,deleteAirport}