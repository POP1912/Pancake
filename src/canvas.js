pancake.canvas = {};
pancake.canvases = [];
pancake.canvas.compatible_width = window.innerWidth - 20;
pancake.canvas.compatible_height = window.innerHeight - 20;

pancake.canvas.create = function(width, height, canvas_index) {
    pancake.canvases[canvas_index] = document.createElement("canvas");
    pancake.canvases[canvas_index].width = width;
    pancake.canvases[canvas_index].height = height;
    document.body.appendChild(pancake.canvases[canvas_index]);
};

pancake.canvas.resize = function(width, height, canvas_index) {
    pancake.canvases[canvas_index].width = width;
    pancake.canvases[canvas_index].height = height;
};

pancake.canvas.setAttribute = function(variable, value, canvas_index) {
    window.eval(" pancake.canvases[" + canvas_index.toString() + "]." + variable.toString() + " = " + value.toString() + "; ");
};

pancake.canvas.remove = function(canvas_index) {
    pancake.canvases[canvas_index].parentNode.removeChild(pancake.canvases[canvas_index]);
};

pancake.canvas.hide = function(canvas_index) {
    pancake.canvases[canvas_index].style.visibility = "hidden";
};

pancake.canvas.show = function(canvas_index) {
    pancake.canvases[canvas_index].style.visibility = "visible";
};

pancake.canvas.set = function(canvas, canvas_index) {
    pancake.canvases[canvas_index] = canvas;
};