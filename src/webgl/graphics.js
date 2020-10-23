p.g = {};
p.g.r = {};
p.images = [];
p.g.ANTIALIASING_LOW = "low";
p.g.ANTIALIASING_MEDIUM = "medium";
p.g.ANTIALIASING_HIGH = "high";
p.g.FILL = "fill";
p.g.STROKE = "line";
p.g.BOTH = "both";
p.g.antialias = true;
p.g.texture = false;
p.g.animation = false;
p.g.p = undefined;
p.g.context = undefined;
p.g.c = undefined;
p.g.ca = undefined;
p.g.ctx2d = undefined;
p.g.ctx2d_enabled = true;
p.g.alpha = 1;
p.g.fillColor = [0, 0, 0, p.g.alpha];
p.g.strokeColor = [0, 0, 0, p.g.alpha];
p.g.pr = undefined;
p.g.a = undefined;
p.g.mode = p.g.FILL;
p.g.texBuffer = undefined;
p.g.texRect = undefined;
p.g.vidBuffer = undefined;
p.g.vidRect = undefined;

p.g.canvas2d = function() {
    if (p.g.ctx2d_enabled) {
        var _ = document.createElement("canvas");
        _.width = p.g.c.canvas.width;
        _.height = p.g.c.canvas.height;
        _.style.position = "absolute";
        _.style.zIndex = -1;
        _.style.left = "8px";
        _.style.top = "8px";
        document.body.appendChild(_);
        return _.getContext("2d");
    }
};

p.g.colorToCanvas = function(c) {
    if (p.g.ctx2d_enabled) return "rgba(" + (c[0] * 255) + "," + (c[1] * 255) + "," + (c[2] * 255) + "," + (c[3] * 255) + ")";
};

p.g.emptyTexture = function() {
  var _ = p.g.c.createTexture();
  p.g.c.bindTexture(p.g.c.TEXTURE_2D, _);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_WRAP_S, p.g.c.CLAMP_TO_EDGE);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_WRAP_T, p.g.c.CLAMP_TO_EDGE);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_MIN_FILTER, p.g.c.NEAREST);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_MAG_FILTER, p.g.c.NEAREST);
  p.g.c.texImage2D(p.g.c.TEXTURE_2D, 0, p.g.c.RGBA, 1, 1, 0, p.g.c.RGBA, p.g.c.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
  return _;
};

p.g.rectBuffer = function(x, y, w, h) {
    p.g.texture = false;
    p.g.animation = false;
    p.g.a = 4;
    p.g.p = (p.g.mode == p.g.FILL) ? p.g.c.TRIANGLE_FAN : p.g.c.LINE_LOOP;
    return [
        x, y,
        x + w, y,
        x + w, y + h,
        x, y + h
    ];
};

p.g.squareBuffer = function(x, y, s) {
    p.g.texture = false;
    p.g.animation = false;
    p.g.a = 4;
    p.g.p = (p.g.mode == p.g.FILL) ? p.g.c.TRIANGLE_FAN : p.g.c.LINE_LOOP;
    return [
        x, y,
        x + s, y,
        x + s, y + s,
        x, y + s
    ];
};

p.g.lineBuffer = function(x1, y1, x2, y2) {
    p.g.texture = false;
    p.g.animation = false;
    p.g.a = 2;
    p.g.p = p.g.c.LINES;
    return [
        x1, y1,
        x2, y2
    ];
};

p.g.triangleBuffer = function(x1, y1, x2, y2, x3, y3) {
    p.g.texture = false;
    p.g.animation = false;
    p.g.a = 3;
    p.g.p = (p.g.mode == p.g.FILL) ? p.g.c.TRIANGLES : p.g.c.LINE_LOOP;
    return [
        x1, y1,
        x2, y2,
        x3, y3
    ];
};

p.g.pointBuffer = function(x, y) {
    p.g.texture = false;
    p.g.animation = false;
    p.g.a = 1;
    p.g.p = p.g.c.POINTS;
    return [ x, y ];
};

