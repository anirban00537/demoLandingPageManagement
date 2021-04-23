const CustomerContactModel = require("../models/customerContactModel.js");

exports.getCustomerContactContent = getCustomerContactContent = async (
  req,
  res
) => {
  try {
    const CustomerContact = await CustomerContactModel.find();

    res.status(200).json(CustomerContact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createCustomerContactContent = createCustomerContactContent = async (
  req,
  res
) => {
  const CustomerContact = req.body;
  const newCustomerContactContent = new CustomerContactModel(CustomerContact);
  try {
    await newCustomerContactContent.save();
    console.log("dome");
    res.status(201).json(newCustomerContactContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};
