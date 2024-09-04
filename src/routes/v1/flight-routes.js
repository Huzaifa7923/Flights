const router=require('express').Router();
const {FlightController}=require('../../controllers')
const {FlightMiddlwares}=require('../../middlewares')

router.post('/',FlightMiddlwares.validateFlightCreateRequest,FlightController.create)

module.exports=router