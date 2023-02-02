// This file contains the methods that apply to the code editor

var prism_container = document.getElementById("prism_output_container");
var editor = document.getElementById("editor");
var editor_items = Array.from(document.getElementsByClassName("editor_icon"));
var active_tool;

// Called in logic.js, this function is the handler for when a line is clicked
function line_handler(e) {
  if (e.type == "mouseover" && !drag) {
    return;
  }
  var line = e.target;
  while (!line.classList.contains("custom_line")) {
    line = line.parentElement;
  }
  console.log(line);
  var line_number = line.getAttribute("id").split("_")[1];
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

// Using the active tool, perform it's function on the line
function update_line_style(line, number, active_tool) {
  if (active_tool == "highlight") {
    var lines = prism_container.getAttribute("data-line");
    var highlighted = line.getAttribute("data-highlight") === "true";
    if (!highlighted) {
      line.setAttribute("data-highlight", "true");
      if (!lines.includes(`${number},`)) {
        lines = lines + `${number},`;
        prism_container.setAttribute("data-line", lines);
        window.dispatchEvent(new Event("resize", { bubbles: true }));
      }
    } else {
      line.setAttribute("data-highlight", "false");
      if (lines.includes(`${number},`)) {
        lines = lines.replace(`${number},`, "");
        prism_container.setAttribute("data-line", lines);
        var highlight_elements = Array.from(document.getElementsByClassName("line-highlight"));
        highlight_elements.forEach(function (element) {
          if (element.getAttribute("data-range") == String(number)) {
            element.remove();
          }
        });
      }
    }
  }
  if (active_tool == "bold") {
    var bolded = line.getAttribute("data-bold") === "true";
    if (!bolded) {
      line.setAttribute("data-bold", "true");
      line.style.fontWeight = "bold";
    } else {
      line.setAttribute("data-bold", "false");
      line.style.fontWeight = "normal";
    }
  }
  if (active_tool == "italic") {
    var italic = line.getAttribute("data-italic") === "true";
    if (!italic) {
      line.setAttribute("data-italic", "true");
      line.style.fontStyle = "italic";
    } else {
      line.setAttribute("data-italic", "false");
      line.style.fontStyle = "normal";
    }
  }
  if (active_tool == "underline") {
    var underlined = line.getAttribute("data-underline") === "true";
    if (!underlined) {
      line.setAttribute("data-underline", "true");
      line.style.textDecoration = "underline";
    } else {
      line.setAttribute("data-underline", "false");
      line.style.textDecoration = "none";
    }
  }
  if (active_tool == "coloring") {
    var colored = line.getAttribute("data-syntax") === "true";
    var children = Array.from(line.children);
    if (!colored) {
      line.setAttribute("data-syntax", "true");
      children.forEach(function (child) {
        child.classList.add("token");
      });
    } else {
      line.setAttribute("data-syntax", "false");
      children.forEach(function (child) {
        child.classList.remove("token");
      });
    }
  }
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
function prism_drag(e) {
  if (e.type == "mousedown") {
    drag = true;
  } else {
    drag = false;
  }
}
