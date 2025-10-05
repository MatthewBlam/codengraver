const language_titles = ["1C:Enterprise", "ActionScript", "Ada", "AngelScript", "Apache Access Log", "Apache config", "AppleScript", "ArcGIS Arcade", "Arduino", "ARM Assembly", "AsciiDoc", "AspectJ", "Augmented Backus-Naur Form", "AutoHotkey", "AutoIt", "AVR Assembly", "Awk", "Backus-Naur Form", "Bash", "BASIC", "Batch File", "Brainfuck", "C", "C/AL", "C#", "C++", "Cache Object Script", "Cap'n Proto", "Ceylon", "Clean", "Clojure", "Clojure REPL", "CMake", "CoffeeScript", "Coq", "CRM Shell", "Crystal", "CSP", "CSS", "D", "Dart", "Delphi", "Device Tree", "Diff", "Django", "DNS Zone", "Dockerfile", "DSconfig", "Dust", "Elixir", "Elm", "Embedded Ruby", "Erlang", "Erlang REPL", "Excel formulae", "Extended Backus-Naur Form", "F#", "FIX", "Flix", "Fortran", "G-code (ISO 6983)", "GAMS", "GAUSS", "Gherkin", "GLSL", "GML", "Go", "Golo", "Gradle", "GraphQL", "Groovy", "HAML", "Handlebars", "Haskell", "Haxe", "HSP", "HTML, XML", "HTTP", "Hy", "Inform 7", "IRPF90", "ISBL", "Java", "JavaScript", "JBoss CLI", "JSON", "Julia", "Julia REPL", "Kotlin", "Lasso", "LaTeX", "LDIF", "Leaf", "Less", "Lisp", "LiveCode", "LiveScript", "LLVM IR", "Linden Scripting Language", "Lua", "Makefile", "Markdown", "Matlab", "Maxima", "MEL", "Mercury", "MIPS Assembly", "Mizar", "Mojolicious", "Monkey", "MoonScript", "N1QL", "NestedText", "Nginx Config", "Nim", "Nix", "Node REPL", "NSIS", "Objective-C", "OCaml", "OpenSCAD", "Oxygene", "Packet Filter Config", "Parser3", "Perl", "PHP", "PHP Template", "Plain Text", "Pony", "PostgreSQL & PL/pgSQL", "PowerShell", "Processing", "Prolog", "Properties", "Protocol Buffers", "Puppet", "PureBASIC", "Python", "Python Profiler", "Python REPL", "Q", "QML", "R", "ReasonML", "RenderMan RIB", "RenderMan RSL", "Roboconf", "RouterOS script", "Ruby", "Rules Language", "Rust", "SAS", "Scala", "Scheme", "Scilab", "SCSS", "Shell Session", "Smali", "Smalltalk", "Standard ML", "SQF", "SQL", "Stan", "Stata", "STEP Part 21", "Stylus", "SubUnit", "Swift", "Tagger Script", "Tcl", "Test Anything Protocol", "Thrift", "TOML, INI", "TP", "Twig", "TypeScript", "Vala", "VBScript", "VBScript in HTML", "Verilog", "VHDL", "Vim Script", "Visual Basic .NET", "WebAssembly", "Wolfram Mathematica", "Wren", "x86 Assembly", "X++", "XL", "XQuery", "YAML ", "Zephir"];
const language_codes = ["1c", "actionscript", "ada", "angelscript", "accesslog", "apache", "applescript", "arcade", "arduino", "armasm", "asciidoc", "aspectj", "abnf", "autohotkey", "autoit", "avrasm", "awk", "bnf", "bash", "basic", "bat", "brainfuck", "c", "cal", "csharp", "cpp", "cos", "capnproto", "ceylon", "clean", "clojure", "clojure-repl", "cmake", "coffeescript", "coq", "crmsh", "crystal", "csp", "css", "d", "dart", "delphi", "dts", "diff", "django", "dns", "dockerfile", "dsconfig", "dust", "elixir", "elm", "erb", "erlang", "erlang-repl", "excel", "ebnf", "fsharp", "fix", "flix", "fortran", "gcode", "gams", "gauss", "gherkin", "glsl", "gml", "go", "golo", "gradle", "graphql", "groovy", "haml", "handlebars", "haskell", "haxe", "hsp", "xml", "http", "hy", "inform7", "irpf90", "isbl", "java", "javascript", "jboss-cli", "json", "julia", "julia-repl", "kotlin", "lasso", "latex", "ldif", "leaf", "less", "lisp", "livecodeserver", "livescript", "llvm", "lsl", "lua", "makefile", "markdown", "matlab", "maxima", "mel", "mercury", "mipsasm", "mizar", "mojolicious", "monkey", "moonscript", "n1ql", "nestedtext", "nginx", "nim", "nix", "node-repl", "nsis", "objectivec", "ocaml", "openscad", "oxygene", "pf", "parser3", "perl", "php", "php-template", "plaintext", "pony", "pgsql", "powershell", "processing", "prolog", "properties", "protobuf", "puppet", "purebasic", "python", "profile", "python-repl", "q", "qml", "r", "reasonml", "rib", "rsl", "roboconf", "routeros", "ruby", "ruleslanguage", "rust", "sas", "scala", "scheme", "scilab", "scss", "shell", "smali", "smalltalk", "sml", "sqf", "sql", "stan", "stata", "step21", "stylus", "subunit", "swift", "taggerscript", "tcl", "tap", "thrift", "toml", "tp", "twig", "typescript", "vala", "vbscript", "vbscript-html", "verilog", "vhdl", "vim", "vbnet", "wasm", "mathematica", "wren", "x86asm", "x++", "xl", "xquery", "yaml", "zephir"];
function get_language_dict() {
  var dict = {};
  var index = 0;
  language_titles.forEach(function (key) {
    dict[key] = language_codes[index];
    index += 1;
  });
  return dict;
}
const language_dict = get_language_dict();

