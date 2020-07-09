pancake.graphics = {};
pancake.graphics.random = {};
pancake.images = [];
pancake.graphics.FILL = "fill";
pancake.graphics.STROKE = "line";
pancake.graphics.BOTH = "both";
pancake.graphics.ANTIALIASING_LOW = "low";
pancake.graphics.ANTIALIASING_MEDIUM = "medium";
pancake.graphics.ANTIALIASING_HIGH = "high";
pancake.graphics.context = undefined;
pancake.graphics.mode = pancake.graphics.FILL;

pancake.graphics.random.alpha = function() {
    return pancake.util.random(1);
};

pancake.graphics.random.RGB = function() {
    return ("rgb(" + pancake.util.random(255) + "," + pancake.util.random(255) + "," + pancake.util.random(255) + ")").toString();
};

pancake.graphics.random.RGBA = function() {
    return ("rgba(" + pancake.util.random(255) + "," + pancake.util.random(255) + "," + pancake.util.random(255) + "," + pancake.util.random(255) + ")").toString();
};

pancake.graphics.random.HSL = function() {
    return ("hsl(" + pancake.util.random(360) + "," + pancake.util.random(100) + "%," + pancake.util.random(100) + "%)").toString();
};

pancake.graphics.random.HSLA = function() {
    return ("hsla(" + pancake.util.random(360) + "," + pancake.util.random(100) + "%," + pancake.util.random(100) + "%," + Math.random() + ")").toString();
};

pancake.graphics.fullscreen = function() {
    return document.fullscreen || document.webkitIsFullScreen || document.mozFullscreen;
};

pancake.graphics.toggleFullscreen = function() {
    var canvas = pancake.graphics.context.canvas;
	if (canvas.requestFullscreen) canvas.requestFullscreen();
    if (canvas.mozRequestFullScreen) canvas.mozRequestFullScreen();
    if (canvas.webkitRequestFullscreen) canvas.webkitRequestFullscreen();
    if (canvas.msRequestFullscreen) canvas.msRequestFullscreen();
};

pancake.graphics.exitFullscreen = function() {
    if (document.exitFullscreen) document.exitFullscreen();
	if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    if (document.msExitFullscreen) document.msExitFullscreen();
    pancake.graphics.context.canvas.width = pancake.canvas.compatible_width;
    pancake.graphics.context.canvas.height = pancake.canvas.compatible_height;
};

pancake.graphics.useContext = function(context_index) {
    pancake.graphics.context = pancake.contexts[context_index];
};

pancake.graphics.setAlpha = function(a) {
    pancake.graphics.context.globalAlpha = a;
};

pancake.graphics.setLineWidth = function(w) {
    pancake.graphics.context.lineWidth = w;
};

pancake.graphics.RGB = function(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
};

pancake.graphics.RGBA = function(r, g, b, a) {
    return "rgb(" + r + "," + g + "," + b + "," + a + ")";
};

pancake.graphics.HSL = function(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
};

pancake.graphics.HSLA = function(h, s, l, a) {
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
};

pancake.graphics.HEX = function(h) {
    return ("#" + h).toString();
};

pancake.graphics.color = function(f, s) {
    if (pancake.debug.unknown(s)) s = "black";
    pancake.graphics.context.fillStyle = f;
    pancake.graphics.context.strokeStyle = s;
};

pancake.graphics.setBackgroundColor = function(color) {
    pancake.graphics.context.canvas.style.backgroundColor = color;
};

pancake.graphics.setBackgroundImage = function(src) {
    pancake.graphics.context.canvas.style.backgroundImage = "url(" + src + ")";
    pancake.graphics.context.canvas.style.backgroundSize = (pancake.graphics.context.canvas.width + "px " + pancake.graphics.context.canvas.height + "px");
};

pancake.graphics.setFont = function(f, s) {
    pancake.graphics.context.font = (s + "px " + f).toString();
};

pancake.graphics.setTextAlignment = function(a) {
    pancake.graphics.context.textAlign = a;
};

