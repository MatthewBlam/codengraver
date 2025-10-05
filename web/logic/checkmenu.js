/* DEPRECATED FEATURE

// This file contains the methods that apply to the line edit check menu

var line_edit_menu = document.getElementById("line_edit_menu");
var check_items = Array.from(document.getElementsByClassName("check_item"));
var line_number;

// Called in logic.js, this function is the handler for when a line is clicked
function line_handler(e) {
  var line = e.target;
  while (!line.classList.contains("custom_line")) {
    line = line.parentElement;
  }
  line_number = line.getAttribute("id").split("_")[1];
  var bounds = line.getBoundingClientRect();
  var x = e.clientX;
  var y = bounds.top + parseInt(getComputedStyle(line).lineHeight);
  line_edit_menu.style.left = `${x}px`;
  line_edit_menu.style.top = `${y}px`;
  line_edit_menu.style.opacity = "1";
  line_edit_menu.style.pointerEvents = "auto";
}

check_items.forEach(function (item) {
  item.addEventListener("click", check_item_handler);
});

function check_item_handler(e) {
  var target = e.target;
  if (target.tagName == "SPAN") {
    target = target.parentElement;
  }
  toggle_state(target);
  var checked = target.children[0].getAttribute("data-checked") === "true";
  var attribute = target.children[1].textContent.toLowerCase();
  var line_to_edit = document.getElementById(`line_${line_number}`);
  line_to_edit.setAttribute(`data-${attribute}`, checked);
  update_line_style(line_to_edit, line_number, attribute, checked);
}

function update_line_style(line, number, attribute, checked) {
  if (attribute == "highlight") {
    var lines = prism_container.getAttribute("data-line");
    if (checked) {
      if (!lines.includes(`${number},`)) {
        lines = lines + `${number},`;
        prism_container.setAttribute("data-line", lines);
        window.dispatchEvent(new Event("resize", { bubbles: true }));
      }
    } else {
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
  if (attribute == "bold") {
    if (checked) {
      line.style.fontWeight = "bold";
    } else {
      line.style.fontWeight = "normal";
    }
  }
  if (attribute == "italic") {
    if (checked) {
      line.style.fontStyle = "italic";
    } else {
      line.style.fontStyle = "normal";
    }
  }
  if (attribute == "underline") {
    if (checked) {
      line.style.textDecoration = "underline";
    } else {
      line.style.textDecoration = "none";
    }
  }
  if (attribute == "coloring") {
    var children = Array.from(line.children);
    if (checked) {
      children.forEach(function (child) {
        child.classList.add("token");
      });
    } else {
      children.forEach(function (child) {
        child.classList.remove("token");
      });
    }
  }
}

function check_item_checked(checkbox) {
  return checkbox.getAttribute("data-checked") === "true";
}
function toggle_state(target) {
  var checkbox = target.children[0];
  var checkmark = checkbox.children[0];
  var checked = check_item_checked(checkbox);
  if (checked) {
    checkbox.setAttribute("data-checked", "false");
    checkbox.style.backgroundColor = "var(--secondary)";
    checkmark.style.opacity = "0";
  } else {
    checkbox.setAttribute("data-checked", "true");
    checkbox.style.backgroundColor = "var(--primary)";
    checkmark.style.opacity = "1";
  }
}
*/
