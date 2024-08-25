const {AirplaneRepository} =require('../repositories')

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try{
    const airplane=await airplaneRepository.create(data)
    return airplane;
    }catch(err){
        throw new Error(err);
    }
}

async function getAllAirplane(){
    try{
    const airplane=await airplaneRepository.getAll()
    return airplane;
    }catch(err){
        throw new Error(err);
    }
}

async function getAirplane(data){
    try{
    const airplane=await airplaneRepository.get(data)
    return airplane;
    }catch(err){
        throw new Error(err);
    }
}


async function updateAirplane(id,data){
    try{
    const airplane=await airplaneRepository.update(id,data)
    return airplane;
    }catch(err){
        throw new Error(err);
    }
}


module.exports={createAirplane,getAllAirplane,getAirplane,updateAirplane};