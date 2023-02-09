window.jsPDF = window.jspdf.jsPDF;
var download = document.getElementById("download_button");
download.addEventListener("click", download_file);

var downloading = false;
function download_file() {
  if (downloading) {
    return;
  }
  downloading = true;
  open_download_container();
  render_options = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    quality: download_options.quality,
    width: prism_output.offsetWidth * download_options.scale,
    height: prism_output.offsetHeight * download_options.scale,
    style: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      transform: "scale(" + download_options.scale + ")",
      transformOrigin: "top left",
    },
  };
  switch (download_options.file) {
    case "png":
      export_png(render_options);
      break;
    case "jpeg":
      prism_container.style.borderRadius = "0px";
      prism_output.style.borderRadius = "0px";
      export_jpeg(render_options);
      break;
    case "pdf":
      export_pdf(render_options);
      break;
    case "svg":
      export_svg();
      break;
    default:
      export_png(render_options);
      break;
  }
}

var download_options = {
  width: "auto", // Default of container or user specified
  height: "auto", // Default of container or user specified
  name: "codengraver", // input
  file: "pdf", // png, jpeg, pdf, svg
  quality: 1, // 0 - 1, increment 0.1
  scale: 2, // 1x, 2x, 4x
  format: "Letter", // Letter (8.5x11), Legal (8.5x14), Ledger (11x17), A4 (8.27x11.69, A3 (11.69x16.54)
  orientation: "Portrait", // Portrait or Landscape
  margin: 0.5, // 0 - 1 inches, increment 0.1
  background: "", // https://github.com/mdbassit/Coloris maybe add support later
};
function set_download_options() {}

function export_png(render_options) {
  var filename = download_options.name + "." + download_options.file;
  htmlToImage
    .toPng(prism_container, render_options)
    .then(function (dataUrl) {
      finish_progress();
      function cleanup() {
        saveAs(dataUrl, filename);
        downloading = false;
        close_download_container();
      }
      setTimeout(cleanup, 750);
      return dataUrl;
    })
    .catch(function (error) {
      console.error("Something went wrong with exporting PNG!", error);
    });
}

function export_jpeg(render_options) {
  var filename = download_options.name + "." + download_options.file;
  htmlToImage
    .toJpeg(prism_container, render_options)
    .then(function (dataUrl) {
      finish_progress();
      function cleanup() {
        saveAs(dataUrl, filename);
        prism_container.style.borderRadius = "4px";
        prism_output.style.borderRadius = "4px";
        downloading = false;
        close_download_container();
      }
      setTimeout(cleanup, 750);
      return dataUrl;
    })
    .catch(function (error) {
      console.error("Something went wrong with exporting JPEG!", error);
    });
}

function export_svg() {
  var filename = download_options.name + "." + download_options.file;
  function filter(node) {
    return node.tagName !== "i";
  }
  htmlToImage
    .toSvg(prism_container, { filter: filter })
    .then(function (dataUrl) {
      finish_progress();
      function cleanup() {
        saveAs(dataUrl, filename);
        downloading = false;
        close_download_container();
      }
      setTimeout(cleanup, 750);
      return dataUrl;
    })
    .catch(function (error) {
      console.error("Something went wrong with exporting SVG!", error);
    });
}

