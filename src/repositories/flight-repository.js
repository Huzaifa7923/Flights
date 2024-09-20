const CrudRepostory =require('./crud-repository')
const {Flight,Airport,Airplane} =require('../models')
const {Sequelize, where} =require('sequelize')
class FlightRepository extends CrudRepostory{
    constructor(){
        super(Flight)
    }
    async getAllFlights(filter,sort){
        const flights=await Flight.findAll({
            where: filter,
            order:sort,

            include:[
                {
                    model:Airplane,
                    as:'airplaneDetails',
                },
                {
                model:Airport,
                as:'arrivalAirportDetails',
                on:{
                    arrivalAirportId: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirportDetails.code")),
                }
            },
                {
                model:Airport,
                as:'departureAirportDetails',
                on:{
                    departureAirportId: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirportDetails.code")),
                }
            },

        ]
          });
          return flights;
    }

    async updateRemainingSeats(id,seats,dec){

        if(dec){
            const response=await Flight.decrement('totalSeats',{ by : seats, where:{
                id
            }})
            return response;
        }else{
            console.log('incrementing')
            const response=await Flight.increment('totalSeats',{ by : seats, where:{
                id
            }})
            return response;
        }
    }
}

module.exports=FlightRepository