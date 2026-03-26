const cardList = [
  {
    title: "Paris",
    image: "images/Paris.jpg",
    link: "Paris_Card",
    desciption: "Desciption about Paris"
  },
  {
    title: "Dubai",
    image: "images/Dubai.jpg",
    link: "Dubai_Card",
    desciption: "Desciption about Dubai"
  },
  {
    title: "New Zealand",
    image: "images/Newzealand.jpg",
    link: "New Zealand_Card",
    desciption: "Desciption about New Zealand"
  }
];
const clickMe = () => {
alert("Thanks for reading! Hope you discover your perfect holiday spot! 🌊✨")
}
const submitForm = () => {
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.email = $('#email').val();
  formData.destination = $('#destination').val();
  formData.start_date = $('#start_date').val();
  formData.end_date = $('#end_date').val();
  formData.num_travelers = $('#num_travelers').val();
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
'<p class="card-text">'+item.desciption+'</p>'+
'</div></div></div>';
$("#card-section").append(itemToAppend)
});
}
$(document).ready(function() {
    $('.materialboxed').materialbox();

    $('.modal').modal();

    // Click Me button
    $('#clickMeButton').click(() => {
        clickMe();
    });

   
    $('#formSubmit').on('click', function(e) {
        submitForm();
    });

    addCards(cardList);
});