const styles_files = [
  "3024.min.css",
  "a11y-dark.min.css",
  "a11y-light.min.css",
  "agate.min.css",
  "an-old-hope.min.css",
  "androidstudio.min.css",
  "apathy.min.css",
  "apprentice.min.css",
  "arduino-light.min.css",
  "arta.min.css",
  "ascetic.min.css",
  "ashes.min.css",
  "atelier-cave-light.min.css",
  "atelier-cave.min.css",
  "atelier-dune-light.min.css",
  "atelier-dune.min.css",
  "atelier-estuary-light.min.css",
  "atelier-estuary.min.css",
  "atelier-forest-light.min.css",
  "atelier-forest.min.css",
  "atelier-heath-light.min.css",
  "atelier-heath.min.css",
  "atelier-lakeside-light.min.css",
  "atelier-lakeside.min.css",
  "atelier-plateau-light.min.css",
  "atelier-plateau.min.css",
  "atelier-savanna-light.min.css",
  "atelier-savanna.min.css",
  "atelier-seaside-light.min.css",
  "atelier-seaside.min.css",
  "atelier-sulphurpool-light.min.css",
  "atelier-sulphurpool.min.css",
  "atlas.min.css",
  "atom-one-dark-reasonable.min.css",
  "atom-one-dark.min.css",
  "atom-one-light.min.css",
  "bespin.min.css",
  "black-metal-bathory.min.css",
  "black-metal-burzum.min.css",
  "black-metal-dark-funeral.min.css",
  "black-metal-gorgoroth.min.css",
  "black-metal-immortal.min.css",
  "black-metal-khold.min.css",
  "black-metal-marduk.min.css",
  "black-metal-mayhem.min.css",
  "black-metal-nile.min.css",
  "black-metal-venom.min.css",
  "black-metal.min.css",
  "brewer.min.css",
  "bright.min.css",
  "brogrammer.min.css",
  "brush-trees-dark.min.css",
  "brush-trees.min.css",
  "chalk.min.css",
  "circus.min.css",
  "classic-dark.min.css",
  "classic-light.min.css",
  "codepen-embed.min.css",
  "codeschool.min.css",
  "color-brewer.min.css",
  "colors.min.css",
  "cupcake.min.css",
  "cupertino.min.css",
  "danqing.min.css",
  "darcula.min.css",
  "dark-violet.min.css",
  "dark.min.css",
  "darkmoss.min.css",
  "darktooth.min.css",
  "decaf.min.css",
  "default-dark.min.css",
  "default-light.min.css",
  "default.min.css",
  "devibeans.min.css",
  "dirtysea.min.css",
  "docco.min.css",
  "dracula.min.css",
  "edge-dark.min.css",
  "edge-light.min.css",
  "eighties.min.css",
  "embers.min.css",
  "equilibrium-dark.min.css",
  "equilibrium-gray-dark.min.css",
  "equilibrium-gray-light.min.css",
  "equilibrium-light.min.css",
  "espresso.min.css",
  "eva-dim.min.css",
  "eva.min.css",
  "far.min.css",
  "felipec.min.css",
  "flat.min.css",
  "foundation.min.css",
  "framer.min.css",
  "fruit-soda.min.css",
  "gigavolt.min.css",
  "github-dark-dimmed.min.css",
  "github-dark.min.css",
  "github.min.css",
  "gml.min.css",
  "google-dark.min.css",
  "google-light.min.css",
  "googlecode.min.css",
  "gradient-dark.min.css",
  "gradient-light.min.css",
  "grayscale-dark.min.css",
  "grayscale-light.min.css",
  "grayscale.min.css",
  "green-screen.min.css",
  "gruvbox-dark-hard.min.css",
  "gruvbox-dark-medium.min.css",
  "gruvbox-dark-pale.min.css",
  "gruvbox-dark-soft.min.css",
  "gruvbox-light-hard.min.css",
  "gruvbox-light-medium.min.css",
  "gruvbox-light-soft.min.css",
  "hardcore.min.css",
  "harmonic16-dark.min.css",
  "harmonic16-light.min.css",
  "heetch-dark.min.css",
  "heetch-light.min.css",
  "helios.min.css",
  "hopscotch.min.css",
  "horizon-dark.min.css",
  "horizon-light.min.css",
  "humanoid-dark.min.css",
  "humanoid-light.min.css",
  "hybrid.min.css",
  "ia-dark.min.css",
  "ia-light.min.css",
  "icy-dark.min.css",
  "idea.min.css",
  "intellij-light.min.css",
  "ir-black.min.css",
  "isbl-editor-dark.min.css",
  "isbl-editor-light.min.css",
  "isotope.min.css",
  "kimber.min.css",
  "kimbie-dark.min.css",
  "kimbie-light.min.css",
  "lightfair.min.css",
  "lioshi.min.css",
  "london-tube.min.css",
  "macintosh.min.css",
  "magula.min.css",
  "marrakesh.min.css",
  "materia.min.css",
  "material-darker.min.css",
  "material-lighter.min.css",
  "material-palenight.min.css",
  "material-vivid.min.css",
  "material.min.css",
  "mellow-purple.min.css",
  "mexico-light.min.css",
  "mocha.min.css",
  "mono-blue.min.css",
  "monokai-sublime.min.css",
  "monokai.min.css",
  "nebula.min.css",
  "night-owl.min.css",
  "nnfx-dark.min.css",
  "nnfx-light.min.css",
  "nord.min.css",
  "nova.min.css",
  "obsidian.min.css",
  "ocean.min.css",
  "oceanicnext.min.css",
  "one-light.min.css",
  "one-dark.min.css",
  "outrun-dark.min.css",
  "panda-syntax-dark.min.css",
  "panda-syntax-light.min.css",
  "papercolor-dark.min.css",
  "papercolor-light.min.css",
  "paraiso-dark.min.css",
  "paraiso-light.min.css",
  "paraiso.min.css",
  "pasque.min.css",
  "phd.min.css",
  "pico.min.css",
  "pojoaque.jpg",
  "pojoaque.min.css",
  "pop.min.css",
  "porple.min.css",
  "purebasic.min.css",
  "qtcreator-dark.min.css",
  "qtcreator-light.min.css",
  "qualia.min.css",
  "railscasts.min.css",
  "rainbow.min.css",
  "rebecca.min.css",
  "ros-pine-dawn.min.css",
  "ros-pine-moon.min.css",
  "ros-pine.min.css",
  "routeros.min.css",
  "sagelight.min.css",
  "sandcastle.min.css",
  "school-book.min.css",
  "seti-ui.min.css",
  "shades-of-purple.min.css",
  "shapeshifter.min.css",
  "silk-dark.min.css",
  "silk-light.min.css",
  "snazzy.min.css",
  "solar-flare-light.min.css",
  "solar-flare.min.css",
  "solarized-dark.min.css",
  "solarized-light.min.css",
  "spacemacs.min.css",
  "srcery.min.css",
  "stackoverflow-dark.min.css",
  "stackoverflow-light.min.css",
  "summercamp.min.css",
  "summerfruit-dark.min.css",
  "summerfruit-light.min.css",
  "sunburst.min.css",
  "synth-midnight-terminal-dark.min.css",
  "synth-midnight-terminal-light.min.css",
  "tango.min.css",
  "tender.min.css",
  "tokyo-night-dark.min.css",
  "tokyo-night-light.min.css",
  "tomorrow-night-blue.min.css",
  "tomorrow-night-bright.min.css",
  "tomorrow-night.min.css",
  "tomorrow.min.css",
  "twilight.min.css",
  "unikitty-dark.min.css",
  "unikitty-light.min.css",
  "vs.min.css",
  "vs2015.min.css",
  "vulcan.min.css",
  "windows-10-light.min.css",
  "windows-10.min.css",
  "windows-95-light.min.css",
  "windows-95.min.css",
  "windows-high-contrast-light.min.css",
  "windows-high-contrast.min.css",
  "windows-nt-light.min.css",
  "windows-nt.min.css",
  "woodland.min.css",
  "xcode-dusk.min.css",
  "xcode.min.css",
  "xt256.min.css",
  "zenburn.min.css",
];
const style_titles = ["3024", "A11Y Dark", "A11Y Light", "Agate", "An Old Hope", "Androidstudio", "Apathy", "Apprentice", "Arduino Light", "Arta", "Ascetic", "Ashes", "Atelier Cave Light", "Atelier Cave", "Atelier Dune Light", "Atelier Dune", "Atelier Estuary Light", "Atelier Estuary", "Atelier Forest Light", "Atelier Forest", "Atelier Heath Light", "Atelier Heath", "Atelier Lakeside Light", "Atelier Lakeside", "Atelier Plateau Light", "Atelier Plateau", "Atelier Savanna Light", "Atelier Savanna", "Atelier Seaside Light", "Atelier Seaside", "Atelier Sulphurpool Light", "Atelier Sulphurpool", "Atlas", "Atom One Dark Reasonable", "Atom One Dark", "Atom One Light", "Bespin", "Black Metal Bathory", "Black Metal Burzum", "Black Metal Dark Funeral", "Black Metal Gorgoroth", "Black Metal Immortal", "Black Metal Khold", "Black Metal Marduk", "Black Metal Mayhem", "Black Metal Nile", "Black Metal Venom", "Black Metal", "Brewer", "Bright", "Brogrammer", "Brush Trees Dark", "Brush Trees", "Chalk", "Circus", "Classic Dark", "Classic Light", "Codepen Embed", "Codeschool", "Color Brewer", "Colors", "Cupcake", "Cupertino", "Danqing", "Darcula", "Dark Violet", "Dark", "Darkmoss", "Darktooth", "Decaf", "Default Dark", "Default Light", "Default", "Devibeans", "Dirtysea", "Docco", "Dracula", "Edge Dark", "Edge Light", "Eighties", "Embers", "Equilibrium Dark", "Equilibrium Gray Dark", "Equilibrium Gray Light", "Equilibrium Light", "Espresso", "Eva Dim", "Eva", "Far", "Felipec", "Flat", "Foundation", "Framer", "Fruit Soda", "Gigavolt", "Github Dark Dimmed", "Github Dark", "Github", "Gml", "Google Dark", "Google Light", "Googlecode", "Gradient Dark", "Gradient Light", "Grayscale Dark", "Grayscale Light", "Grayscale", "Green Screen", "Gruvbox Dark Hard", "Gruvbox Dark Medium", "Gruvbox Dark Pale", "Gruvbox Dark Soft", "Gruvbox Light Hard", "Gruvbox Light Medium", "Gruvbox Light Soft", "Hardcore", "Harmonic16 Dark", "Harmonic16 Light", "Heetch Dark", "Heetch Light", "Helios", "Hopscotch", "Horizon Dark", "Horizon Light", "Humanoid Dark", "Humanoid Light", "Hybrid", "Ia Dark", "Ia Light", "Icy Dark", "Idea", "Intellij Light", "Ir Black", "Isbl Editor Dark", "Isbl Editor Light", "Isotope", "Kimber", "Kimbie Dark", "Kimbie Light", "Lightfair", "Lioshi", "London Tube", "Macintosh", "Magula", "Marrakesh", "Materia", "Material Darker", "Material Lighter", "Material Palenight", "Material Vivid", "Material", "Mellow Purple", "Mexico Light", "Mocha", "Mono Blue", "Monokai Sublime", "Monokai", "Nebula", "Night Owl", "Nnfx Dark", "Nnfx Light", "Nord", "Nova", "Obsidian", "Ocean", "Oceanicnext", "One Light", "One Dark", "Outrun Dark", "Panda Syntax Dark", "Panda Syntax Light", "Papercolor Dark", "Papercolor Light", "Paraiso Dark", "Paraiso Light", "Paraiso", "Pasque", "Phd", "Pico", "Pojoaque.jpg", "Pojoaque", "Pop", "Porple", "Purebasic", "Qtcreator Dark", "Qtcreator Light", "Qualia", "Railscasts", "Rainbow", "Rebecca", "Ros Pine Dawn", "Ros Pine Moon", "Ros Pine", "Routeros", "Sagelight", "Sandcastle", "School Book", "Seti Ui", "Shades Of Purple", "Shapeshifter", "Silk Dark", "Silk Light", "Snazzy", "Solar Flare Light", "Solar Flare", "Solarized Dark", "Solarized Light", "Spacemacs", "Srcery", "Stackoverflow Dark", "Stackoverflow Light", "Summercamp", "Summerfruit Dark", "Summerfruit Light", "Sunburst", "Synth Midnight Terminal Dark", "Synth Midnight Terminal Light", "Tango", "Tender", "Tokyo Night Dark", "Tokyo Night Light", "Tomorrow Night Blue", "Tomorrow Night Bright", "Tomorrow Night", "Tomorrow", "Twilight", "Unikitty Dark", "Unikitty Light", "Vs", "Vs2015", "Vulcan", "Windows 10 Light", "Windows 10", "Windows 95 Light", "Windows 95", "Windows High Contrast Light", "Windows High Contrast", "Windows Nt Light", "Windows Nt", "Woodland", "Xcode Dusk", "Xcode", "Xt256", "Zenburn"];
function get_style_dict() {
  var dict = {};
  var index = 0;
  style_titles.forEach(function (key) {
    dict[key] = styles_files[index];
    index += 1;
  });
  return dict;
}
const style_dict = get_style_dict();

