const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const flightRepository=new FlightRepository();

const create=async(data)=>{
    try{
    const flight=await flightRepository.create(data);
    return flight;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST)
    }
}

module.exports={create}