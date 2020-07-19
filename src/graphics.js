p.g = {};
p.g.r = {};
p.images = [];
p.g.FILL = "fill";
p.g.STROKE = "line";
p.g.BOTH = "both";
p.g.ANTIALIASING_LOW = "low";
p.g.ANTIALIASING_MEDIUM = "medium";
p.g.ANTIALIASING_HIGH = "high";
p.g.context = undefined;
p.g.mode = p.g.FILL;

p.g.r.alpha = function() {
    return pancake.util.random(1);
};

p.g.r.RGB = function() {
    return ("rgb(" + pancake.util.random(255) + "," + pancake.util.random(255) + "," + pancake.util.random(255) + ")").toString();
};

p.g.r.RGBA = function() {
    return ("rgba(" + pancake.util.random(255) + "," + pancake.util.random(255) + "," + pancake.util.random(255) + "," + pancake.util.random(255) + ")").toString();
};

p.g.r.HSL = function() {
    return ("hsl(" + pancake.util.random(360) + "," + pancake.util.random(100) + "%," + pancake.util.random(100) + "%)").toString();
};

p.g.r.HSLA = function() {
    return ("hsla(" + pancake.util.random(360) + "," + pancake.util.random(100) + "%," + pancake.util.random(100) + "%," + Math.random() + ")").toString();
};

p.g.fullscreen = function() {
    return document.fullscreen || document.webkitIsFullScreen || document.mozFullscreen;
};

p.g.toggleFullscreen = function() {
    var canvas = p.g.context.canvas;
	if (canvas.requestFullscreen) canvas.requestFullscreen();
    if (canvas.mozRequestFullScreen) canvas.mozRequestFullScreen();
    if (canvas.webkitRequestFullscreen) canvas.webkitRequestFullscreen();
    if (canvas.msRequestFullscreen) canvas.msRequestFullscreen();
};

p.g.exitFullscreen = function() {
    if (document.exitFullscreen) document.exitFullscreen();
	if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    if (document.msExitFullscreen) document.msExitFullscreen();
    p.g.context.canvas.width = pancake.canvas.compatible_width;
    p.g.context.canvas.height = pancake.canvas.compatible_height;
};

p.g.useContext = function(context_index) {
    p.g.context = pancake.contexts[context_index];
};

p.g.setAlpha = function(a) {
    p.g.context.globalAlpha = a;
};

p.g.setLineWidth = function(w) {
    p.g.context.lineWidth = w;
};

p.g.RGB = function(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
};

p.g.RGBA = function(r, g, b, a) {
    return "rgb(" + r + "," + g + "," + b + "," + a + ")";
};

p.g.HSL = function(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
};

p.g.HSLA = function(h, s, l, a) {
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
};

p.g.HEX = function(h) {
    return ("#" + h).toString();
};

p.g.color = function(f, s) {
    if (pancake.debug.unknown(s)) s = "black";
    p.g.context.fillStyle = f;
    p.g.context.strokeStyle = s;
};

p.g.setBackgroundColor = function(c) {
    p.g.context.canvas.style.backgroundColor = c;
};

p.g.setBackgroundImage = function(src) {
    p.g.context.canvas.style.backgroundImage = "url(" + src + ")";
    p.g.context.canvas.style.backgroundSize = (p.g.context.canvas.width + "px " + p.g.context.canvas.height + "px");
};

p.g.setFont = function(f, s) {
    p.g.context.font = (s + "px " + f).toString();
};

p.g.setTextAlignment = function(a) {
    p.g.context.textAlign = a;
};

p.g.clear = function() {
    p.g.context.clearRect(0, 0, p.g.context.canvas.width, p.g.context.canvas.height);
};

p.g.text = function(t, x, y) {
    if (p.g.mode == p.g.FILL) p.g.context.fillText(t, x, y);
    if (p.g.mode == p.g.STROKE) p.g.context.strokeText(t, x, y);
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fillText(t, x, y);
        p.g.context.strokeText(t, x, y);
    }
};

