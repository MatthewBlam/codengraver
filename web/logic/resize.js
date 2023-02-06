var resize_area = document.getElementById("resize_area");
var code_container = document.getElementById("code_input_container");

resize_area.addEventListener(
  "mousedown",
  function (e) {
    console.log("DSFadsf");
    start = e.y;
    document.addEventListener("mousemove", resize, false);
  },
  false
);

document.addEventListener(
  "mouseup",
  function () {
    document.removeEventListener("mousemove", resize, false);
  },
  false
);

var start;
function resize(e) {
  const difference = e.y - start;
  start = e.y;
  code_container.style.height = parseInt(getComputedStyle(code_input).height) + difference + "px";
}
