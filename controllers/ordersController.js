const Orders = require("../Model/ordersModel");

module.exports.placeOrder = async function (req, res) {
  const { token, subtotal, currentUser, cartItems } = req.body;
  console.log(cartItems);
  try {
    const newOrder = new Orders({
      name: currentUser.name,
      email: currentUser.email,
      userId: currentUser._id,
      orderItems: cartItems,
      shippingAddress: {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        pincode: token.card.address_zip,
      },
      orderAmount: subtotal,
      isDeliverd: false,
      transactionId: token.card.id,
    });
    newOrder.save();
    res.send("payment done");
  } catch (error) {
    return res.status(400).json({ message: "something wrong" });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find(req.body);

    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
};
