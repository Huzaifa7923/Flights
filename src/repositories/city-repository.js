const CrudRepostory = require("./crud-repository");
const {City}=require('../models')

class cityRepository extends CrudRepostory{
    constructor(){
        super(City)
    }
}

module.exports=cityRepository;

