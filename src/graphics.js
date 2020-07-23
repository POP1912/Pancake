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
p.g.c = undefined;
p.g.ca = undefined;
p.g.mode = p.g.FILL;

p.g.r.alpha = function() {
    return p.u.random(1);
};

p.g.r.RGB = function() {
    return ("rgb(" + p.u.random(255) + "," + p.u.random(255) + "," + p.u.random(255) + ")").toString();
};

p.g.r.RGBA = function() {
    return ("rgba(" + p.u.random(255) + "," + p.u.random(255) + "," + p.u.random(255) + "," + p.u.random(255) + ")").toString();
};

p.g.r.HSL = function() {
    return ("hsl(" + p.u.random(360) + "," + p.u.random(100) + "%," + p.u.random(100) + "%)").toString();
};

p.g.r.HSLA = function() {
    return ("hsla(" + p.u.random(360) + "," + p.u.random(100) + "%," + p.u.random(100) + "%," + Math.random() + ")").toString();
};

p.g.fullscreen = function() {
    return d.fullscreen || d.webkitIsFullScreen || d.mozFullscreen;
};

p.g.toggleFullscreen = function() {
    var canvas = p.g.c.canvas;
	if (canvas.requestFullscreen) canvas.requestFullscreen();
    if (canvas.mozRequestFullScreen) canvas.mozRequestFullScreen();
    if (canvas.webkitRequestFullscreen) canvas.webkitRequestFullscreen();
    if (canvas.msRequestFullscreen) canvas.msRequestFullscreen();
};

p.g.exitFullscreen = function() {
    if (d.exitFullscreen) d.exitFullscreen();
	if (d.mozCancelFullScreen) d.mozCancelFullScreen();
	if (d.webkitExitFullscreen) d.webkitExitFullscreen();
    if (d.msExitFullscreen) d.msExitFullscreen();
    p.g.ca.width = p.can.compatible_width;
    p.g.ca.height = p.can.compatible_height;
};

p.g.useContext = function(context_index) {
    p.g.context = p.contexts[context_index];
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
};

p.g.setAlpha = function(a) {
    p.g.c.globalAlpha = a;
};

p.g.setLineWidth = function(w) {
    p.g.c.lineWidth = w;
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
    if (p.d.unknown(s)) s = "black";
    p.g.c.fillStyle = f;
    p.g.c.strokeStyle = s;
};

p.g.setBackgroundColor = function(c) {
    p.g.ca.style.backgroundColor = c;
};

p.g.setBackgroundImage = function(src) {
    p.g.ca.style.backgroundImage = "url(" + src + ")";
    p.g.ca.style.backgroundSize = (p.g.ca.width + "px " + p.g.ca.height + "px");
};

p.g.setFont = function(f, s) {
    p.g.c.font = (s + "px " + f).toString();
};

p.g.setTextAlignment = function(a) {
    p.g.c.textAlign = a;
};

p.g.clear = function() {
    p.g.c.clearRect(0, 0, p.g.ca.width, p.g.ca.height);
};

p.g.text = function(t, x, y) {
    if (p.g.mode == p.g.FILL) p.g.c.fillText(t, x, y);
    if (p.g.mode == p.g.STROKE) p.g.c.strokeText(t, x, y);
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fillText(t, x, y);
        p.g.c.strokeText(t, x, y);
    }
};

p.g.rect = function(x, y, w, h) {
    if (p.g.mode == p.g.FILL) p.g.c.fillRect(x, y, w, h);
    if (p.g.mode == p.g.STROKE) p.g.c.strokeRect(x, y, w, h);
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fillRect(x, y, w, h);
        p.g.c.strokeRect(x, y, w, h);
    }
};

p.g.roundedRect = function(x, y, w, h, r) {
    p.g.c.beginPath();
    p.g.c.moveTo(x + r, y);
    p.g.c.lineTo(x + w - r, y);
    p.g.c.quadraticCurveTo(x + w, y, x + w, y + r);
    p.g.c.lineTo(x + w, y + h - r);
    p.g.c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    p.g.c.lineTo(x + r, y + h);
    p.g.c.quadraticCurveTo(x, y + h, x, y + h - r);
    p.g.c.lineTo(x, y + r);
    p.g.c.quadraticCurveTo(x, y, x + r, y);
    p.g.c.closePath();
    if (p.g.mode == p.g.FILL) p.g.c.fill();
    if (p.g.mode == p.g.STROKE) p.g.c.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fill();
        p.g.c.stroke();
    }
};

p.g.circle = function(x, y, r) {
    p.g.c.beginPath();
    p.g.c.arc(x, y, r, 90, 180 * Math.PI);
    p.g.c.closePath();
    if (p.g.mode == p.g.FILL) p.g.c.fill();
    if (p.g.mode == p.g.STROKE) p.g.c.stroke();
    if (p.g.mode == p.g.BOTH) { 
            p.g.c.fill();
            p.g.c.stroke();
    }
};

p.g.ellipse = function(x, y, rx, ry, rot, sa, ea, a) {
    p.g.c.beginPath();
    p.g.c.ellipse(x, y, rx, ry, rot, sa, ea, a);
    p.g.c.closePath();
    if (p.g.mode == p.g.FILL) p.g.c.fill();
    if (p.g.mode == p.g.STROKE) p.g.c.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fill();
        p.g.c.stroke();
    }
};

