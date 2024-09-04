const { StatusCodes } = require('http-status-codes');
const { AirportRepository} =require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository=new AirportRepository();

const createAirport=async(data)=>{
    try{
    const airport=await airportRepository.create(data);
    return airport;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}
const getAirport=async(data)=>{
    try{
    const airport=await airportRepository.get(data);
    return airport;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

async function getAirports(){
    try{
    const airport=await airportRepository.getAll();
    return airport; 
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}
const deleteAirport=async(data)=>{
    try{
    const resp=await airportRepository.destroy(data);
    return resp
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
}