function open_dropdown_menu(e) {
  if (!e.target.classList.contains("dropdown")) {
    return;
  }
  var dropdown = e.target;
  var input = dropdown.children[0];
  var chevron = dropdown.children[1];
  var menu = dropdown.parentElement.children[1];
  if (!(dropdown.getAttribute("data-open") === "true")) {
    chevron.style.transform = "rotate(180deg)";
    menu.style.opacity = "1";
    menu.style.pointerEvents = "auto";
    dropdown.setAttribute("data-open", "true");
    input.style.pointerEvents = "auto";
    input.value = "";
    input.focus();
  }
}

function close_dropdown_menus(e) {
  var dropdowns = Array.from(document.getElementsByClassName("dropdown"));
  dropdowns.forEach(function (dropdown) {
    if (e.target == dropdown || e.target == dropdown.children[0]) {
      return;
    }
    var input = dropdown.children[0];
    var chevron = dropdown.children[1];
    var menu = dropdown.parentElement.children[1];
    chevron.style.removeProperty("transform");
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
    dropdown.setAttribute("data-open", "false");
    input.style.pointerEvents = "none";
    if (dropdown == language_dropdown) {
      input.value = current_language;
    }
    if (dropdown == style_dropdown) {
      input.value = current_style;
    }
  });
}

