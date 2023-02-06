// This file contains the main functionality of the application

var code_input = document.getElementById("code_input");
var prism_output = document.getElementById("prism_output");

// Create an element using HTML in string form
function create_element_from_string(string) {
  var div = document.createElement("div");
  div.innerHTML = string.trim();
  return div.firstChild;
}

function escape(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Format the output code with Prism
function prettyify() {
  var code = escape(code_input.value.trim());
  prism_output.innerHTML = "";
  prism_output.innerHTML = code;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  toggle_line_numbers();
  set_line_listeners();
  set_local_storage();
}
document.addEventListener("DOMContentLoaded", function (e) {
  get_local_storage();
  prettyify();
});

function set_local_storage() {
  if (style_input.value == "") {
    setTimeout(set_local_storage, 50);
    return;
  }
  var settings = JSON.stringify({
    language: language_input.value,
    style: style_input.value,
    fontSize: slider.value,
    lineNumbers: checkbox_checked(),
  });
  localStorage.setItem("settings", settings);
}

function get_local_storage() {
  var settings = JSON.parse(localStorage.getItem("settings"));
  if (!checkbox_checked()) {
    if (settings.lineNumbers) {
      checkbox_container.click();
    }
  }
  slider.value = settings.fontSize;
  slider_handler({ init: "init" });
  Array.from(language_dropdown_menu.children).forEach(function (option) {
    if (option.textContent == settings.language) {
      option.click();
    }
  });
  Array.from(style_dropdown_menu.children).forEach(function (option) {
    if (option.textContent == settings.style) {
      option.click();
    }
  });
}

window.onclick = function (e) {
  close_drop_on_click(e);
  close_dropdown_menus(e);
};

code_input.addEventListener("input", prettyify);

document.getElementById("delete_button").addEventListener("click", function () {
  code_input.value = "";
});
