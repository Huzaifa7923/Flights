const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} =require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try{
    const airplane=await airplaneRepository.create(data)
    return airplane;
    }catch(error){
        throw new AppError(error.message,StatusCodes.BAD_REQUEST)
    }
}

async function getAllAirplane(){
    try{
    const airplane=await airplaneRepository.getAll()
    return airplane;
    }catch(err){
        throw new AppError(err.message,StatusCodes.NOT_FOUND);
    }
}

async function getAirplane(data){
    try{
    const airplane=await airplaneRepository.get(data)
    return airplane;
    }catch(err){
        throw new AppError(err.message,err.StatusCodes);
    }
}

async function deleteAirplane(data){
    try{
    const airplane=await airplaneRepository.destroy(data)
    return airplane;

    }catch(err){
        throw new AppError(err.message,err.StatusCodes);
    }
}


async function updateAirplane(id,data){
    try{
    const airplane=await airplaneRepository.update(id,data)
    console.log(airplane)
    if(airplane[0]===0){
        throw new AppError('No such airplane exists',StatusCodes.NOT_FOUND);
    }
    return airplane;
    }catch(err){
        if(err instanceof AppError){
            throw err;
        }
        throw new AppError(err.message,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports={createAirplane,getAllAirplane,getAirplane,updateAirplane,deleteAirplane};