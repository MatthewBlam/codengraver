// stopped at delphi
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

var language_dropdown = document.getElementById("language_dropdown").children[0];
var language_dropdown_menu = language_dropdown.parentElement.children[1];
language_dropdown.addEventListener("click", open_dropdown_menu);

function open_dropdown_menu(e) {
  var dropdown = e.target;
  var menu = dropdown.parentElement.children[1];
  if (!(dropdown.getAttribute("data-open") === "true")) {
    menu.style.opacity = "1";
    menu.style.pointerEvents = "auto";
    dropdown.setAttribute("data-open", "true");
  }
}

function close_dropdown_menus(e) {
  var dropdowns = Array.from(document.getElementsByClassName("dropdown"));
  dropdowns.forEach(function (dropdown) {
    if (e.target == dropdown) {
      return;
    }
    var menu = dropdown.parentElement.children[1];
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
    dropdown.setAttribute("data-open", "false");
  });
}

function language_menu_option_handler(e) {
  var language = e.target.textContent;
  var index = 0;
  var i = 0;
  language_titles.forEach(function (item) {
    if (item == language) {
      index = i;
    }
    i += 1;
  });
  prism_container.setAttribute("class", `language-${language_codes[index]}`);
  prism_output.setAttribute("class", `language-${language_codes[index]}`);
  prettyify();
}

function load_language_menu() {
  language_titles.forEach(function (title) {
    var option = document.createElement("div");
    option.textContent = title;
    language_dropdown_menu.append(option);
    option.addEventListener("click", language_menu_option_handler);
  });
}
load_language_menu();
