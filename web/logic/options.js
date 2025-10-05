// Container logic

var options_btn = document.getElementById("download_options_button");
var options_close_btn = document.getElementById("options_close");
var options_container = document.getElementById("options_container");
options_btn.addEventListener("click", open_options);
options_close_btn.addEventListener("click", close_options);

function open_options(e) {
    dimmer.style.opacity = "1";
    dimmer.style.pointerEvents = "auto";
    options_container.style.opacity = "1";
    options_container.style.pointerEvents = "auto";
}

function close_options(e) {
    dimmer.style.opacity = "0";
    dimmer.style.pointerEvents = "none";
    options_container.style.opacity = "0";
    options_container.style.pointerEvents = "none";
    set_options_local_storage();
}

var file_types = Array.from(document.getElementsByClassName("file_type"));
file_types.forEach(function (type) {
    type.addEventListener("click", option_type_handler);
});

function reset_type_styles() {
    file_types.forEach(function (type) {
        type.style.color = "var(--text)";
        type.style.fontWeight = "400";
        type.setAttribute("data-active", "false");
    });
}

function option_type_handler(e) {
    var type = e.target;
    reset_type_styles();
    type.style.color = "var(--primary)";
    type.style.fontWeight = "600";
    type.setAttribute("data-active", "true");
    setTimeout(function () {
        set_slider(type);
    }, 100);
    set_opts(type.textContent);
}

var opt_slider = document.getElementById("slider");
function set_slider(type) {
    var width = window.getComputedStyle(type).getPropertyValue("width");
    var pos = type.getBoundingClientRect().left - options_container.getBoundingClientRect().left;
    opt_slider.style.width = width;
    opt_slider.style.left = `${pos - 30}px`;
}

var opts = Array.from(document.getElementsByClassName("opt"));
function set_opts(type) {
    opts.forEach(function (opt) {
        opt.style.display = "none";
    });
    opts.forEach(function (opt) {
        var id = opt.getAttribute("id");
        if (id == "name_opt" || id == "width_opt" || id == "height_opt") {
            opt.style.removeProperty("display");
        }
    });
    switch (type) {
        case "PDF":
            opts.forEach(function (opt) {
                var id = opt.getAttribute("id");
                if (id == "width_opt" || id == "height_opt") {
                    opt.style.display = "none";
                }
                if (id == "format_opt" || id == "oreintation_opt" || id == "bg_opt" || id == "margin_opt") {
                    opt.style.removeProperty("display");
                }
            });
            break;
        case "PNG":
            opts.forEach(function (opt) {
                var id = opt.getAttribute("id");
                if (id == "scale_opt") {
                    opt.style.removeProperty("display");
                }
            });
            break;
        case "JPEG":
            opts.forEach(function (opt) {
                var id = opt.getAttribute("id");
                if (id == "scale_opt" || id == "quality_opt") {
                    opt.style.removeProperty("display");
                }
            });
            break;
        case "SVG":
            break;
    }
}

// Option specific logic

function init_load_options() {
    var options = get_options_local_storage();
    if (options.width_auto == "true") {
        width_check.parentElement.click();
    } else {
        width_inp.value = parseFloat(options.width);
    }
    if (options.height_auto == "true") {
        height_check.parentElement.click();
    } else {
        height_inp.value = parseFloat(options.height);
    }
    name_inp.value = options.name;
    quality_slider.value = parseInt(options.quality * 10);
    margin_slider.value = parseInt(options.margin * 10);
    opt_sliders.forEach(function (slider) {
        option_range_slider_handler({ target: slider });
    });
    opt_dropdowns.forEach(function (dropdown) {
        var id = dropdown.parentElement.parentElement.getAttribute("id");
        if (id == "scale_opt") dropdown.children[0].textContent = options.scale;
        if (id == "format_opt") dropdown.children[0].textContent = options.format;
        if (id == "orientation_opt") dropdown.children[0].textContent = options.orientation;
    });
    file_types.forEach(function (type) {
        if (type.textContent.toLowerCase() == options.file) {
            type.click();
        }
    });
}

function get_options_local_storage() {
    var options = JSON.parse(localStorage.getItem("options"));
    console.log(options);
    if (options == null) {
        return {
            width: "",
            width_auto: "true",
            height: "",
            height_auto: "true",
            name: "",
            file: "jpeg",
            quality: "1",
            scale: "2x",
            format: "Letter (8.5x11)",
            orientation: "Portrait",
            margin: "0",
            background: "",
        };
    }
    return options;
}

var quality_slider = document.getElementById("quality_slider");
var margin_slider = document.getElementById("margin_slider");

function set_options_local_storage() {
    var filetype;
    file_types.forEach(function (type) {
        if (type.getAttribute("data-active") == "true") {
            filetype = type.textContent.toLowerCase();
        }
    });
    var scaleval;
    var formatval;
    var oreintationval;
    opt_dropdowns.forEach(function (dropdown) {
        var value = dropdown.children[0].textContent;
        var id = dropdown.parentElement.parentElement.getAttribute("id");
        if (id == "scale_opt") scaleval = value;
        if (id == "format_opt") formatval = value;
        if (id == "orientation_opt") oreintationval = value;
    });
    var options = {
        width: width_inp.value,
        width_auto: width_check.getAttribute("data-checked"),
        height: height_inp.value,
        height_auto: height_check.getAttribute("data-checked"),
        name: name_inp.value,
        file: filetype,
        quality: String(quality_slider.value / 10),
        scale: scaleval,
        format: formatval,
        orientation: oreintationval,
        margin: String(margin_slider.value / 10),
        background: "",
    };
    localStorage.setItem("options", JSON.stringify(options));
}

