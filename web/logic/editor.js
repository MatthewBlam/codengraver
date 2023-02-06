// This file contains the methods that apply to the code editor

var prism_container = document.getElementById("prism_output_container");
var editor = document.getElementById("editor");
var editor_items = Array.from(document.getElementsByClassName("editor_icon"));
var active_tool;

// Called in logic.js, this function is the handler for when a line is clicked
function set_line_listeners() {
  var lines = Array.from(document.getElementsByClassName("hljs-ln-code"));
  if (lines.length == 0) {
    setTimeout(set_line_listeners, 50);
  } else {
    lines.forEach(function (line) {
      line.addEventListener("mousedown", line_handler);
      line.addEventListener("mouseover", line_handler);
    });
  }
}

function line_handler(e) {
  if (e.type == "mouseover" && !drag) {
    return;
  }
  var line = e.target;
  while (!line.classList.contains("hljs-ln-code")) {
    line = line.parentElement;
  }
  var line_number = line.getAttribute("data-line-number");
  update_line_style(line, line_number, active_tool);
}

editor_items.forEach(function (item) {
  item.addEventListener("click", editor_item_handler);
  item.addEventListener("mouseover", editor_item_handler);
  item.addEventListener("mouseout", editor_item_handler);
});

// Hover styles and setting active when clicked
function editor_item_handler(e) {
  var target = e.target;
  if (e.type == "mouseover") {
    if (!editor_item_active(target)) {
      target.style.backgroundColor = "var(--light-200)";
      target.style.color = "var(--text)";
    }
  }
  if (e.type == "mouseout") {
    if (!editor_item_active(target)) {
      target.style.backgroundColor = "transparent";
      target.style.color = "var(--icon)";
    }
  }
  if (e.type == "click") {
    toggle_editor_item_state(target);
    var tool = target.getAttribute("name");
    if (editor_item_active(target)) {
      active_tool = tool;
    }
  }
}

var line_attributes = {
  highlight: [],
  syntax: [],
  bold: [],
  italic: [],
  underline: [],
};
function update_line_style(line, number, active_tool) {
  if (active_tool == "highlight") {
    var highlighted = line.getAttribute("data-highlight") === "true";
    if (!highlighted) {
      line.setAttribute("data-highlight", "true");
      line.style.backgroundColor = highlight_color;
      line.parentElement.children[0].style.backgroundColor = highlight_color;
      if (!line_attributes.highlight.includes(number)) {
        line_attributes.highlight.push(number);
      }
    } else {
      line.setAttribute("data-highlight", "false");
      line.style.removeProperty("background-color");
      line.parentElement.children[0].style.removeProperty("background-color");
      if (line_attributes.highlight.includes(number)) {
        var index = line_attributes.highlight.indexOf(number);
        line_attributes.highlight.splice(index, 1);
      }
    }
  }
  if (active_tool == "coloring") {
    var colored = line.getAttribute("data-syntax") === "true";
    var children = Array.from(line.children);
    if (!colored) {
      line.setAttribute("data-syntax", "true");
      children.forEach(function (child) {
        child.setAttribute("class", child.getAttribute("class").replace("hljs-", ""));
      });
      if (!line_attributes.syntax.includes(number)) {
        line_attributes.syntax.push(number);
      }
    } else {
      line.setAttribute("data-syntax", "false");
      children.forEach(function (child) {
        child.setAttribute("class", "hljs-" + child.getAttribute("class"));
      });
      if (line_attributes.syntax.includes(number)) {
        var index = line_attributes.syntax.indexOf(number);
        line_attributes.syntax.splice(index, 1);
      }
    }
  }
  if (active_tool == "bold") {
    var bolded = line.getAttribute("data-bold") === "true";
    if (!bolded) {
      line.setAttribute("data-bold", "true");
      line.style.fontWeight = "bold";
      if (!line_attributes.bold.includes(number)) {
        line_attributes.bold.push(number);
      }
    } else {
      line.setAttribute("data-bold", "false");
      line.style.fontWeight = "normal";
      if (line_attributes.bold.includes(number)) {
        var index = line_attributes.bold.indexOf(number);
        line_attributes.bold.splice(index, 1);
      }
    }
  }
  if (active_tool == "italic") {
    var italic = line.getAttribute("data-italic") === "true";
    if (!italic) {
      line.setAttribute("data-italic", "true");
      line.style.fontStyle = "italic";
      if (!line_attributes.italic.includes(number)) {
        line_attributes.italic.push(number);
      }
    } else {
      line.setAttribute("data-italic", "false");
      line.style.fontStyle = "normal";
      if (line_attributes.italic.includes(number)) {
        var index = line_attributes.italic.indexOf(number);
        line_attributes.italic.splice(index, 1);
      }
    }
  }
  if (active_tool == "underline") {
    var underlined = line.getAttribute("data-underline") === "true";
    if (!underlined) {
      line.setAttribute("data-underline", "true");
      line.style.textDecoration = "underline";
      if (!line_attributes.underline.includes(number)) {
        line_attributes.underline.push(number);
      }
    } else {
      line.setAttribute("data-underline", "false");
      line.style.textDecoration = "none";
      if (line_attributes.underline.includes(number)) {
        var index = line_attributes.underline.indexOf(number);
        line_attributes.underline.splice(index, 1);
      }
    }
  }
}

