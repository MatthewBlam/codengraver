// This file contains the main functionality of the application

var code_input = document.getElementById("code_input");
var prism_output = document.getElementById("prism_output");

// Create an element using HTML in string form
function create_element_from_string(string) {
  var div = document.createElement("div");
  div.innerHTML = string.trim();
  return div.firstChild;
}

// Format the output code with Prism
function prettyify() {
  var code = code_input.value.trim();
  prism_output.innerHTML = "";
  prism_output.innerHTML = code;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  toggle_line_numbers();
}
document.addEventListener("DOMContentLoaded", function (e) {
  prettyify();
});

window.onclick = function (e) {
  close_drop_on_click(e);
  close_dropdown_menus(e);
};

code_input.addEventListener("input", prettyify);

document.getElementById("delete_button").addEventListener("click", function () {
  code_input.value = "";
});

// Reformat code, refresh defined in refresh-button.js
refresh.addEventListener("click", function (e) {
  prettyify();
});