var language_dropdown = document.getElementById("language_dropdown").children[0];
var language_input = language_dropdown.children[0];
var language_dropdown_menu = language_dropdown.parentElement.children[1];
language_dropdown.addEventListener("click", open_dropdown_menu);
language_input.addEventListener("keyup", input_handler);
language_input.addEventListener("focus", input_handler);

function load_language_menu() {
  language_titles.forEach(function (title) {
    var option = document.createElement("div");
    option.textContent = title;
    language_dropdown_menu.append(option);
    option.addEventListener("mousedown", language_menu_option_handler);
    option.addEventListener("click", language_menu_option_handler);
  });
  language_input.value = "JavaScript";
}
load_language_menu();

var current_language = "JavaScript";
var refreshline = new Event("refreshline");
function language_menu_option_handler(e) {
  if (e.type == "mousedown") {
    e.target.style.backgroundColor = "var(--secondary)";
    e.target.style.color = "var(--primary)";
    return;
  }
  var language = e.target.textContent;
  prism_container.setAttribute("class", `language-${language_dict[language]}`);
  prism_output.setAttribute("class", `language-${language_dict[language]}`);
  current_language = language;
  language_dropdown.children[0].value = current_language;
  e.target.style.removeProperty("background-color");
  e.target.style.color = "var(--text)";
  prettyify();
  document.dispatchEvent(refreshline);
}