// For filled circles
// https://stackoverflow.com/a/1237519/10896648
// For stroked circles
// https://stackoverflow.com/questions/47671374/fill-a-drawed-circle-with-the-midpoint-algorithm-in-c-infinite-loop
p.g.circleBuffer = function(x, y, r) {
    p.g.texture = false;
    p.g.animation = false;
    p.g.p = p.g.c.POINTS;
    var cp = [];
    if (p.g.mode == p.g.FILL) {
        for(var y1 = -r; y1 <= r; y1++) {
            for(var x1 = -r; x1 <= r; x1++) {
                if(x1 * x1 + y1 * y1 <= r * r) {
                    cp.push(x + x1, y + y1);
                }
            }
        }
    } else if (p.g.mode == p.g.STROKE) {
        r = r + 2;
        var x1 = r - 1;
        var y1 = 0;
        var dx = 1;
        var dy = 1;
        var err = dx - (r << 1);
        
        while (x1 >= y1) {
            cp.push(x + x1, y + y1);
            cp.push(x + y1, y + x1);
            cp.push(x - y1, y + x1);
            cp.push(x - x1, y + y1);
            cp.push(x - x1, y - y1);
            cp.push(x - y1, y - x1);
            cp.push(x + y1, y - x1);
            cp.push(x + x1, y - y1);

            if (err <= 0)
            {
                y1++;
                err += dy;
                dy += 2;
            }

            if (err > 0)
            {
                x1--;
                dx += 2;
                err += dx - (r << 1);
            }
        }
    }
    p.g.a = cp.length / 2;
    return cp;
};

p.g.videoBuffer = function(x, y, w, h) {
    p.g.texture = false;
    p.g.animation = true;
    p.g.a = 6;
    p.g.p = p.g.c.TRIANGLES;
    var x1 = x;
    var x2 = x + w;
    var y1 = y;
    var y2 = y + h;
    p.g.vidBuffer = p.g.loadBuffer([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
    ]);
    p.g.vidRect = p.g.loadBuffer([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2,
    ]);
};

p.g.loadBuffer = function(v) {
    var _ = p.g.c.createBuffer();
    p.g.c.bindBuffer(p.g.c.ARRAY_BUFFER, _);
    p.g.c.bufferData(p.g.c.ARRAY_BUFFER, new Float32Array(v), p.g.c.STATIC_DRAW);
    p.g.c.bindBuffer(p.g.c.ARRAY_BUFFER, null);
    return _;
};

p.g.imageBuffer = function(x, y, w, h) {
    p.g.texture = true;
    p.g.animation = false;
    p.g.a = 6;
    p.g.p = p.g.c.TRIANGLES;
    var x1 = x;
    var x2 = x + w;
    var y1 = y;
    var y2 = y + h;
    p.g.texBuffer = p.g.loadBuffer([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
    ]);
    p.g.texRect = p.g.loadBuffer([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2,
    ]);
};

p.g.enableVertexAttribute = function(l, b, s) {
    p.g.c.bindBuffer(p.g.c.ARRAY_BUFFER, b);
    var _ = p.g.c.getAttribLocation(p.g.pr, l);
    p.g.c.vertexAttribPointer(_, s, p.g.c.FLOAT, false, 0, 0);
    p.g.c.enableVertexAttribArray(_);
    return _;
};

p.g.renderBuffer = function(b) {
    p.g.c.uniform1i(p.g.c.getUniformLocation(p.g.pr, "u_mode"), 1);
    p.g.enableVertexAttribute("a_position", b, 2);
    if (p.g.texture) {
        p.g.c.uniform1i(p.g.c.getUniformLocation(p.g.pr, "u_mode"), 2);
        p.g.enableVertexAttribute("a_texCoord", p.g.texBuffer, 2);
    }
    if (p.g.animation) {
        p.g.c.uniform1i(p.g.c.getUniformLocation(p.g.pr, "u_mode"), 2);
        p.g.enableVertexAttribute("a_texCoord", p.g.vidBuffer, 2);
    }
    p.g.c.drawArrays(p.g.p, 0, p.g.a);
    p.g.c.uniform1i(p.g.c.getUniformLocation(p.g.pr, "u_mode"), 1);
};

p.g.r.alpha = function() {
    return Math.random();
};

p.g.program = function(v, f) {
    var _ = p.g.c.createShader(p.g.c.VERTEX_SHADER);
    p.g.c.shaderSource(_, v);
    p.g.c.compileShader(_);
    var __ = p.g.c.createShader(p.g.c.FRAGMENT_SHADER);
    p.g.c.shaderSource(__, f);
    p.g.c.compileShader(__);
    var ___ = p.g.c.createProgram();
    p.g.c.attachShader(___, _);
    p.g.c.attachShader(___, __);
    p.g.c.linkProgram(___);
    p.g.c.useProgram(___);
    p.g.c.deleteShader(_);
    p.g.c.deleteShader(__);
    p.g.c.deleteProgram(___);
    return ___;
};

