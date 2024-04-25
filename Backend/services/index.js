const OrderModel = require("../models/OrderModel");

const { v4: uuid } = require("uuid");

module.exports = {
  PlaceOrder: async (body) => {
    try {
      body.customer_id = uuid();

      const order = await OrderModel.PlaceOrder(body);

      if (order.error) {
        return {
          error: order.error,
        };
      }
      return {
        response: order.response,
      };
    } catch (error) {
      return { response: error.message };
    }
  },

  GetOrders: async () => {
    try {
      const products = await OrderModel.GetOrders();

      if (products.error) {
        return {
          error: products.error,
        };
      }

      return {
        response: products.response,
      };
    } catch (error) {
      return { response: error.message };
    }
  },
};
