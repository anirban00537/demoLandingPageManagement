const mongoose = require("mongoose");

const CustomerContactSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  mobile: String,
  date: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
});

const CustomerContactModel = mongoose.model(
  "CustomerContactSchema",
  CustomerContactSchema
);

module.exports = CustomerContactModel;
