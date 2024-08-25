const {StatusCodes} =require('http-status-codes')
const {AirplaneService} =require('../services') 

async function createAirplane(req,res){
    try {
    const airplane=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity
    })

    res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message:'Created',
        data:airplane,
        error:{}
    })

}catch(err){
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
        success:false,
        message:'Something went wrong ',
        data:{},
        error:err
    })
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