pancake.graphics.clear = function() {
    pancake.graphics.context.clearRect(0, 0, pancake.graphics.context.canvas.width, pancake.graphics.context.canvas.height);
};

pancake.graphics.text = function(text, x, y) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillText(text, x, y);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeText(text, x, y);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillText(text, x, y);
        pancake.graphics.context.strokeText(text, x, y);
    }
};

pancake.graphics.rect = function(x, y, w, h) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillRect(x, y, w, h);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeRect(x, y, w, h);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillRect(x, y, w, h);
        pancake.graphics.context.strokeRect(x, y, w, h);
    }
};

pancake.graphics.roundedRect = function(x, y, w, h, r) {
    pancake.graphics.context.beginPath();
    pancake.graphics.context.moveTo(x + r, y);
    pancake.graphics.context.lineTo(x + w - r, y);
    pancake.graphics.context.quadraticCurveTo(x + w, y, x + w, y + r);
    pancake.graphics.context.lineTo(x + w, y + h - r);
    pancake.graphics.context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    pancake.graphics.context.lineTo(x + r, y + h);
    pancake.graphics.context.quadraticCurveTo(x, y + h, x, y + h - r);
    pancake.graphics.context.lineTo(x, y + r);
    pancake.graphics.context.quadraticCurveTo(x, y, x + r, y);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fill();
        pancake.graphics.context.stroke();
    }
};

pancake.graphics.circle = function(x, y, r) {
    pancake.graphics.context.beginPath();
    pancake.graphics.context.arc(x, y, r, 90, 180 * Math.PI);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) { 
            pancake.graphics.context.fill();
            pancake.graphics.context.stroke();
    }
};

pancake.graphics.ellipse = function(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise) {
    pancake.graphics.context.beginPath();
    pancake.graphics.context.ellipse(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fill();
        pancake.graphics.context.stroke();
    }
};

pancake.graphics.line = function(x1, y1, x2, y2, line_width) {
    pancake.graphics.context.lineWidth = line_width;
    pancake.graphics.context.beginPath();
    pancake.graphics.context.moveTo(x1,y1);
    pancake.graphics.context.lineTo(x2,y2);
    pancake.graphics.context.closePath();
    pancake.graphics.context.stroke();
    pancake.graphics.context.lineWidth = 1;
};

pancake.graphics.triangle = function(x1, y1, x2, y2, x3, y3, line_width) {
    pancake.graphics.context.lineWidth = line_width;
    pancake.graphics.context.beginPath();
    pancake.graphics.context.moveTo(x1,y1);
    pancake.graphics.context.lineTo(x2,y2);
    pancake.graphics.context.lineTo(x3,y3);
    pancake.graphics.context.lineTo(x1,y1);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fill();
        pancake.graphics.context.stroke();
    }
    pancake.graphics.context.lineWidth = 1;
};

pancake.graphics.polygon = function(points) {
    pancake.graphics.context.beginPath();
    pancake.graphics.context.moveTo(points[0][0], points[0][1]);
    for (var i = 0; i < points.length; i++) pancake.graphics.context.lineTo(points[i][0], points[i][1]);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fill();
        pancake.graphics.context.stroke(); 
    }
};

pancake.graphics.loadImage = function(src, index) {
    pancake.images[index] = new Image();
    pancake.images[index].src = src;
};

pancake.graphics.loadImageFromDocument = function(elem, index) {
    pancake.images[index] = new Image();
    pancake.images[index].src = elem.src;
};

pancake.graphics.image = function(image, x, y, w, h) {
    pancake.graphics.context.drawImage(image, x, y, w, h);
};

pancake.graphics.imageFromIndex = function(image_index, x, y, w, h) {
    pancake.graphics.context.drawImage(pancake.images[image_index], x, y, w, h);
};

pancake.graphics.useFilters = function(f, v) {
    for (var i = 0;i < f.length;i++) pancake.graphics.context.canvas.style.filter += (" " + f[i] + "(" + v[i] + ") ").toString();
};

