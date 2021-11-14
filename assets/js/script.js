//VARIABLE DECLARATIONS

//Current date displayed in the header
var timeHeading = $("#currentDay");
var displayTime = moment().format("dddd, MMMM Do");
$(timeHeading).append(displayTime);

var currentTime = moment();

var hoursArray = [
  {
    time: moment("9", "H"),
    div: $("#nineColor"),
    textArea: $("#nineText"),
    locStorageKey: "9am",
    saveButton: $("#nineSave"),
  },

  {
    time: moment("10", "H"),
    div: $("#tenColor"),
    textArea: $("#tenText"),
    locStorageKey: "10am",
    saveButton: $("#tenSave"),
  },

  {
    time: moment("11", "H"),
    div: $("#elevenColor"),
    textArea: $("#elevenText"),
    locStorageKey: "11am",
    saveButton: $("#elevenSave"),
  },

  {
    time: moment("12", "H"),
    div: $("#twelveColor"),
    textArea: $("#twelveText"),
    locStorageKey: "12pm",
    saveButton: $("#twelveSave"),
  },

  {
    time: moment("13", "H"),
    div: $("#oneColor"),
    textArea: $("#oneText"),
    locStorageKey: "1pm",
    saveButton: $("#oneSave"),
  },

  {
    time: moment("14", "H"),
    div: $("#twoColor"),
    textArea: $("#twoText"),
    locStorageKey: "2pm",
    saveButton: $("#twoSave"),
  },

  {
    time: moment("15", "H"),
    div: $("#threeColor"),
    textArea: $("#threeText"),
    locStorageKey: "3pm",
    saveButton: $("#threeSave"),
  },

  {
    time: moment("16", "H"),
    div: $("#fourColor"),
    textArea: $("#fourText"),
    locStorageKey: "4pm",
    saveButton: $("#fourSave"),
  },

  {
    time: moment("17", "H"),
    div: $("#fiveColor"),
    textArea: $("#fiveText"),
    locStorageKey: "5pm",
    saveButton: $("#fiveSave"),
  },
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

    //Saves user submitted details in the description classes to their respective key in localStorage when the user clicks on the save button for a time block
    val.saveButton.click(function () {
      localStorage.setItem(val.locStorageKey, val.textArea.val());
    });

    //Saved details are retrieved from localStorage
    val.textArea.append(localStorage.getItem(val.locStorageKey));
  });
}

hoursCalc();
