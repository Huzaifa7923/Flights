const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository=new CityRepository();

async function createCity(data){
    try{
        const resp=await cityRepository.create(data);
        return resp;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

async function getCities(){
    try{
        const resp=await cityRepository.getAll();
        return resp;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

async function getCity(id){
    try{
        const resp=await cityRepository.get(id);
        if(!resp){
            throw new Error('City does not exist')
        }
        return resp;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

async function updateCity(id,data){
    try{
        const resp=await cityRepository.update(id,data);
        if(resp[0]===0){
            throw new Error('No such city exists');
        }
        return resp;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

module.exports={createCity,getCities,getCity,updateCity}