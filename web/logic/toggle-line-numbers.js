var checkbox_container = document.getElementById("line_numbers_container");
var checkbox = document.getElementById("line_numbers_checkbox");
var checkmark = document.getElementById("line_numbers_checkmark");
var refreshline = new Event("refreshline");

function checkbox_checked() {
  return checkbox.getAttribute("data-checked") === "true";
}

checkbox_container.addEventListener("click", checkbox_handler);
function checkbox_handler() {
  var checked = checkbox_checked();
  if (checked) {
    checkbox.setAttribute("data-checked", "false");
    checkbox.style.backgroundColor = "var(--secondary)";
    checkmark.style.opacity = "0";
  } else {
    checkbox.setAttribute("data-checked", "true");
    checkbox.style.backgroundColor = "var(--primary)";
    checkmark.style.opacity = "1";
  }
  prettyify();

  document.dispatchEvent(refreshline);
}

function toggle_line_numbers() {
  var lines = Array.from(document.getElementsByClassName("hljs-ln-numbers"));
  if (lines.length == 0) {
    setTimeout(toggle_line_numbers, 50);
  }
  if (checkbox_checked()) {
    lines.forEach(function (line) {
      line.classList.add("hljs-comment");
      line.style.display = "table-cell";
    });
  }
}
