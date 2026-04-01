const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});
const Project = mongoose.model('Project', ProjectSchema);

const projects = [
  {
    title: "Paris",
    image: "images/Paris.jpg",
    link: "#",
    description: "Description about Paris"
  },
  {
    title: "Dubai",
    image: "images/Dubai.jpg",
    link: "#",
    description: "Description about Dubai"
  },
  {
    title: "New Zealand",
    image: "images/Newzealand.jpg",
    link: "#",
    description: "Description about New Zealand"
  }
];

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

const bookings = [
{
    firstName: "David",
    lastName: "Smith",
    email: "davids@gmail.com",
    destination: "Paris",
    startDate: "2026-05-01",
    endDate: "2026-05-10",
    numberOfTravelers: 2,
    budget: 3000
},
{
    firstName: "Sarah",
    lastName: "White",
    email: "sarahw@gmail.com",
    destination: "Dubai",
    startDate: "2026-06-15",
    endDate: "2026-06-20",
    numberOfTravelers: 3,
    budget: 6000   
}
];

Project.insertMany(projects)
  .then(() => {
    console.log("Sample projects saved!");
    mongoose.connection.close();
  });

Booking.insertMany(bookings)
  .then(() => {
    console.log("Sample bookings saved!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));