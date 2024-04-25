const { models } = require("./index");

module.exports = {
  PlaceOrder: async (body) => {
    try {
      const placedOrder = await models.orders.create({ ...body });

      return {
        response: placedOrder,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  GetOrders: async () => {
    try {
      const products = await models.orders.findAll();

      return {
        response: products,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
