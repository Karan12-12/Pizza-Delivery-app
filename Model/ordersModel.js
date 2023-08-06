const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    isDeliverd: {
      type: Boolean,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;