document.addEventListener("refreshline", set_line_styles_on_refresh);
function set_line_styles_on_refresh() {
  if (code_input.value == "") {
    return;
  }
  var lines = Array.from(document.getElementsByClassName("hljs-ln-code"));
  if (lines.length == 0) {
    setTimeout(set_line_styles_on_refresh, 100);
    return;
  }
  lines.forEach(function (line) {
    line_number = line.getAttribute("data-line-number");
    line_attributes.highlight.forEach(function (number) {
      if (line_number == number) {
        line.setAttribute("data-highlight", "true");
        line.style.backgroundColor = highlight_color;
        line.parentElement.children[0].style.backgroundColor = highlight_color;
      }
    });
    line_attributes.syntax.forEach(function (number) {
      if (line.getAttribute("data-line-number") == number) {
        var children = Array.from(line.children);
        line.setAttribute("data-syntax", "true");
        children.forEach(function (child) {
          child.setAttribute("class", child.getAttribute("class").replace("hljs-", ""));
        });
      }
    });
    line_attributes.bold.forEach(function (number) {
      if (line.getAttribute("data-line-number") == number) {
        line.setAttribute("data-bold", "true");
        line.style.fontWeight = "bold";
      }
    });
    line_attributes.italic.forEach(function (number) {
      if (line.getAttribute("data-line-number") == number) {
        line.setAttribute("data-italic", "true");
        line.style.fontStyle = "italic";
      }
    });
    line_attributes.underline.forEach(function (number) {
      if (line.getAttribute("data-line-number") == number) {
        line.setAttribute("data-underline", "true");
        line.style.textDecoration = "underline";
      }
    });
  });
}

function editor_item_active(item) {
  return item.getAttribute("data-active") === "true";
}
function toggle_editor_item_state(target) {
  var active = editor_item_active(target);
  if (active) {
    target.style.backgroundColor = "transparent";
    target.style.color = "var(--icon)";
    target.setAttribute("data-active", "false");
    active_tool = "";
    Array.from(document.getElementsByClassName("custom_line")).forEach(function (line) {
      line.style.cursor = "text";
    });
    prism_output.style.cursor = "text";
    prism_output.style.userSelect = "auto";
  } else {
    target.style.backgroundColor = "var(--light-300)";
    target.style.color = "var(--title)";
    target.setAttribute("data-active", "true");
    editor_items.forEach(function (item) {
      if (item == target) {
        return;
      }
      item.style.backgroundColor = "transparent";
      item.style.color = "var(--icon)";
      item.setAttribute("data-active", "false");
    });
    Array.from(document.getElementsByClassName("custom_line")).forEach(function (line) {
      line.style.cursor = "pointer";
    });
    prism_output.style.cursor = "pointer";
    prism_output.style.userSelect = "none";
  }
}

var drag = false;
prism_container.addEventListener("mousedown", prism_drag);
prism_container.addEventListener("mouseup", prism_drag);
prism_container.addEventListener("mouseleave", prism_drag);
function prism_drag(e) {
  if (e.type == "mousedown") {
    drag = true;
  } else {
    drag = false;
  }
}

var background_color;
var highlight_color;

function set_highlight_color() {
  var base_color = String(getComputedStyle(document.getElementById("main_color_dummy")).backgroundColor);
  var color = base_color.replace("rgb(", "").replace(")", "").split(", ");
  color = { r: parseInt(color[0]), g: parseInt(color[1]), b: parseInt(color[2]) };
  var r = color.r + 25;
  var g = color.g + 25;
  var b = color.b + 25;
  if (r > 255) {
    r = r - 40;
  }
  if (g > 255) {
    g = g - 40;
  }
  if (b > 255) {
    b = b - 40;
  }
  background_color = base_color;
  highlight_color = `rgb(${r},${g},${b})`;
}
set_highlight_color();

function update_highlight_on_style_change() {
  var lines = Array.from(document.getElementsByClassName("hljs-ln-code"));
  lines.forEach(function (line) {
    line_number = line.parentElement.children[0];
    if (line.getAttribute("data-highlight") == "true") {
      line.style.backgroundColor = highlight_color;
      line_number.style.backgroundColor = highlight_color;
    } else {
      line.style.removeProperty("background-color");
      line_number.style.removeProperty("background-color");
    }
  });
}

var main_color;
var secondary_color;

var refresh = document.getElementById("refresh_button");
function set_refresh_button_color() {
  main_color = getComputedStyle(document.getElementById("main_color_dummy")).color;
  secondary_color = getComputedStyle(document.getElementById("secondary_color_dummy")).color;
  refresh.style.backgroundColor = "transparent";
  refresh.style.color = secondary_color;
}
set_refresh_button_color();

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

refresh.addEventListener("click", function (e) {
  line_attributes = {
    highlight: [],
    syntax: [],
    bold: [],
    italic: [],
    underline: [],
  };
  prettyify();
});