p.g.r.RGB = function() {
    return [Math.random(), Math.random(), Math.random(), p.g.alpha];
};

p.g.r.RGBA = function() {
    return [Math.random(), Math.random(), Math.random(), Math.random()];
};

p.g.r.HSL = function() {
    return [Math.floor(Math.random() * 361), Math.random(), Math.random(), p.g.alpha];
};

p.g.r.HSLA = function() {
    return [Math.floor(Math.random() * 361), Math.random(), Math.random(), Math.random()];
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
    if (p.g.c) {
        p.g.pr = p.g.program(
        // VERTEX SHADER
        "attribute vec2 a_position;\n" +
        "attribute vec2 a_texCoord;\n" +
        "uniform vec2 u_translation;\n" +
        "uniform vec2 u_resolution;\n" +
        "uniform vec2 u_rotation; \n" +
        "uniform vec2 u_scale;\n" +
        "varying vec2 v_texCoord;\n" +
        "void main() {\n" +
        "    vec2 scaledPosition = a_position * u_scale;\n" +
        "    vec2 rotatedPosition = vec2(scaledPosition.x * u_rotation.y + scaledPosition.y * u_rotation.x, scaledPosition.y * u_rotation.y - scaledPosition.x * u_rotation.x);\n" +
        "    vec2 position = rotatedPosition + u_translation;\n" +
        "    vec2 zeroToOne = position / u_resolution;\n" +
        "    vec2 zeroToTwo = zeroToOne * 2.0;\n" +
        "    vec2 clipSpace = zeroToTwo - 1.0;\n" +
        "    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n" +
        "    v_texCoord = a_texCoord;\n" +
        "}\n",

        // FRAGMENT SHADER
        "precision mediump float;\n" +
        "uniform sampler2D u_image;\n" +
        "uniform vec4 u_color;\n" +
        "uniform int u_mode;\n" +
        "varying vec2 v_texCoord;\n" +
        "void main(void) {\n" +
        "    if (u_mode == 1) { gl_FragColor = u_color; }\n" +
        "    if (u_mode == 2) { gl_FragColor = texture2D(u_image, v_texCoord); }\n" +
        "    if (u_mode == 3) { gl_FragColor = u_color + texture2D(u_image, v_texCoord); }\n" +
        "}\n");

        // SET DEFAULTS...
        p.g.c.uniform1i(p.g.c.getUniformLocation(p.g.pr, "u_mode"), 1);
        p.g.c.uniform4f(p.g.c.getUniformLocation(p.g.pr, "u_color"), 0, 0, 0, p.g.alpha);
	    p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_resolution"), p.g.c.canvas.width, p.g.c.canvas.height);
	    p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_translation"), 0, 0);
	    p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_rotation"), 0, 1);
        p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_scale"), 1, 1);
        if (p.g.ctx2d_enabled) p.g.ctx2d = p.g.canvas2d();
    }
};

p.g.setLineWidth = function(w) {
    if (!(w > 1)) p.g.c.lineWidth(w);
    if (p.g.ctx2d_enabled) p.g.ctx2d.lineWidth = w;
};

p.g.RGB = function(r, g, b) {
    return [r / 255, g / 255, b / 255, 1];
};

p.g.RGBA = function(r, g, b, a) {
    return [r / 255, g / 255, b / 255, a / 255];
};

// https://convertingcolors.com/blog/article/convert_hex_to_rgb_with_javascript.html
p.g.HEX2RGB = function(h){
  if (h.length != 6){
      return [ 0, 0, 0, 0 ];
  }

  var aRgbHex = h.match(/.{1,2}/g);
  var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];
  return aRgb;
}

// https://gist.github.com/mjackson/5311256#file-color-conversion-algorithms-js-L36
p.g.HSL2RGB = function(h, s, l) {
    var r, g, b;
  
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [ r * 255, g * 255, b * 255, 1 ];
};

