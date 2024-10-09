const router=require('express').Router();
const {FlightController}=require('../../controllers')
const {FlightMiddlwares}=require('../../middlewares')


router.get('/:id/seats',FlightMiddlwares.validateUpdateSeats, FlightController.updateRemainingSeats)
router.post('/',FlightMiddlwares.validateFlightCreateRequest,FlightController.create)
router.get('/',FlightController.getFlights)
router.get('/:id',FlightController.getFlight)


module.exports=router