p.g.rect = function(x, y, w, h) {
    if (p.g.mode == p.g.FILL) p.g.context.fillRect(x, y, w, h);
    if (p.g.mode == p.g.STROKE) p.g.context.strokeRect(x, y, w, h);
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fillRect(x, y, w, h);
        p.g.context.strokeRect(x, y, w, h);
    }
};

p.g.roundedRect = function(x, y, w, h, r) {
    p.g.context.beginPath();
    p.g.context.moveTo(x + r, y);
    p.g.context.lineTo(x + w - r, y);
    p.g.context.quadraticCurveTo(x + w, y, x + w, y + r);
    p.g.context.lineTo(x + w, y + h - r);
    p.g.context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    p.g.context.lineTo(x + r, y + h);
    p.g.context.quadraticCurveTo(x, y + h, x, y + h - r);
    p.g.context.lineTo(x, y + r);
    p.g.context.quadraticCurveTo(x, y, x + r, y);
    p.g.context.closePath();
    if (p.g.mode == p.g.FILL) p.g.context.fill();
    if (p.g.mode == p.g.STROKE) p.g.context.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fill();
        p.g.context.stroke();
    }
};

p.g.circle = function(x, y, r) {
    p.g.context.beginPath();
    p.g.context.arc(x, y, r, 90, 180 * Math.PI);
    p.g.context.closePath();
    if (p.g.mode == p.g.FILL) p.g.context.fill();
    if (p.g.mode == p.g.STROKE) p.g.context.stroke();
    if (p.g.mode == p.g.BOTH) { 
            p.g.context.fill();
            p.g.context.stroke();
    }
};

p.g.ellipse = function(x, y, rx, ry, rot, sa, ea, a) {
    p.g.context.beginPath();
    p.g.context.ellipse(x, y, rx, ry, rot, sa, ea, a);
    p.g.context.closePath();
    if (p.g.mode == p.g.FILL) p.g.context.fill();
    if (p.g.mode == p.g.STROKE) p.g.context.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fill();
        p.g.context.stroke();
    }
};

p.g.line = function(x1, y1, x2, y2, lw) {
    p.g.context.lineWidth = lw;
    p.g.context.beginPath();
    p.g.context.moveTo(x1,y1);
    p.g.context.lineTo(x2,y2);
    p.g.context.closePath();
    p.g.context.stroke();
    p.g.context.lineWidth = 1;
};

p.g.triangle = function(x1, y1, x2, y2, x3, y3, lw) {
    p.g.context.lineWidth = lw;
    p.g.context.beginPath();
    p.g.context.moveTo(x1,y1);
    p.g.context.lineTo(x2,y2);
    p.g.context.lineTo(x3,y3);
    p.g.context.lineTo(x1,y1);
    p.g.context.closePath();
    if (p.g.mode == p.g.FILL) p.g.context.fill();
    if (p.g.mode == p.g.STROKE) p.g.context.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fill();
        p.g.context.stroke();
    }
    p.g.context.lineWidth = 1;
};

p.g.polygon = function(po) {
    p.g.context.beginPath();
    p.g.context.moveTo(po[0][0], po[0][1]);
    for (var i = 0; i < po.length; i++) p.g.context.lineTo(po[i][0], po[i][1]);
    p.g.context.closePath();
    if (p.g.mode == p.g.FILL) p.g.fill();
    if (p.g.mode == p.g.STROKE) p.g.context.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fill();
        p.g.context.stroke(); 
    }
};

p.g.loadImage = function(src, i) {
    p.images[i] = new Image();
    p.images[i].src = src;
};

p.g.loadImageFromDocument = function(e, i) {
    p.images[i] = new Image();
    p.images[i].src = e.src;
};

p.g.image = function(i, x, y, w, h) {
    p.g.context.drawImage(i, x, y, w, h);
};

p.g.imageFromIndex = function(i, x, y, w, h) {
    p.g.context.drawImage(p.images[i], x, y, w, h);
};

