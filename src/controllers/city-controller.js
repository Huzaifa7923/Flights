const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services')
const {SuccessResponse,ErrorResponse}=require('../utils/common')

async function createCity(req,res){
    try{
    const city=await CityService.createCity({
        name:req.body.name
    });
    SuccessResponse.data=city;
    res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(err){
        ErrorResponse.error={explanation:err};
        res.status(err.statusCode).json(ErrorResponse);
    }
}

async function getCities(req,res){
    try{
    const city=await CityService.getCities();
    SuccessResponse.data=city;
    res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(err){
        ErrorResponse.error={explanation:err};
        res.status(err.statusCode).json(ErrorResponse);
    }
}

async function getCity(req,res){
    try{
    const city=await CityService.getCity(req.params.id);
    SuccessResponse.data=city;
    res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(err){
        ErrorResponse.error={explanation:err};
        res.status(err.statusCode).json(ErrorResponse);
    }
}

async function updateCity(req,res){
    try{
    const city=await CityService.updateCity(req.params.id,{
        name:req.body.name
    });
    SuccessResponse.data=city;
    res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(err){
        ErrorResponse.error={explanation:err};
        res.status(err.statusCode).json(ErrorResponse);
    }
}

module.exports={createCity,getCities,getCity,updateCity};