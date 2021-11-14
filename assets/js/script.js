//VARIABLE DECLARATIONS

//Current date displayed in the header
var timeHeading = $("#currentDay");
var displayTime = moment().format("dddd, MMMM Do");
$(timeHeading).append(displayTime);

var currentTime = moment();

var nineColor = $("#nineColor");
var tenColor = $("#tenColor");
var elevenColor = $("#elevenColor");
var twelveColor = $("#twelveColor");
var oneColor = $("#oneColor");
var twoColor = $("#twoColor");
var threeColor = $("#threeColor");
var fourColor = $("#fourColor");
var fiveColor = $("#fiveColor");

var hoursArray = [
  { time: moment("9", "H"), div: nineColor },

  { time: moment("10", "H"), div: tenColor },

  { time: moment("11", "H"), div: elevenColor },

  { time: moment("12", "H"), div: twelveColor },

  { time: moment("13", "H"), div: oneColor },

  { time: moment("14", "H"), div: twoColor },

  { time: moment("15", "H"), div: threeColor },

  { time: moment("16", "H"), div: fourColor },

  { time: moment("17", "H"), div: fiveColor },
];

//FUNCTION DECLARATIONS

function hoursCalc() {
  $.each(hoursArray, function (index, val) {
    //For the text area that is the current time, apply .present styling to .description

    if (moment().isAfter(val.time) && moment().isBefore(val.time.add(1, "h"))) {
      $(val.div).addClass("present");
    }

    //For each text area that is earlier than the current time, apply .past styling to .description
    else if (moment().isBefore(val.time)) {
      $(val.div).addClass("future");
    }

    // //For each text area that is after the current time, apply .future styling to description.
    else {
      $(val.div).addClass("past");
    }
  });
}

//When page reloads, the saved details are retrieved from localStorage
function setDescriptions() {
  var nineDesc = localStorage.getItem("9am");
  $("#nineText").append(nineDesc);

  var tenDesc = localStorage.getItem("10am");
  $("#tenText").append(tenDesc);

  var elevenDesc = localStorage.getItem("11am");
  $("#elevenText").append(elevenDesc);

  var twelveDesc = localStorage.getItem("12am");
  $("#twelveText").append(twelveDesc);

  var oneDesc = localStorage.getItem("1pm");
  $("#oneText").append(oneDesc);

  var twoDesc = localStorage.getItem("2pm");
  $("#twoText").append(twoDesc);

  var threeDesc = localStorage.getItem("3pm");
  $("#threeText").append(threeDesc);

  var fourDesc = localStorage.getItem("4pm");
  $("#fourText").append(fourDesc);

  var fiveDesc = localStorage.getItem("5pm");
  $("#fiveText").append(fiveDesc);
}

//EVENT HANDLERS

//Saves user submitted details in the description classes to their respective key in localStorage

$("#nineSave").click(function () {
  var nineInput = $("#nineText").val();
  localStorage.setItem("9am", nineInput);
});

$("#tenSave").click(function () {
  var tenInput = $("#tenText").val();
  localStorage.setItem("10am", tenInput);
});

$("#elevenSave").click(function () {
  var elevenInput = $("#elevenText").val();
  localStorage.setItem("11am", elevenInput);
});

$("#twelveSave").click(function () {
  var twelveInput = $("#twelveText").val();
  localStorage.setItem("12pm", twelveInput);
});

$("#oneSave").click(function () {
  var oneInput = $("#oneText").val();
  localStorage.setItem("1pm", oneInput);
});

$("#twoSave").click(function () {
  var twoInput = $("#twoText").val();
  localStorage.setItem("2pm", twoInput);
});

$("#threeSave").click(function () {
  var threeInput = $("#threeText").val();
  localStorage.setItem("3pm", threeInput);
});

$("#fourSave").click(function () {
  var fourInput = $("#fourText").val();
  localStorage.setItem("4pm", fourInput);
});

$("#fiveSave").click(function () {
  var fiveInput = $("#fiveText").val();
  localStorage.setItem("5pm", fiveInput);
});

hoursCalc();

setDescriptions();