p.g.HSL2RGBA = function(h, s, l) {
    var r, g, b, a;
  
    if (s == 0) {
      r = g = b = a = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [ r * 255, g * 255, b * 255, (a >= 0 && a <= 1) ? a * 255 : 255 ];
};

p.g.HEX = function(h) {
  return p.g.RGB(p.g.HEX2RGB(h)[0], p.g.HEX2RGB(h)[1], p.g.HEX2RGB(h)[2]);
};

p.g.HSL = function(h, s, l) {
    return p.g.RGB(p.g.HSL2RGB(h / 360, s, l)[0], p.g.HSL2RGB(h / 360, s, l)[1], p.g.HSL2RGB(h / 360, s, l)[2]);
};

p.g.HSLA = function(h, s, l, a) {
    return p.g.RGB(p.g.HSL2RGB(h / 360, s, l)[0], p.g.HSL2RGB(h / 360, s, l)[1], p.g.HSL2RGB(h / 360, s, l)[2], (a >= 0 && a <= 1) ? a : 1);
};

p.g.color = function(f, s) {
    f[3] = f[3] || p.g.alpha;
    p.g.fillColor = [f[0], f[1], f[2], f[3]];
    if (p.g.ctx2d_enabled) p.g.ctx2d.fillStyle = p.g.colorToCanvas(p.g.fillColor);
    if (s != undefined) {
        s[3] = s[3] || p.g.alpha;
        p.g.strokeColor = [s[0], s[1], s[2], s[3]];
        if (p.g.ctx2d_enabled) p.g.ctx2d.strokeStyle = p.g.colorToCanvas(p.g.strokeColor);
    } else {
        p.g.strokeColor = [0, 0, 0, p.g.alpha];
        if (p.g.ctx2d_enabled) p.g.ctx2d.strokeStyle = p.g.colorToCanvas(p.g.strokeColor);
    }
};

p.g.useColor = function(c) {
    p.g.c.uniform4f(p.g.c.getUniformLocation(p.g.pr, "u_color"), c[0], c[1], c[2], c[3]);
};

p.g.setBackgroundColor = function(c) {
    p.g.ca.style.backgroundColor = c;
};

p.g.setBackgroundImage = function(src) {
    p.g.ca.style.backgroundImage = "url(" + src + ")";
    p.g.ca.style.backgroundSize = (p.g.ca.width + "px " + p.g.ca.height + "px");
};

p.g.enableAttribute = function(p, l, b) {
    if (p.g.c) {
        p.g.c.bindBuffer(p.g.c.ARRAY_BUFFER, b);
        var _ = p.g.c.getAttribLocation(p, l);
        p.g.c.vertexAttribPointer(a, 2, p.g.c.FLOAT, false, 0, 0);
        p.g.c.enableVertexAttribArray(_);
        return _;
    }
};

p.g.fit = function(c, m) {
    m = m || 1;
    var width  = c.clientWidth  * m | 0;
    var height = c.clientHeight * m | 0;
    if (c.width !== width || c.height !== height) {
      c.width  = width;
      c.height = height;
      return true;
    }
    return false;
};

p.g.clear = function() {
    p.g.c.viewport(0, 0, p.g.c.canvas.width, p.g.c.canvas.height);
    p.g.fit(p.g.c.canvas);
    p.g.c.clear(p.g.c.COLOR_BUFFER_BIT | p.g.c.DEPTH_BUFFER_BIT);
    if (p.g.ctx2d_enabled) p.g.ctx2d.clearRect(0, 0, p.g.ctx2d.canvas.width, p.g.ctx2d.canvas.height);
};

p.g.roundedRect = function(x, y, w, h, r) {
    p.g.ctx2d.beginPath();
    p.g.ctx2d.moveTo(x + r, y);
    p.g.ctx2d.lineTo(x + w - r, y);
    p.g.ctx2d.quadraticCurveTo(x + w, y, x + w, y + r);
    p.g.ctx2d.lineTo(x + w, y + h - r);
    p.g.ctx2d.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    p.g.ctx2d.lineTo(x + r, y + h);
    p.g.ctx2d.quadraticCurveTo(x, y + h, x, y + h - r);
    p.g.ctx2d.lineTo(x, y + r);
    p.g.ctx2d.quadraticCurveTo(x, y, x + r, y);
    p.g.ctx2d.closePath();
    if (p.g.mode == p.g.FILL) p.g.ctx2d.fill();
    if (p.g.mode == p.g.STROKE) p.g.ctx2d.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.ctx2d.fill();
        p.g.ctx2d.stroke();
    }
};

