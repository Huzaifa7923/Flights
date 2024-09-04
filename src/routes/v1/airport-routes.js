const router=require('express').Router();
const {AirportController}=require('../../controllers');
const { AirportMiddlwares } = require('../../middlewares');

router.get('/',AirportController.getAirports);
router.post('/',AirportMiddlwares.validateAirportCreateRequest,AirportController.createAirport);
router.delete('/:id',AirportController.deleteAirport);
router.get('/:id',AirportController.getAirport);

module.exports=router