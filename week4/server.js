var express = require("express")
var app = express()
var port = process.env.port || 3000;
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});
const Project = mongoose.model('Project', ProjectSchema);

const BookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    destination: String,
    startDate: String,
    endDate: String,
    numberOfTravelers: Number,
    budget: Number
});
const Booking = mongoose.model('Booking', BookingSchema);

app.get('/api/projects', async (req, res) => {
const projects = await Project.find({});
res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.get('/api/bookings', async (req, res) => {
  const bookings = await Booking.find({});
  res.json({ statusCode: 200, data: bookings });
});

app.post('/api/bookings', async (req, res) => {
    const newBooking = await Booking.create(req.body);
    res.json({
      statusCode: 200,
      data: newBooking,
      message: "Booking saved successfully"
    });
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})