p.g.useFilters = function(f, v) {
    for (var i = 0;i < f.length;i++) p.g.context.canvas.style.filter += (" " + f[i] + "(" + v[i] + ") ").toString();
};

p.g.addFilter = function(f, v) {
    p.g.content.canvas.style.filter += (" " + f + "(" + v + ") ").toString();
};

p.g.clearFilters = function() {
    p.g.context.canvas.style.filter = "none";
};

p.g.erase = function(x, y, w, h) {
    p.g.context.clearRect(x, y, w, h);
};

p.g.canvasToImage = function(c) {
    if (pancake.debug.unknown(c)) c = 0;
    return pancake.canvases[c].toDataURL();
};

p.g.screenshot = function(c) {
    if (pancake.debug.unknown(c)) c = 0;
    window.open(pancake.canvases[c].toDataURL());
};

p.g.square = function(x, y, s) {
    if (p.g.mode == p.g.FILL) p.g.context.fillRect(x, y, s, s);
    if (p.g.mode == p.g.STROKE) p.g.context.strokeRect(x, y, s, s);
    if (p.g.mode == p.g.BOTH) {
        p.g.context.fillRect(x, y, s, s);
        p.g.context.strokeRect(x, y, s, s);
    }
};

p.g.pixel = function(x, y) {
    p.g.context.fillRect(x, y, 1, 1);
};

p.g.point = function(x, y) {
    p.g.context.fillCircle(x, y, 1);
};

p.g.gradientRect = function(x, y, w, h, content) {
    var linear = p.g.context.createLinearGradient(x, y, w, h);
    for(var loopdlg = 0; loopdlg < content.length; loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
    p.g.color(linear, linear);
    if (p.g.mode == p.g.FILL) p.g.context.fillRect(x, y, w, h);
	if (p.g.mode == p.g.STROKE) p.g.context.strokeRect(x, y, w, h);
	if (p.g.mode == p.g.BOTH)
	{
        p.g.context.fillRect(x, y, w, h);
		p.g.context.strokeRect(x, y, w, h);
	}
};

p.g.grid = function(s) {
    var grid_loop_width = p.g.context.canvas.width / s,grid_loop_height = p.g.context.canvas.height / s;
	var x = 0,y = 0;
	for(var i = 0;i < grid_loop_height;i++)
	{
		for(z = 0;z < grid_loop_width;z++)
		{
			p.g.context.strokeRect(x,y,s,s);
            p.g.context.strokeRect(x + s,y,s,s);
            x = x + s;
		}
		x = 0,y = y + s;
	}
};

// NOTES: Antialiasing works with images
p.g.setAntialiasing = function(e, q) {
    p.g.context.imageSmoothingEnabled = e;
    p.g.context.imageSmoothingQuality = q;
};

p.g.setContext = function(c, i) {
    p.g.context = c;
    pancake.context.set(c, i);
};

p.g.translate = function(x, y) {
    p.g.context.translate(x, y);
};

p.g.rotate = function(a) {
    p.g.context.rotate(a);
};

p.g.scale = function(x, y) {
    p.g.context.scale(x, y);
};

p.g.shear = function(x, y) {
    p.g.context.transform(1, x, y, 1, 0, 0);
};

p.g.save = function() {
    p.g.context.save();
};

p.g.restore = function() {
    p.g.context.restore();
};

document.onfullscreenchange = document.onmozfullscreenchange = document.onmsfullscreenchange = document.onwebkitfullscreenchange = function() {
    if (p.g.fullscreen() && typeof(p.g.context.canvas) != undefined) {
        p.g.context.canvas.width = screen.width;
        p.g.context.canvas.height = screen.height;
    }

    if (!p.g.fullscreen() && typeof(p.g.context.canvas) != undefined) {
        p.g.context.canvas.width = pancake.canvas.compatible_width;
        p.g.context.canvas.height = pancake.canvas.compatible_height;
    }
};

p.g.shadow = function(c, b) {
    p.g.context.shadowColor = c;
    p.g.context.shadowBlur = b;
};