p.g.gradientRect = function(x, y, w, h, content) {
    var linear = p.g.ctx2d.createLinearGradient(x, y, w, h);
    for(var loopdlg = 0; loopdlg < content.length; loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
    p.g.color(linear, linear);
    if (p.g.mode == p.g.FILL) p.g.ctx2d.fillRect(x, y, w, h);
	if (p.g.mode == p.g.STROKE) p.g.ctx2d.strokeRect(x, y, w, h);
	if (p.g.mode == p.g.BOTH)
	{
        p.g.ctx2d.fillRect(x, y, w, h);
		p.g.ctx2d.strokeRect(x, y, w, h);
	}
};

p.g.text = function(t, x, y) {
    if (p.g.ctx2d_enabled) {
        if (p.g.mode == p.g.FILL) p.g.ctx2d.fillText(t, x, y);
        if (p.g.mode == p.g.STROKE) p.g.ctx2d.strokeText(t, x, y);
        if (p.g.mode == p.g.BOTH) {
            p.g.ctx2d.fillText(t, x, y);
            p.g.ctx2d.strokeText(t, x, y);
        }
    }
};

p.g.ellipse = function(x, y, rx, ry, rot, sa, ea, a) {
    p.g.ctx2d.beginPath();
    p.g.ctx2d.ellipse(x, y, rx, ry, rot, sa, ea, a);
    p.g.ctx2d.closePath();
    if (p.g.mode == p.g.FILL) p.g.ctx2d.fill();
    if (p.g.mode == p.g.STROKE) p.g.ctx2d.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.ctx2d.fill();
        p.g.ctx2d.stroke();
    }
};

p.g.polygon = function(po) {
    p.g.ctx2d.beginPath();
    p.g.ctx2d.moveTo(po[0][0], po[0][1]);
    for (var i = 0; i < po.length; i++) p.g.ctx2d.lineTo(po[i][0], po[i][1]);
    p.g.ctx2d.closePath();
    if (p.g.mode == p.g.FILL) p.g.ctx2d.fill();
    if (p.g.mode == p.g.STROKE) p.g.ctx2d.stroke();
    if (p.g.mode == p.g.BOTH) {
        p.g.ctx2d.fill();
        p.g.ctx2d.stroke(); 
    }
};

p.g.setFont = function(f, s) {
    if (p.g.ctx2d_enabled) p.g.ctx2d.font = (s + "px " + f).toString();
};

p.g.shadow = function(c, b) {
    if (p.g.ctx2d_enabled) {
        p.g.ctx2d.shadowColor = c;
        p.g.ctx2d.shadowBlur = b;
    }
};

p.g.setAlpha = function(a) {
    if (!(a > 1) && (a <= 1)) p.g.alpha = a;
    if (p.g.ctx2d_enabled) p.g.ctx2d.globalAlpha = a;
};

p.g.setTextAlignment = function(a) {
    if (p.g.ctx2d_enabled) p.g.ctx2d.textAlign = a;
};

p.g.square = function(x, y, s) {
    if (p.g.mode == p.g.BOTH) {
        p.g.mode = p.g.FILL;
        p.g.useColor(p.g.fillColor);
        var _ = p.g.loadBuffer(p.g.squareBuffer(x, y, s));
        p.g.renderBuffer(_);
        p.g.mode = p.g.STROKE;
        p.g.useColor(p.g.strokeColor);
        var _ = p.g.loadBuffer(p.g.squareBuffer(x, y, s));
        p.g.renderBuffer(_);
        p.g.mode = p.g.BOTH;
        return;
    }
    if (p.g.mode == p.g.FILL) p.g.useColor(p.g.fillColor);
    if (p.g.mode == p.g.STROKE) p.g.useColor(p.g.strokeColor);
    var _ = p.g.loadBuffer(p.g.squareBuffer(x, y, s));
    p.g.renderBuffer(_);
};

p.g.point = p.g.pixel = function(x, y) {
    var _ = p.g.loadBuffer(p.g.pointBuffer(x, y));
    p.g.renderBuffer(_);
};