var opt_checkboxes = Array.from(document.getElementsByClassName("opt_checkbox"));
opt_checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", option_checkbox_handler);
});
function option_checkbox_handler(e) {
    var container = e.target;
    var checkbox = Array.from(container.children)[0];
    var checkmark = Array.from(checkbox.children)[0];
    var checked = checkbox.getAttribute("data-checked") === "true";
    var input = Array.from(container.parentElement.children)[0];
    if (checked) {
        checkbox.setAttribute("data-checked", "false");
        checkbox.style.backgroundColor = "var(--secondary)";
        checkmark.style.background = "none";
        checkmark.style.opacity = "0";
        enable_input(input);
    } else {
        checkbox.setAttribute("data-checked", "true");
        checkbox.style.backgroundColor = "var(--primary)";
        checkmark.style.background = "none";
        checkmark.style.opacity = "1";
        disable_input(input);
    }
}

var name_inp = document.getElementById("name_inp");
var width_inp = document.getElementById("width_inp");
var height_inp = document.getElementById("height_inp");
var width_check = document.getElementById("width_check");
var height_check = document.getElementById("height_check");
var auto_dimensions = false;

function update_auto_dimensions() {
    if (auto_dimensions) {
        if (width_check.getAttribute("data-checked") == "true") {
            var val = prism_output.offsetWidth;
            width_inp.placeholder = val;
            width_inp.setAttribute("data-val", val);
        }
        if (height_check.getAttribute("data-checked") == "true") {
            var val = prism_output.offsetHeight;
            height_inp.placeholder = val;
            height_inp.setAttribute("data-val", val);
        }
    }
}

window.addEventListener(
    "resize",
    function (e) {
        update_auto_dimensions();
    },
    true
);

function disable_input(input) {
    auto_dimensions = true;
    input.style.background = "var(--light-300)";
    input.style.pointerEvents = "none";
    input = Array.from(input.children)[0];
    input.style.background = "var(--light-300)";
    input.value = "";
    input.setAttribute("data-auto", "true");
    update_auto_dimensions();
}

function enable_input(input) {
    auto_dimensions = false;
    input.style.background = "var(--light-200)";
    input.style.pointerEvents = "auto";
    input = Array.from(input.children)[0];
    input.style.background = "var(--light-200)";
    input.value = "";
    input.placeholder = "Enter a number";
    input.setAttribute("data-auto", "false");
}

width_inp.addEventListener("keydown", filter_input);
height_inp.addEventListener("keydown", filter_input);
width_inp.addEventListener("keyup", filter_input);
height_inp.addEventListener("keyup", filter_input);
width_inp.addEventListener("input", filter_input);
height_inp.addEventListener("input", filter_input);

var keys_pressed = [];
function filter_input(e) {
    var target = e.target;
    var key = e.key;
    if (e.type == "keydown") {
        keys_pressed.push(key);
        if (keys_pressed.includes("Meta") || keys_pressed.includes("Control") || keys_pressed.includes("Alt") || keys_pressed.includes("Shift")) {
            return;
        }
        var valid = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Meta"];
        if (valid.includes(key)) {
            if (target.value.includes(".") && key == ".") {
                e.preventDefault();
            }
            if (target.value == "" && key == ".") {
                e.preventDefault();
            }
            if (target.value == "" && key == "0") {
                e.preventDefault();
            }
            return;
        }
        e.preventDefault();
    }
    if (e.type == "keyup") {
        var index = keys_pressed.indexOf(key);
        if (index > -1) {
            keys_pressed.splice(index, 1);
        }
    }
    if (e.type == "input") {
        target.setAttribute("data-value", target.value);
    }
}

var opt_sliders = Array.from(document.getElementsByClassName("opt_slider"));
opt_sliders.forEach(function (slider) {
    slider.addEventListener("input", option_range_slider_handler);
});
function option_range_slider_handler(e) {
    var slider = e.target;
    var slider_value = Array.from(slider.parentElement.children)[1];
    var value = ((parseInt(slider.value) - slider.min) / (slider.max - slider.min)) * 100;
    var gradient = "linear-gradient(to right, var(--primary) 0%, var(--primary) " + value + "%, var(--secondary) " + value + "%, var(--secondary) 100%)";
    slider.style.setProperty("--slider-color", gradient);
    var new_value = slider.value / 10;
    slider_value.textContent = new_value;
}

var opt_dropdowns = Array.from(document.getElementsByClassName("dropdown_opt_input"));
opt_dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", option_dropdown_handler);
});

function option_dropdown_handler(e) {
    var dropdown = e.target;
    var open = dropdown.getAttribute("data-open") === "true";
    if (!open) {
        open_opt_dropdown_menu(dropdown);
    }
}

function open_opt_dropdown_menu(dropdown) {
    var chevron = dropdown.children[1];
    var menu = dropdown.parentElement.children[1];
    chevron.style.transform = "rotate(180deg)";
    menu.style.opacity = "1";
    menu.style.pointerEvents = "auto";
    dropdown.setAttribute("data-open", "true");
}

function close_opt_dropdown_menus(e) {
    opt_dropdowns.forEach(function (dropdown) {
        if (e.target == dropdown) {
            return;
        }
        var chevron = dropdown.children[1];
        var menu = dropdown.parentElement.children[1];
        chevron.style.removeProperty("transform");
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
        dropdown.setAttribute("data-open", "false");
    });
}

var opt_menus = Array.from(document.getElementsByClassName("dropdown_opt_select"));
opt_menus.forEach(function (menu) {
    Array.from(menu.children).forEach(function (selection) {
        selection.addEventListener("click", update_dropdown);
    });
});

function update_dropdown(e) {
    var selection = e.target;
    var value = selection.textContent;
    var container = selection.parentElement.parentElement;
    var display = container.children[0].children[0];
    display.textContent = value;
}
