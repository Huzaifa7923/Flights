const { AirplaneController } = require('../../controllers');

const router=require('express').Router();

router.post('/',AirplaneController.createAirplane);
router.get('/',AirplaneController.getAllAirplane);
router.get('/:id',AirplaneController.getAirplane);
router.put('/:id',AirplaneController.updateAirplane);


module.exports = router;

