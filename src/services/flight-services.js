const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {Op} =require('sequelize');
const { Sequelize } = require('../models');

const flightRepository=new FlightRepository();

const create=async(data)=>{
    try{
    const flight=await flightRepository.create(data);
    return flight;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST)
    }
}

// http://localhost:3000/api/v1/flights?price=500000&trips=BOM-DEL
const getFlights=async(query)=>{


    // Sequelize

    // Project.findAll({
    //     where: {
    //       name: 'Some Project',
    //       [Op.operator_koi]: [ ],
    //     },
    //  order: [
    //     ['username', 'DESC'],
    //   ],

    //   });
    
    let customFilter={};// where 
    let sort_filter=[];//order array

    const endingTripTime = " 23:59:00";
    if(query.trips){
        let [departureAirportId, arrivalAirportId]=query.trips.split('-');
        
        customFilter.departureAirportId=departureAirportId
        customFilter.arrivalAirportId=arrivalAirportId
    }
    if(query.price){
        let [minPrice,maxPrice]=query.price.split("-");

        customFilter.price={
            [Op.between]:[minPrice,((maxPrice==undefined)?200000000:maxPrice)]
        }
    }

    if(query.travellers){
        customFilter.totalSeats={
        [Op.gte]:query.travellers
        }
    }

    if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+endingTripTime]
        }
    }

    


    //SORT 
    // Foo.findOne({
    //     order: [
    //       // will return `username` DESC
    //       ['username', 'DESC'],
    //     ]})

    // &sort=price_desc,tripDate_asc,travellers_desc
    // order:[
    //     ['',''],
    //     ['','']
    // ]
    if(query.sort){
        const params=query.sort.split(',')
        const sort_filters=params.map((param)=>param.split('_'))

        sort_filter=sort_filters
    }

    console.log(customFilter,sort_filter);

    try{
        const flights=await flightRepository.getAllFlights(customFilter,sort_filter);
        return flights;
    }catch(err){
        console.log(err);
        throw new AppError(err.message,StatusCodes.BAD_REQUEST)
    }


}

const getFlight=async(id)=>{
    try{
    const flight=await flightRepository.get(id);
    return flight;
    }catch(err){
        throw new AppError(err.message,StatusCodes.BAD_REQUEST);
    }
}

const updateRemainingSeats=async(data)=>{
    try{
        const resp=await flightRepository.updateRemainingSeats(data.id,data.seats,data.dec);
        console.log(resp);
        return resp;
    }catch(err){
        console.log(err);
        throw new AppError('Seats are not update',StatusCodes.BAD_REQUEST);
    }
}
module.exports={create,getFlights,getFlight,updateRemainingSeats}