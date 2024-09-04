const CrudRepostory =require('./crud-repository')
const {Flight} =require('../models')

class FlightRepository extends CrudRepostory{
    constructor(){
        super(Flight)
    }
}

module.exports=FlightRepository