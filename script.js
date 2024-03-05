$(document).ready(function() {
  $("#switch").click(function() {
    $("#bulb").toggleClass("on");
    $(".switch").toggleClass("on");

    var switchText = $(".switch-text");
    switchText.text(switchText.text() === "Off" ? "On" : "Off");

    var bulbText =$(".bulb-text");
    bulbText.text(bulbText.text() === "Off" ? "On" : "Off" );

    if ($("#bulb").hasClass("on")) {
      $("#bulb").css("background-color", "yellow");
    } else {
      $("#bulb").css("background-color", "transparent");
    }
  });
});
