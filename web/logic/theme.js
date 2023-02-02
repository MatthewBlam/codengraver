function load_css_file(filename) {
  var ref = document.createElement("link");
  ref.setAttribute("rel", "stylesheet");
  ref.setAttribute("type", "text/css");
  ref.setAttribute("href", filename);
  document.getElementsByTagName("head")[0].appendChild(ref);
}

function remove_css_file(filename) {
  var links = document.getElementsByTagName("link");
  for (var i = links.length; i >= 0; i--) {
    if (links[i] && links[i].getAttribute("href") != null && links[i].getAttribute("href").indexOf(filename) != -1) {
      links[i].parentNode.removeChild(links[i]);
    }
  }
}
