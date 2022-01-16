// Get current date for the header using moment.js
const displayDate = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do HH:mm"));

// Get current time
function currentTime() {
  const current = moment().hours();
  const time = $(".time-block");

  time.each(function () {
    // parse string and return integer
    const hour = parseInt($(this).attr("id"));



    // if hour === current time display present colours.
    if (hour === current) {
      $(this).children(".col-10").attr("class", "present col-10 schedule");

      // Else if hour > current time display present colours.
    } else if (current > hour) {
      $(this).children(".col-10").attr("class", "past col-10 schedule");

      /// if hour < current time, display future colours.
    } else {
      $(this).children(".col-10").attr("class", "future col-10 schedule");
    }
  });
}

// return current time
currentTime();

// Target save button
const button = $(".saveBtn");

/

button.on("click", function () {
  const time = $(this).parent().attr("id");
  const schedule = $(this).siblings(".schedule").val();

  // set user input to local storage
  localStorage.setItem(time, schedule);
});