p.g.line = function(x1, y1, x2, y2, lw) {
    p.g.c.lineWidth = lw;
    p.g.c.beginPath();
    p.g.c.moveTo(x1,y1);
    p.g.c.lineTo(x2,y2);
    p.g.c.closePath();
    p.g.c.stroke();
    p.g.c.lineWidth = 1;
};

p.g.triangle = function(x1, y1, x2, y2, x3, y3, lw) {
    p.g.c.lineWidth = lw;
    p.g.c.beginPath();
    p.g.c.moveTo(x1,y1);
    p.g.c.lineTo(x2,y2);
    p.g.c.lineTo(x3,y3);
    p.g.c.lineTo(x1,y1);
    p.g.c.closePath();
    if (p.g.mode == p.g.FILL) p.g.c.fill();
    if (p.g.mode == p.g.STROKE) p.g.c.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fill();
        p.g.c.stroke();
    }
    p.g.c.lineWidth = 1;
};

p.g.polygon = function(po) {
    p.g.c.beginPath();
    p.g.c.moveTo(po[0][0], po[0][1]);
    for (var i = 0; i < po.length; i++) p.g.c.lineTo(po[i][0], po[i][1]);
    p.g.c.closePath();
    if (p.g.mode == p.g.FILL) p.g.fill();
    if (p.g.mode == p.g.STROKE) p.g.c.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fill();
        p.g.c.stroke(); 
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
    p.g.c.drawImage(i, x, y, w, h);
};

p.g.imageFromIndex = function(i, x, y, w, h) {
    p.g.c.drawImage(p.images[i], x, y, w, h);
};

p.g.useFilters = function(f, v) {
    for (var i = 0;i < f.length;i++) p.g.ca.style.filter += (" " + f[i] + "(" + v[i] + ") ").toString();
};

p.g.addFilter = function(f, v) {
    p.g.content.canvas.style.filter += (" " + f + "(" + v + ") ").toString();
};

p.g.clearFilters = function() {
    p.g.ca.style.filter = "none";
};

p.g.erase = function(x, y, w, h) {
    p.g.c.clearRect(x, y, w, h);
};

p.g.canvasToImage = function(c) {
    if (p.d.unknown(c)) c = 0;
    return pancake.canvases[c].toDataURL();
};

p.g.screenshot = function(c) {
    if (p.d.unknown(c)) c = 0;
    w.open(p.canvases[c].toDataURL());
};

p.g.square = function(x, y, s) {
    if (p.g.mode == p.g.FILL) p.g.c.fillRect(x, y, s, s);
    if (p.g.mode == p.g.STROKE) p.g.c.strokeRect(x, y, s, s);
    if (p.g.mode == p.g.BOTH) {
        p.g.c.fillRect(x, y, s, s);
        p.g.c.strokeRect(x, y, s, s);
    }
};

p.g.pixel = function(x, y) {
    p.g.c.fillRect(x, y, 1, 1);
};

p.g.point = function(x, y) {
    p.g.c.fillCircle(x, y, 1);
};

p.g.gradientRect = function(x, y, w, h, content) {
    var linear = p.g.c.createLinearGradient(x, y, w, h);
    for(var loopdlg = 0; loopdlg < content.length; loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
    p.g.color(linear, linear);
    if (p.g.mode == p.g.FILL) p.g.c.fillRect(x, y, w, h);
	if (p.g.mode == p.g.STROKE) p.g.c.strokeRect(x, y, w, h);
	if (p.g.mode == p.g.BOTH)
	{
        p.g.c.fillRect(x, y, w, h);
		p.g.c.strokeRect(x, y, w, h);
	}
};

p.g.grid = function(s) {
    var grid_loop_width = p.g.ca.width / s,grid_loop_height = p.g.ca.height / s;
	var x = 0,y = 0;
	for(var i = 0;i < grid_loop_height;i++)
	{
		for(z = 0;z < grid_loop_width;z++)
		{
			p.g.c.strokeRect(x,y,s,s);
            p.g.c.strokeRect(x + s,y,s,s);
            x = x + s;
		}
		x = 0,y = y + s;
	}
};

// NOTES: Antialiasing works with images
p.g.setAntialiasing = function(e, q) {
    p.g.c.imageSmoothingEnabled = e;
    p.g.c.imageSmoothingQuality = q;
};

p.g.setContext = function(c, i) {
    p.g.context = c;
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
    p.con.set(c, i);
};

p.g.translate = function(x, y) {
    p.g.c.translate(x, y);
};

p.g.rotate = function(a) {
    p.g.c.rotate(a);
};

p.g.scale = function(x, y) {
    p.g.c.scale(x, y);
};

p.g.shear = function(x, y) {
    p.g.c.transform(1, x, y, 1, 0, 0);
};

p.g.save = function() {
    p.g.c.save();
};

p.g.restore = function() {
    p.g.c.restore();
};

d.onfullscreenchange = d.onmozfullscreenchange = d.onmsfullscreenchange = d.onwebkitfullscreenchange = function() {
    if (p.g.fullscreen() && typeof(p.g.c.ca) != undefined) {
        p.g.ca.width = sc.width;
        p.g.ca.height = sc.height;
    }

    if (!p.g.fullscreen() && typeof(p.g.c.ca) != undefined) {
        p.g.ca.width = p.can.compatible_width;
        p.g.ca.height = p.can.compatible_height;
    }
};

p.g.shadow = function(c, b) {
    p.g.c.shadowColor = c;
    p.g.c.shadowBlur = b;
};