var style_dropdown = document.getElementById("style_dropdown").children[0];
var style_input = style_dropdown.children[0];
var style_dropdown_menu = style_dropdown.parentElement.children[1];
style_dropdown.addEventListener("click", open_dropdown_menu);
style_input.addEventListener("keyup", input_handler);
style_input.addEventListener("focus", input_handler);

function load_styles_menu() {
  style_titles.forEach(function (title) {
    var option = document.createElement("div");
    option.textContent = title;
    style_dropdown_menu.append(option);
    option.addEventListener("mousedown", style_menu_option_handler);
    option.addEventListener("click", style_menu_option_handler);
  });
  style_input.value = "Github Dark Dimmed";
}
load_styles_menu();

var current_style = "Github Dark Dimmed";
function style_menu_option_handler(e) {
  if (e.type == "mousedown") {
    e.target.style.backgroundColor = "var(--secondary)";
    e.target.style.color = "var(--primary)";
    return;
  }
  var style = e.target.textContent;
  change_style(current_style, style_dict[style]);
  current_style = style;
  style_dropdown.children[0].value = current_style;
  e.target.style.removeProperty("background-color");
  e.target.style.color = "var(--text)";
}

function change_style(old_style, new_style) {
  var old_file = `../highlight/styles/${style_dict[old_style]}`;
  var new_file = `../highlight/styles/${new_style}`;
  if (old_file == new_file) {
    return;
  }
  load_css_file(new_file);
  setTimeout(remove_css_file, 200, old_file);
  set_local_storage();
}

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
  function cleanup() {
    set_refresh_button_color();
    set_highlight_color();
    update_highlight_on_style_change();
  }
  setTimeout(cleanup, 100);
}

function input_handler(e) {
  if (e.type == "keyup") {
    search_filter(e);
  }
  if (e.type == "focus") {
    reset_after_search(e.target);
  }
}

function search_filter(e) {
  var input = e.target;
  var search = input.value.toLowerCase();
  if (search == "") {
    reset_after_search(input);
    return;
  }
  var options = Array.from(input.parentElement.parentElement.children[1].children);
  options.forEach(function (option) {
    var title = option.textContent.toLowerCase();
    if (title.includes(search)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
}

function reset_after_search(input) {
  var options = Array.from(input.parentElement.parentElement.children[1].children);
  options.forEach(function (option) {
    option.style.display = "block";
  });
}
