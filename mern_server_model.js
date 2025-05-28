// models/EmployeeModel.js

const mongoose = require('mongoose');

// Define schema
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create model
const EmployeeModel = mongoose.model('employees', EmployeeSchema);

// Export model
module.exports = EmployeeModel;
