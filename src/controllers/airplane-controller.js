const {StatusCodes} =require('http-status-codes')
const {AirplaneService} =require('../services') 
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error')

async function createAirplane(req,res){
    try {
    const airplane=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity
    })

    SuccessResponse.data=airplane
    res
    .status(StatusCodes.CREATED)
    .json(SuccessResponse)

}catch(err){

    ErrorResponse.error={explanation:err.explanation,statusCode:err.statusCode}

    res
    .status(err.statusCode)
    .json(ErrorResponse)
}
}

async function getAllAirplane(req,res) {
    try{
        const response=await AirplaneService.getAllAirplane()
        SuccessResponse.data=response
        res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    }catch(err){
        ErrorResponse.error={explanation:err.explanation,statusCode:err.statusCode}
        res.status(err.statusCode).json(ErrorResponse)
    }
}

async function getAirplane(req,res){
    try{
        const {id}=req.params;
        const resp=await AirplaneService.getAirplane(id);
        
        SuccessResponse.data=resp;
        res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    }catch(err){
        console.log(5)
        ErrorResponse.error={explanation:err.explanation,statusCode:err.statusCode}
        res.status(err.statusCode).json(ErrorResponse)
    }
}

async function deleteAirplane(req,res){
    try{
        const {id}=req.params;
        const resp=await AirplaneService.deleteAirplane(id);
        SuccessResponse.data=resp;
        res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    }catch(err){
        ErrorResponse.error={explanation:err.explanation,statusCode:err.statusCode}
        res.status(err.statusCode).json(ErrorResponse)
    }
}

async function updateAirplane(req,res){
    try{
        const {id}=req.params;
        const data=req.body;

        if(!data.modelNumber && !data.capacity){
            console.log(data)
            throw new AppError('please enter data to update airplane',StatusCodes.BAD_REQUEST)
        }

        const resp=await AirplaneService.updateAirplane(id,data);
        SuccessResponse.data=resp;
        res.status(StatusCodes.OK).json(SuccessResponse)
    }catch(err){
        ErrorResponse.error={explanation:err.explanation,statusCode:err.statusCode}
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}


module.exports={createAirplane,getAllAirplane,getAirplane,updateAirplane,deleteAirplane}
