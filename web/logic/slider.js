var refreshline = new Event("refreshline");

var slider_value = document.getElementById("font_size_value");
var slider = document.getElementById("font_size_slider");
slider.addEventListener("input", slider_handler);

function slider_handler(init) {
  var value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  var gradient = "linear-gradient(to right, var(--primary) 0%, var(--primary) " + value + "%, var(--secondary) " + value + "%, var(--secondary) 100%)";
  slider.style.setProperty("--slider-color", gradient);
  slider_value.textContent = `${slider.value}px`;
  prism_output_container.style.fontSize = `${slider.value}px`;
  if (init.init == "init") {
    return;
  }
  prettyify();
  document.dispatchEvent(refreshline);
}
