
function setDefaultDate() {
  var currentDate = new Date();
  var date = document.getElementById("date");
  date.value = currentDate.toISOString().substr(0, 10);
}

function calculateDifference() {
  var birthdayDate = new Date(document.getElementById('date').value);
  var difference = Math.abs(birthdayDate - new Date());
  var daysleft = document.getElementById("daysleft");

  days = Math.floor(difference / (1000 * 3600 * 24));
  daysleft.innerHTML = days + " days left";
}

window.onload = function() {
  setDefaultDate();
};
