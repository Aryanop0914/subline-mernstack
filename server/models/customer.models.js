const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  city: { type: String },
  country: { type: String },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
