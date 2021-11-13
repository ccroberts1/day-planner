//Variable Declaration

//Current date displayed in the header
var timeHeading = $("#currentDay");
var displayTime = moment().format("dddd, MMMM Do");
$(timeHeading).append(displayTime);

var currentTime = moment();

var hoursArray = [
  moment("9", "H"),
  moment("10", "H"),
  moment("11", "H"),
  moment("12", "H"),
  moment("13", "H"),
  moment("14", "H"),
  moment("15", "H"),
  moment("16", "H"),
  moment("17", "H"),
];

$.each(hoursArray, function (index, value) {
  console.log(value.format("hA"));
});

var hourCal = moment("9", "H");

console.log(currentTime);
console.log(hourCal);

console.log(currentTime.diff(hourCal, "hours"));

//Find a way to compare the times in the .hour div to the current time. Maybe each div can have a moment() saved to a variable which is then compared to current time?

//use variable.set() to test whether it works once js is configured

//Function Declaration

//For the text area that is the current time, apply .present styling to .description
// if (currentTime.diff(hourCal, "hours") == 0) {
//   $(".description").addClass("present");
// }

// //For each text area that is earlier than the current time, apply .past styling to .description
// else if (currentTime.diff(hourCal, "hours") < 0) {
//   $(".description").addClass("past");
// }

// //For each text area that is after the current time, apply .future styling to description.
// else {
//   $(".description").addClass("future");
// }

//Add click event listener to .saveBtn
//Saves input in textarea to localStorage

$("#nineSave").click(function () {
  var nineInput = $("#nineText").val();
  localStorage.set("9am", nineInput);
});