p.g.rect = function(x, y, w, h) {
    if (p.g.mode == p.g.BOTH) {
        p.g.mode = p.g.FILL;
        p.g.useColor(p.g.fillColor);
        var _ = p.g.loadBuffer(p.g.rectBuffer(x, y, w, h));
        p.g.renderBuffer(_);
        p.g.mode = p.g.STROKE;
        p.g.useColor(p.g.strokeColor);
        var _ = p.g.loadBuffer(p.g.rectBuffer(x, y, w, h));
        p.g.renderBuffer(_);
        p.g.mode = p.g.BOTH;
        return;
    }
    if (p.g.mode == p.g.FILL) p.g.useColor(p.g.fillColor);
    if (p.g.mode == p.g.STROKE) p.g.useColor(p.g.strokeColor);
    var _ = p.g.loadBuffer(p.g.rectBuffer(x, y, w, h));
    p.g.renderBuffer(_);
};

p.g.circle = function(x, y, r) {
    if (p.g.mode == p.g.BOTH) {
        p.g.mode = p.g.FILL;
        p.g.useColor(p.g.fillColor);
        var _ = p.g.loadBuffer(p.g.circleBuffer(x, y, r));
        p.g.renderBuffer(_);
        p.g.mode = p.g.STROKE;
        p.g.useColor(p.g.strokeColor);
        var _ = p.g.loadBuffer(p.g.circleBuffer(x, y, r));
        p.g.renderBuffer(_);
        p.g.mode = p.g.BOTH;
        return;
    }
    if (p.g.mode == p.g.FILL) p.g.useColor(p.g.fillColor);
    if (p.g.mode == p.g.STROKE) p.g.useColor(p.g.strokeColor);
    var _ = p.g.loadBuffer(p.g.circleBuffer(x, y, r));
    p.g.renderBuffer(_);
};

p.g.line = function(x1, y1, x2, y2) {
    var _ = p.g.loadBuffer(p.g.lineBuffer(x1, y1, x2, y2));
    p.g.renderBuffer(_);
};

p.g.triangle = function(x1, y1, x2, y2, x3, y3) {
    if (p.g.mode == p.g.BOTH) {
        p.g.mode = p.g.FILL;
        p.g.useColor(p.g.fillColor);
        var _ = p.g.loadBuffer(p.g.triangleBuffer(x1, y1, x2, y2, x3, y3));
        p.g.renderBuffer(_);
        p.g.mode = p.g.STROKE;
        p.g.useColor(p.g.strokeColor);
        var _ = p.g.loadBuffer(p.g.triangleBuffer(x1, y1, x2, y2, x3, y3));
        p.g.renderBuffer(_);
        p.g.mode = p.g.BOTH;
        return;
    }
    if (p.g.mode == p.g.FILL) p.g.useColor(p.g.fillColor);
    if (p.g.mode ==p.g.STROKE) p.g.useColor(p.g.strokeColor);
    var _ = p.g.loadBuffer(p.g.triangleBuffer(x1, y1, x2, y2, x3, y3));
    p.g.renderBuffer(_);
};

p.g.loadImage = function(src, i) {
    p.images[i] = new Image();
    p.images[i].src = src;
};

p.g.loadImageFromElement = function(e, i) {
    p.images[i] = new Image();
    p.images[i].src = e.src;
};

p.g.image = function(i, x, y, w, h) {
  p.g.imageBuffer(x, y, w, h);
  var _ = p.g.c.createTexture();
  p.g.c.bindTexture(p.g.c.TEXTURE_2D, _);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_WRAP_S, p.g.c.CLAMP_TO_EDGE);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_WRAP_T, p.g.c.CLAMP_TO_EDGE);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_MIN_FILTER, p.g.c.NEAREST);
  p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_MAG_FILTER, p.g.c.NEAREST);
  p.g.c.texImage2D(p.g.c.TEXTURE_2D, 0, p.g.c.RGBA, p.g.c.RGBA, p.g.c.UNSIGNED_BYTE, i);
  p.g.renderBuffer(p.g.texRect);
};

