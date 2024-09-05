const router=require('express').Router();
const {FlightController}=require('../../controllers')
const {FlightMiddlwares}=require('../../middlewares')

router.post('/',FlightMiddlwares.validateFlightCreateRequest,FlightController.create)
router.get('/',FlightController.getFlights)

module.exports=router