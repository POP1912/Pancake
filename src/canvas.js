pancake.canvas = {};
pancake.canvases = [];
pancake.canvas.compatible_width = window.innerWidth - 20;
pancake.canvas.compatible_height = window.innerHeight - 20;

pancake.canvas.create = function(w, h, c) {
    pancake.canvases[c] = document.createElement("canvas");
    pancake.canvases[c].width = w;
    pancake.canvases[c].height = h;
    document.body.appendChild(pancake.canvases[c]);
};

pancake.canvas.resize = function(w, h, c) {
    pancake.canvases[c].width = w;
    pancake.canvases[c].height = h;
};

pancake.canvas.setAttribute = function(v, val, c) {
    window.eval(" pancake.canvases[" + c.toString() + "]." + v.toString() + " = " + val.toString() + "; ");
};

pancake.canvas.remove = function(c) {
    pancake.canvases[c].parentNode.removeChild(pancake.canvases[c]);
};

pancake.canvas.hide = function(c) {
    pancake.canvases[c].style.visibility = "hidden";
};

pancake.canvas.show = function(c) {
    pancake.canvases[c].style.visibility = "visible";
};

pancake.canvas.set = function(ca, c) {
    pancake.canvases[c] = ca;
};