function export_pdf(render_options) {
  var filename = download_options.name + "." + download_options.file;
  var doc = new jsPDF({ unit: "px", format: download_options.format.toLowerCase(), orientation: download_options.orientation.toLowerCase() });
  var doc_width = doc.internal.pageSize.getWidth();
  var doc_height = doc.internal.pageSize.getHeight();
  var doc_in = new jsPDF({ unit: "in", format: download_options.format.toLowerCase(), orientation: download_options.orientation.toLowerCase() });
  var margin = (download_options.margin / doc_in.internal.pageSize.getWidth()) * doc_width;
  if (margin == 0) {
    prism_container.style.borderRadius = "0px";
    prism_output.style.borderRadius = "0px";
  } else {
    prism_container.style.borderRadius = "4px";
    prism_output.style.borderRadius = "4px";
  }
  var use_width = 2 * (doc_width - margin * 2);
  var use_height = 2 * (doc_height - margin * 2);
  prism_container.style.width = `${use_width}px`;
  prism_output.style.width = `${use_width}px`;
  if (parseInt(getComputedStyle(prism_output).height) > doc_height - margin * 2) {
    prism_container.style.height = `${use_height}px`;
    prism_output.style.height = `${use_height}px`;
  } else {
    prism_container.style.height = `${use_height}px`;
    prism_output.style.height = `${use_height}px`;
  }
  render_options.style.transform = "scale(2)";
  render_options.width = use_width * 2;
  render_options.height = use_height * 2;
  var lines_per_page = calc_lines_per_page(use_height);
  var pages = lines_per_page.length;
  var progress_increment = 98 / pages;
  var last = pages - 1;
  function recursive_doc(index) {
    show_lines_in_output(lines_per_page[index]);
    htmlToImage
      .toPng(prism_container, render_options)
      .then(function (dataUrl) {
        if (index != 0) {
          doc.addPage();
        }
        increment_progress(progress_increment);
        if (index == last) {
          finish_progress();
        }
        doc.addImage(dataUrl, "PNG", margin, margin, use_width / 2, use_height / 2); // Divide by 2 because original use_width variable multiplies the doc by 2
        if (index == last) {
          function cleanup() {
            doc.save(filename);
            var lines = Array.from(prism_output.children[0].children[0].children);
            lines.forEach(function (line) {
              line.style.removeProperty("display");
            });
            prism_container.style.borderRadius = "4px";
            prism_output.style.borderRadius = "4px";
            prism_container.style.width = "100%";
            prism_output.style.width = "100%";
            prism_container.style.height = "fit-content";
            prism_output.style.height = "fit-content";
            downloading = false;
            close_download_container();
          }
          setTimeout(cleanup, 750);
        } else {
          recursive_doc(index + 1);
        }
      })
      .catch(function (error) {
        console.error("Something went wrong with exporting PDF!", error);
      });
  }
  recursive_doc(0);
}

function show_lines_in_output(lines_per_page) {
  var lines = Array.from(prism_output.children[0].children[0].children);
  var line_number = 1;
  lines.forEach(function (line) {
    line.style.removeProperty("display");
    if (line_number >= lines_per_page[0] && line_number <= lines_per_page[1]) {
      line_number += 1;
      return;
    }
    line.style.display = "none";
    line_number += 1;
  });
  prism_container.scrollTop = 0;
  prism_output.scrollTop = 0;
}

function calc_lines_per_page(page_height) {
  var output_height = 12;
  var line_height = parseInt(getComputedStyle(prism_output.children[0].children[0].children[0]).height);
  var lines = Array.from(prism_output.children[0].children[0].children);
  var first_line = 1;
  var last_line = 1;
  var lines_per_page = [];
  console.log(lines.length);
  lines.forEach(function (line) {
    output_height += line_height;
    if (line == lines[lines.length - 1]) {
      lines_per_page.push([first_line, last_line]);
    }
    if (output_height + line_height < page_height) {
      last_line += 1;
      return;
    }
    lines_per_page.push([first_line, last_line]);
    first_line = last_line + 1;
    last_line = last_line + 1;
    output_height = 12;
  });
  return lines_per_page;
}

var dimmer = document.getElementById("background_dim");
var download_container = document.getElementById("download_progress_container");
var progress_bar = document.getElementById("progress_indicator");
var progress_file = document.getElementById("progress_file_text");

function open_download_container() {
  window.scrollTo(0, 0);
  dimmer.style.opacity = "1";
  dimmer.style.pointerEvents = "auto";
  download_container.style.opacity = "1";
  progress_bar.style.width = "2%";
  current_percent = 2;
  progress_file.textContent = download_options.name + "." + download_options.file;
}

function close_download_container() {
  dimmer.style.opacity = "0";
  dimmer.style.pointerEvents = "none";
  download_container.style.opacity = "0";
  setTimeout(function () {
    progress_bar.style.width = "0%";
    current_percent = 0;
  }, 300);
}

var current_percent = 0;
function increment_progress(percent) {
  current_percent += percent;
  progress_bar.style.width = `${current_percent}%`;
}

function finish_progress() {
  current_percent = 110;
  progress_bar.style.width = "110%";
}
