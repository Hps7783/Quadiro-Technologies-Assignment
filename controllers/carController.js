const Car = require('../models/Car');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  // implement login logic here
  res.json({ token: ' dummy-token' });
};

exports.createCar = async (req, res) => {
  const { carName, manufacturingYear, price } = req.body;
  const car = new Car({ carName, manufacturingYear, price });
  await car.save();
  res.json({ message: 'Car created successfully' });
};

exports.getCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
  };
  
  exports.getCar = async (req, res) => {
    const id = req.params.id;
    const car = await Car.findById(id);
    if (!car) {
      res.status(404).json({ message: 'Car not found' });
    } else {
      res.json(car);
    }
  };
  
  exports.updateCar = async (req, res) => {
    const id = req.params.id;
    const { carName, manufacturingYear, price } = req.body;
    const car = await Car.findByIdAndUpdate(id, { carName, manufacturingYear, price }, { new: true });
    res.json(car);
  };
  
  exports.deleteCar = async (req, res) => {
    const id = req.params.id;
    await Car.findByIdAndRemove(id);
    res.json({ message: 'Car deleted successfully' });
  };