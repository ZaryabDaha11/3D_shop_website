var router = require('express').Router();
const {PlaceOrder, GetOrders} = require('../contollers/index')

/* GET home page. */
router.get('/orders', GetOrders )
router.post('/placeOrder', PlaceOrder);

module.exports = router;
