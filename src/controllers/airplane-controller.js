const {StatusCodes} =require('http-status-codes')
const {AirplaneService} =require('../services') 
const { SuccessResponse, ErrorResponse } = require('../utils/common')

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

        res
        .status(StatusCodes.OK)
        .json({
            data:response
        })
    }catch(err){
        console.log(err)
        throw new Error;
    }
}

async function getAirplane(req,res){
    try{
        const {id}=req.params;
        const resp=await AirplaneService.getAirplane(id);
        
        res
        .status(StatusCodes.OK)
        .json({
            data:resp
        })
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

async function updateAirplane(req,res){
    try{
        const {id}=req.params;
        const data=req.body;

        const resp=await AirplaneService.updateAirplane(id,data);

        res.json({
            data:resp
        })
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}


module.exports={createAirplane,getAllAirplane,getAirplane,updateAirplane}
