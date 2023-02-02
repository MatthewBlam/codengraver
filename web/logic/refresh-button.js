// This file contains methods that apply to the refresh button

// Retrieve the correct color from the current theme
var main_color = getComputedStyle(document.getElementById("main_color_dummy")).color;
var secondary_color = getComputedStyle(document.getElementById("secondary_color_dummy")).color;

// Set color of refresh button with the corresponding theme
var refresh = document.getElementById("refresh_button");
function set_refresh_button_color() {
  refresh.style.backgroundColor = "transparent";
  refresh.style.color = secondary_color;
}
set_refresh_button_color(); // Call it once on start

// Adds the hover effect on the refresh button for UX
// (CSS :hover selector did not work so resorting to JS)
refresh.addEventListener("mouseover", opacity_handler);
refresh.addEventListener("mouseout", opacity_handler);
function opacity_handler(e) {
  if (e.type == "mouseover") {
    refresh.style.color = main_color;
  }
  if (e.type == "mouseout") {
    refresh.style.color = secondary_color;
  }
}
