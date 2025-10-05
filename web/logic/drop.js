function hide_in_flex(element) {
  element.style.display = "none";
}

function show_in_flex(element) {
  element.style.display = "";
}

var drop = document.getElementById("drop");
var browse = document.getElementById("file_browse_button");

["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
  drop.addEventListener(event, preventDefaults);
  document.body.addEventListener(event, preventDefaults);
});
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

var loader = document.getElementById("loader");
var drop_icon = document.getElementById("drop_icon");
var drop_success = document.getElementById("drop_success");
var drop_error = document.getElementById("drop_error");
var drop_text = document.getElementById("drop_area_text");
var in_default_state;

[drop_success, drop_error].forEach(function (element) {
  hide_in_flex(element);
});

["dragenter", "dragover"].forEach((event) => {
  drop.addEventListener(event, function () {
    if (in_default_state) {
      drop.classList.add("drop_highlight");
    }
  });
});
["dragleave", "drop"].forEach((event) => {
  drop.addEventListener(event, function () {
    drop.classList.remove("drop_highlight");
  });
});

var upload_button = document.getElementById("upload_button");
upload_button.addEventListener("click", function (e) {
  if (drop.getAttribute("data-open") == "false") {
    open_drop_area();
    drop.setAttribute("data-open", "true");
  }
});

function open_drop_area() {
  ["drop_success", "drop_error", "drop_highlight", "drop_loading"].forEach(function (c) {
    drop.classList.remove(c);
  });
  [loader, drop_success, drop_error].forEach(function (icon) {
    hide_in_flex(icon);
  });
  show_in_flex(drop_icon);
  show_in_flex(browse);
  show_in_flex(drop_text);
  drop_text.innerText = "Drag and drop file or ";
  drop.style.top = "50%";
  in_default_state = true;
  in_loading_state = false;
}

function quick_close_drop_area() {
  drop.style.top = "-100%";
  drop.setAttribute("data-open", "false");
}

function close_drop_area() {
  setTimeout(quick_close_drop_area, 1500);
}

function close_drop_on_click(e) {
  if (drop.contains(e.target) || e.target == upload_button || !in_default_state) {
    return;
  }
  quick_close_drop_area();
}

var in_loading_state = false;
function drop_area_loading() {
  drop.classList.add("drop_loading");
  show_in_flex(loader);
  ["drop_success", "drop_error", "drop_highlight"].forEach(function (c) {
    drop.classList.remove(c);
  });
  [drop_icon, drop_success, drop_error].forEach(function (icon) {
    hide_in_flex(icon);
  });
  hide_in_flex(drop_text);
  hide_in_flex(browse);
  show_in_flex(loader);
  in_default_state = false;
  in_loading_state = true;
}

function drop_area_success() {
  drop.classList.add("drop_success");
  ["drop_loading", "drop_error", "drop_highlight"].forEach(function (c) {
    drop.classList.remove(c);
  });
  [drop_icon, loader, drop_error].forEach(function (icon) {
    hide_in_flex(icon);
  });
  hide_in_flex(browse);
  show_in_flex(drop_success);
  drop_text.innerText = "File upload complete";
  show_in_flex(drop_text);
  in_default_state = false;
  in_loading_state = false;
  close_drop_area();
}

function drop_area_error() {
  drop.classList.add("drop_error");
  ["drop_loading", "drop_success", "drop_highlight"].forEach(function (c) {
    drop.classList.remove(c);
  });
  [drop_icon, loader, drop_success].forEach(function (icon) {
    hide_in_flex(icon);
  });
  hide_in_flex(browse);
  show_in_flex(drop_error);
  drop_text.innerText = "Unable to upload file";
  show_in_flex(drop_text);
  in_default_state = false;
  in_loading_state = false;
  close_drop_area();
}

drop.addEventListener("drop", function (e) {
  if (in_default_state) {
    update_code_input(e.dataTransfer.files[0]);
  }
});

var file_input = document.getElementById("file_input");
file_input.addEventListener("change", function () {
  if (in_default_state) {
    update_code_input(file_input.files[0]);
  }
});

var trigger_input = new Event("input", { bubbles: true });
function update_code_input(file) {
  var ready = false;
  var result = "";
  var error = false;

  drop_area_loading();

  function check() {
    if (ready) {
      code_input.value = result;
      code_input.dispatchEvent(trigger_input);
      drop_area_success();
      return;
    }
    if (error) {
      drop_area_error();
      return;
    }
    setTimeout(check, 1000);
  }
  check();

  var reader = new FileReader();
  reader.onloadend = function (e) {
    result = e.target.result;
    ready = true;
  };
  reader.onerror = function (e) {
    console.log(e);
    error = true;
  };
  reader.readAsText(file);
}

browse.addEventListener("click", function () {
  file_input.click();
});

function update_loader_border() {
  if (!in_loading_state) {
    show_in_flex(loader);
  }
  var width = String(getComputedStyle(loader).width).replace("px", "");
  var border = parseInt(width) / 10;
  loader.style.setProperty("--border", `${border}px`);
  if (!in_loading_state) {
    hide_in_flex(loader);
  }
}
update_loader_border();
window.onresize = update_loader_border;
