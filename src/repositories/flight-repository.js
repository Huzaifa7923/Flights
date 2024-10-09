const CrudRepostory =require('./crud-repository')
const {Flight,Airport,Airplane, sequelize} =require('../models')
const Sequelize =require('sequelize')

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


    // async updateRemainingSeats(id,seats,dec){

    //     await db.sequelize.query(`Select * from Flights where Flights.id=${id} FOR UPDATE ;`);

    //     const flight=await Flight.findByPk(id);

    //     if(dec){
    //         await flight.decrement('totalSeats',{by:seats})
    //     }else{
    //         await flight.increment('totalSeats',{by:seats})
    //     }

    //     return flight;
    // }
    async updateRemainingSeats(id,seats,dec=1){

        // console.log('seats to dec'+seats);
        
        // pessimistic concurrency control -> using lock
        // console.log(id);
        return sequelize.transaction(async (t)=>{
            const flight=await Flight.findOne({
                where:{id},
                lock: Sequelize.Transaction.LOCK.UPDATE,
                transaction:t
            });

            if(!flight){
                throw new AppError('Not found using id',StatusCodes.BAD_REQUEST);
            }
            if(dec){
                await flight.decrement('totalSeats',{ 
                    by : seats,
                    transaction:t
                })
            }else{
                console.log('incrementing')
                await flight.increment('totalSeats',{
                    by : seats, 
                    transaction:t
                })
                
            }
            await flight.reload({ transaction: t });
            return flight;
        })
    }
}

module.exports=FlightRepository