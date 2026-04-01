const cardList = [
  {
    title: "Paris",
    image: "images/Paris.jpg",
    link: "Paris_Card",
    description: "Description about Paris"
  },
  {
    title: "Dubai",
    image: "images/Dubai.jpg",
    link: "Dubai_Card",
    description: "Description about Dubai"
  },
  {
    title: "New Zealand",
    image: "images/Newzealand.jpg",
    link: "New Zealand_Card",
    description: "Description about New Zealand"
  }
];
const clickMe = () => {
alert("Thanks for reading! Hope you discover your perfect holiday spot! 🌊✨")
}

const getProjects = () => {
$.get('/api/projects',(response) => {
if(response.statusCode==200){
addCards(response.data);
}
})
}

const submitForm = () => {
  let formData = {};
  formData.firstname = $('#first_name').val();
  formData.lastname = $('#last_name').val();
  formData.email = $('#email').val();
  formData.destination = $('#destination').val();
  formData.startDate = $('#start_date').val();
  formData.endDate = $('#end_date').val();
  formData.numberOfTravelers = $('#num_travelers').val();
  formData.budget = $('#budget').val();
  
  console.log("Travel Form Submitted: ", formData);
  alert("Thanks! Your travel preferences have been submitted. ✈️🌴");
}
const addCards = (items) => {
items.forEach(item => {
let itemToAppend = '<div class="col s4 center-align">'+
'<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
'</div><div class="card-content">'+
'<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
'<div class="card-reveal">'+
'<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
'<p class="card-text">'+item.description+'</p>'+
'</div></div></div>';
$("#card-section").append(itemToAppend)
});
}
$(document).ready(function() {
    $('.materialboxed').materialbox();

    // Click Me button
    $('#clickMeButton').click(() => {
        clickMe();
    });
   
    $('#formSubmit').on('click', function(e) {
        submitForm();
    });
    getProjects();
    $('.modal').modal();
});