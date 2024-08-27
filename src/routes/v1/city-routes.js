const { CityController } = require('../../controllers')

const router=require('express').Router();

router.post('/',CityController.createCity);
router.get('/',CityController.getCities);
router.get('/:id',CityController.getCity);
router.put('/:id',CityController.updateCity);

module.exports=router;