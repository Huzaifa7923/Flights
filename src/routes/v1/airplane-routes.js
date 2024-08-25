const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router=require('express').Router();

router.post('/',AirplaneMiddlewares.validateCreateRequest,AirplaneController.createAirplane);
router.get('/',AirplaneController.getAllAirplane);
router.get('/:id',AirplaneController.getAirplane);
router.put('/:id',AirplaneController.updateAirplane);


module.exports = router;