pancake.graphics.addFilter = function(f, v) {
    pancake.graphics.content.canvas.style.filter += (" " + f + "(" + v + ") ").toString();
};

pancake.graphics.clearFilters = function() {
    pancake.graphics.context.canvas.style.filter = "none";
};

pancake.graphics.erase = function(x, y, w, h) {
    pancake.graphics.context.clearRect(x, y, w, h);
};

pancake.graphics.canvasToImage = function(canvas_index) {
    if (pancake.debug.unknown(canvas_index)) canvas_index = 0;
    return pancake.canvases[canvas_index].toDataURL();
};

pancake.graphics.screenshot = function(canvas_index) {
    if (pancake.debug.unknown(canvas_index)) canvas_index = 0;
    window.open(pancake.canvases[canvas_index].toDataURL());
};

pancake.graphics.square = function(x, y, size) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillRect(x, y, size, size);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeRect(x, y, size, size);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillRect(x, y, size, size);
        pancake.graphics.context.strokeRect(x, y, size, size);
    }
};

pancake.graphics.pixel = function(x, y) {
    pancake.graphics.context.fillRect(x, y, 1, 1);
};

pancake.graphics.point = function(x, y) {
    pancake.graphics.context.fillCircle(x, y, 1);
};

pancake.graphics.gradientRect = function(x, y, w, h, content) {
    var linear = pancake.graphics.context.createLinearGradient(x, y, w, h);
    for(var loopdlg = 0; loopdlg < content.length; loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
    pancake.graphics.color(linear, linear);
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillRect(x, y, w, h);
	if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeRect(x, y, w, h);
	if (pancake.graphics.mode == pancake.graphics.BOTH)
	{
        pancake.graphics.context.fillRect(x, y, w, h);
		pancake.graphics.context.strokeRect(x, y, w, h);
	}
};

pancake.graphics.grid = function(size) {
    var grid_loop_width = pancake.graphics.context.canvas.width / size,grid_loop_height = pancake.graphics.context.canvas.height / size;
	var x = 0,y = 0;
	for(var i = 0;i < grid_loop_height;i++)
	{
		for(z = 0;z < grid_loop_width;z++)
		{
			pancake.graphics.context.strokeRect(x,y,size,size);
            pancake.graphics.context.strokeRect(x + size,y,size,size);
            x = x + size;
		}
		x = 0,y = y + size;
	}
};

// NOTES: Antialiasing works with images
pancake.graphics.setAntialiasing = function(enable, quality) {
    pancake.graphics.context.imageSmoothingEnabled = enable;
    pancake.graphics.context.imageSmoothingQuality = quality;
};

pancake.graphics.setContext = function(context, context_index) {
    pancake.graphics.context = context;
    pancake.context.set(context, context_index);
};

pancake.graphics.translate = function(x, y) {
    pancake.graphics.context.translate(x, y);
};

pancake.graphics.rotate = function(a) {
    pancake.graphics.context.rotate(a);
};

pancake.graphics.scale = function(x, y) {
    pancake.graphics.context.scale(x, y);
};

pancake.graphics.shear = function(x, y) {
    pancake.graphics.context.transform(1, x, y, 1, 0, 0);
};

pancake.graphics.save = function() {
    pancake.graphics.context.save();
};

pancake.graphics.restore = function() {
    pancake.graphics.context.restore();
};

document.onfullscreenchange = document.onmozfullscreenchange = document.onmsfullscreenchange = document.onwebkitfullscreenchange = function() {
    if (pancake.graphics.fullscreen() && typeof(pancake.graphics.context.canvas) != undefined) {
        pancake.graphics.context.canvas.width = screen.width;
        pancake.graphics.context.canvas.height = screen.height;
    }

    if (!pancake.graphics.fullscreen() && typeof(pancake.graphics.context.canvas) != undefined) {
        pancake.graphics.context.canvas.width = pancake.canvas.compatible_width;
        pancake.graphics.context.canvas.height = pancake.canvas.compatible_height;
    }
};