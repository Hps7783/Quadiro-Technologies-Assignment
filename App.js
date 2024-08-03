const adminLogin = require('./routes/adminLogin');
const adminDashboard = require('./routes/adminDashboard');
const userLogin = require('./routes/userLogin');
const userDashboard = require('./routes/userDashboard');
const express = require('express');
const app = express();
const path = require('path');
const carController = require('./controllers/carController');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use('/login', adminLogin);
app.use('/login', userLogin);

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/carList', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'carList.html'));
});

app.get('/createCar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'createCar.html'));
});

app.get('/updateCar/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'updateCar.html'));
});

app.get('/deleteCar/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'deleteCar.html'));
});

app.post('/login', carController.login);
app.post('/cars', carController.createCar);
app.get('/cars', carController.getCars);
app.get('/cars/:id', carController.getCar);
app.put('/cars/:id', carController.updateCar);
app.delete('/cars/:id', carController.deleteCar);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});