const CrudRepostory =require('./crud-repository')
const {Flight,Airport,Airplane} =require('../models')
const {Sequelize} =require('sequelize')
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
}

module.exports=FlightRepository