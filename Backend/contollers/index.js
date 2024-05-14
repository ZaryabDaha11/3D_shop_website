const OrderServices = require("../services/index");

const joi = require("joi");

const PlaceOrderSchema = joi.object().keys({
  customer_name: joi.string().required(),
  customer_phone: joi.string().required(),
  customer_address: joi.string().required(),
  customer_product: joi.object().required(),
});

module.exports = {
  PlaceOrder: async (req, res) => {
    try {
      const validate = await PlaceOrderSchema.validateAsync(req.body);
      const placeOrder = await OrderServices.PlaceOrder(validate)
      
      if (placeOrder.error) {
        return res.send({
          error: placeOrder.error,
        });
      }
    
    return res.send({
      response: placeOrder.response
    });
    } catch (error) {
      return res.send({
        error: error.message
      })
    }
    
  },
  GetOrders: async (req, res) => {
    try {
      const products = await OrderServices.GetOrders();

      if (products.error) {
        return res.send({
          error: products.error,
        });
      }

      return res.send({
        response: products.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
