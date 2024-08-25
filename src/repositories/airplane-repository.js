const CrudRepostory = require("./crud-repository");

const {Airplane} =require('../models')

class AirplaneRepository extends CrudRepostory{
    constructor(){
        super(Airplane)
    }
}

module.exports=AirplaneRepository;