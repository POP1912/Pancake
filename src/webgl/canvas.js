p.can = {};
p.canvases = [];
p.can.compatible_width = w.innerWidth - 20;
p.can.compatible_height = w.innerHeight - 20;

p.can.create = function(w, h, c) {
    p.canvases[c] = d.createElement("canvas");
    p.canvases[c].width = w;
    p.canvases[c].height = h;
    p.canvases[c].style.position = "absolute";
    p.canvases[c].style.top = "8px";
    p.canvases[c].style.left = "8px";
    p.canvases[c].style.zIndex = 0;
    document.body.appendChild(p.canvases[c]);
};

p.can.resize = function(w, h, c) {
    p.canvases[c].width = w;
    p.canvases[c].height = h;
};

p.can.setAttribute = function(v, val, c) {
    w.eval(" p.canvases[" + c.toString() + "]." + v.toString() + " = " + val.toString() + "; ");
};

p.can.remove = function(c) {
    p.canvases[c].parentNode.removeChild(p.canvases[c]);
};

p.can.hide = function(c) {
    p.canvases[c].style.visibility = "hidden";
};

p.can.show = function(c) {
    p.canvases[c].style.visibility = "visible";
};

p.can.set = function(ca, c) {
    p.canvases[c] = ca;
};