p.g.imageFromIndex = function(i, x, y, w, h) {
    p.g.imageBuffer(x, y, w, h);
    var _ = p.g.c.createTexture();
    p.g.c.bindTexture(p.g.c.TEXTURE_2D, _);
    p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_WRAP_S, p.g.c.CLAMP_TO_EDGE);
    p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_WRAP_T, p.g.c.CLAMP_TO_EDGE);
    p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_MIN_FILTER, p.g.c.NEAREST);
    p.g.c.texParameteri(p.g.c.TEXTURE_2D, p.g.c.TEXTURE_MAG_FILTER, p.g.c.NEAREST);
    p.g.c.texImage2D(p.g.c.TEXTURE_2D, 0, p.g.c.RGBA, p.g.c.RGBA, p.g.c.UNSIGNED_BYTE, p.images[i]);
    p.g.renderBuffer(p.g.texRect);
};

p.g.useFilters = function(f, v) {
    for (var i = 0; i < f.length; i++) p.g.ca.style.filter += (" " + f[i] + "(" + v[i] + ") ").toString();
};

p.g.addFilter = function(f, v) {
    p.g.content.canvas.style.filter += (" " + f + "(" + v + ") ").toString();
};

p.g.clearFilters = function() {
    p.g.ca.style.filter = "none";
};

p.g.erase = function(x, y, w, h) {
    p.g.c.enable(p.g.c.SCISSOR_TEST);
    p.g.c.scissor(x, y, w, h);
    p.g.c.clear(p.g.c.COLOR_BUFFER_BIT);
    p.g.c.disable(p.g.c.SCISSOR_TEST);
    if (p.g.ctx2d_enabled) p.g.ctx2d.clearRect(x, y, w, h);
};

p.g.canvasToImage = function(c) {
    if (p.d.unknown(c)) c = 0;
    return pancake.canvases[c].toDataURL();
};

p.g.screenshot = function(c) {
    if (p.d.unknown(c)) c = 0;
    w.open(p.canvases[c].toDataURL());
};

p.g.grid = function(s) {
    var prev = p.g.mode;
    p.g.mode = p.g.STROKE;
    var grid_loop_width = p.g.ca.width / s, grid_loop_height = p.g.ca.height / s;
	var x = 0,y = 0;
	for(var i = 0; i < grid_loop_height; i++)
	{
		for(z = 0; z < grid_loop_width; z++)
		{
            p.g.rect(x, y, s, s);
            p.g.rect(x + s, y, s, s);
            x = x + s;
		}
		x = 0, y = y + s;
    }
    p.g.mode = prev;
};

p.g.setContext = function(c, i) {
    p.g.context = c;
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
    p.con.set(c, i);
};

p.g.save = function() {
    if (p.g.ctx2d_enabled) p.g.ctx2d.save();
};

p.g.restore = function() {
    if (p.g.ctx2d_enabled) p.g.ctx2d.restore();
};

p.g.setAntialiasing = function(e, q) {
    p.g.antialias = e;
    if (p.g.ctx2d_enabled) {
        p.g.imageSmoothingEnabled = e;
        p.g.imageSmoothingQuality = q || "low";
    }
};

p.g.translate = function(x, y) {
    p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_translation"), x, y);
    if (p.g.ctx2d_enabled) p.g.ctx2d.translate(x, y);
};

p.g.rotate = function(x, y) {
    p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_rotation"), x, y);
    if (p.g.ctx2d_enabled) p.g.ctx2d.rotate(x);
};

p.g.scale = function(x, y) {
    p.g.c.uniform2f(p.g.c.getUniformLocation(p.g.pr, "u_scale"), x, y);
    if (p.g.ctx2d_enabled) p.g.ctx2d.scale(x, y);
};

d.onfullscreenchange = d.onmozfullscreenchange = d.onmsfullscreenchange = d.onwebkitfullscreenchange = function() {
    if (p.g.fullscreen() && typeof(p.g.c.ca) != undefined) {
        p.g.ca.width = sc.width;
        p.g.ca.height = sc.height;
        if (p.g.ctx2d_enabled && typeof(p.g.ctx2d.canvas) != undefined) {
            p.g.ctx2d.canvas.width = sc.width;
            p.g.ctx2d.canvas.height = sc.height;
        }
    }

    if (!p.g.fullscreen() && typeof(p.g.c.ca) != undefined) {
        p.g.ca.width = p.can.compatible_width;
        p.g.ca.height = p.can.compatible_height;
        if (p.g.ctx2d_enabled && typeof(p.g.ctx2d.canvas) != undefined) {
            p.g.ctx2d.canvas.width = p.can.compatible_width;
            p.g.ctx2d.canvas.height = p.can.compatible_height;
        }
    }
};