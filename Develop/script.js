// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, value);

      $(".notification").addClass("show");

      setTimeout(function () {
          $(".notification").removeClass("show");
      }, 1000);
  });
   $(".time-block").each(function() {
    console.log($(this))
    var time = parseInt($(this).attr("id").split("-")[1])
    var currentTime = new Date().getHours()
    console.log(time,currentTime)
    if(time < currentTime){
      $(this).addClass("past")
    }
    else if(time === currentTime){
      $(this).addClass("present")
    }
    else{
      $(this).addClass("future")
    }
   })
  
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $("#currentDay").text(new Date ().toLocaleString())
});
