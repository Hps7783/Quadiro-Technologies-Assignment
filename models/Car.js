const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: String,
  manufacturingYear: Number,
  price: Number
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;