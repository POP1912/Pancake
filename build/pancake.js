// Pancake HTML5 game framework
// Copyright (c) 2020 - 2021 Rabia Alhaffar, Licensed under MIT License.
var p = {};
var w = window;
var c = w.console;
var d = w.document;
var n = w.navigator;
var j = w.JSON;
var l = w.location;
var b = d.body;
var sc = w.screen;
var s = w.localStorage;
var m = w.Math;
var ua = n.userAgent;
p.version = "v0.0.12";
c.info("Made with Pancake " + p.version + "\nhttps://github.com/Rabios/Pancake");

p.b = {};
p.b.s = {};
p.b.CHROME = ua.match("Chrome") != null;
p.b.FIREFOX = ua.match("Firefox") != null;
p.b.OPERA = ua.match("OPR") != null;
p.b.SAFARI = ua.match("Safari") != null;
p.b.EDGE = ua.match("Edg") != null;
p.b.IE = ua.match("Trident") != null;
p.b.MAXTHON = ua.match("Maxthon") != null;
p.b.SAMSUNG_INTERNET = ua.match("SamsungBrowser") != null;
p.b.SEAMONKEY = ua.match("SeaMonkey") != null;

p.b.s.WEBGL = function() {
    return (!!(d.createElement("canvas").getContext) && (d.createElement("canvas").getContext("experimental-webgl") || d.createElement("canvas").getContext("webgl"))) != null;
};

p.b.s.CANVAS = function() {
    return (!!(d.createElement("canvas").getContext) && (d.createElement("canvas").getContext("2d"))) != null;
};

p.b.s.MP3 = function() {
    return d.createElement("audio").canPlayType("audio/mp3") != "";
};

p.b.s.MPEG = function() {
    return d.createElement("audio").canPlayType("audio/mpeg") != "";
};

p.b.s.MP4 = function() {
    return d.createElement("video").canPlayType("video/mp4") != "";
};

p.b.s.OGG = function() {
    return d.createElement("audio").canPlayType("audio/ogg") != "";
};

p.b.s.WAV = function() {
    return d.createElement("audio").canPlayType("audio/wav") != "";
};

p.b.s.WEBM = function() {
    return d.createElement("video").canPlayType("video/webm") != "";
};

p.b.s.GAMEPAD = function() {
    return "getGamepads" in n;
};

p.b.open = function(u) {
    w.open(u);
};

p.b.supports = function(s) {
    return p.b.s[s]();
};
p.o = {};
p.o.iOS = ua.match(/iPhone|iPad|iPod|Apple-iPhone/i) != null;
p.o.ANDROID = ua.match(/Android/i) != null;
p.o.OSX = ua.match(/Macintosh|Intel Mac OS X/i) != null;
p.o.WINDOWS = ua.match(/Windows|Windows NT/i) != null;
p.o.WINDOWS_PHONE = ua.match(/Windows Phone/i) != null;
p.o.LINUX = ua.match(/Linux|X11/i) != null;
p.o.UBUNTU = ua.match(/Ubuntu/i) != null;
p.o.PLAYSTATION = ua.match(/PlayStation/i) != null;
p.o.XBOX = ua.match(/Xbox|XBOX_ONE_ED|Xbox One/i) != null;
p.o.BLACKBERRY = ua.match(/Blackberry|BB/i) != null;
p.o.CHROMECAST = ua.match(/CrKey/i) != null;
p.o.CHROME_OS = ua.match(/CrOS/i) != null;
p.o.PS4 = ua.match(/PlayStation 4/i) != null;
p.o.PSVITA = ua.match(/PlayStation Vita/i) != null;
p.o.XBOX_ONE = ua.match(/Xbox One/i) != null;
p.o.XBOX_ONE_S = ua.match(/XBOX_ONE_ED/i) != null;
p.o.NINTENDO = ua.match(/Nintendo/i) != null;
p.o.N3DS = ua.match(/Nintendo 3DS/i) != null;
p.o.WII_U = ua.match(/Nintendo WiiU/i) != null;
p.o.FIRE_TV = ua.match(/AFTS/i) != null;
p.o.ROKU_ULTRA = ua.match(/Roku4640X/i) != null;
p.o.ROKU = ua.match(/Roku/i) != null;
p.o.NEXUS_PLAYER = ua.match(/Nexus Player/i) != null;
p.o.MINIX_NEO_X5 = ua.match(/NEO-X5/i) != null;
p.o.APPLE_TV = ua.match(/AppleTV/i) != null;
p.o.KINDLE = ua.match(/Kindle/i) != null;

p.u = {};

p.u.random = function(a) {
    return m.floor(m.random() * a);
};

// @see https://stackoverflow.com/a/1527820/2124254
p.u.randomBetween = function(a, b) {
    return m.floor(m.random() * (b - a)) + a;
};

p.u.quote = function(s) {
    return j.stringify(s);
};

p.d = {};

p.d.unknown = function(v) {
    return ((v == undefined) || (v == null) || (v == NaN));
};

p.d.redefine = function(v, val) {
    if ((v == undefined) || (v == null) || (v == NaN)) v = val;
};

p.d.type = function(v) {
    return typeof(v);
};

p.ga = {};

p.ga.title = function(t) {
    d.title = t;
};

p.ga.restart = function() {
    l.reload();
};

// https://stackoverflow.com/questions/12297525/exit-from-app-when-click-button-in-android-phonegap
p.ga.close = function() {
    if (n.app) {
        n.app.exitApp();
    } else if (n.device) {
        n.device.exitApp();
    } else {
        w.close();
    }
}
p.can = {};
p.canvases = [];
p.can.compatible_width = w.innerWidth - 20;
p.can.compatible_height = w.innerHeight - 20;

p.can.create = function(w, h, c) {
    p.canvases[c] = d.createElement("canvas");
    p.canvases[c].width = w;
    p.canvases[c].height = h;
    b.appendChild(p.canvases[c]);
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

// Rewritten by Rabia Alhaffar in 9/February/2020
p.con = {};
p.contexts = [];

p.con.create = function(c, co) {
    p.contexts[co] = p.canvases[c].getContext("2d");
};

p.con.use = function(c, co) {
    p.contexts[co] = canvas.getContext("2d");
    p.g.useContext(co);
    p.can.set(c, co);
};

p.con.set = function(nco, co) {
    p.contexts[co] = nco;
};
p.de = {};
p.de.screen_height = sc.height;
p.de.screen_width = sc.width;

p.de.vibrate = function(p) {
    n.vibrate(p);
};

p.de.stopVibrating = function() {
    n.vibrate(0);
};

p.i = {};
p.i.latest_key_down = -1;
p.i.latest_key_up = -1;
p.i.latest_key_pressed = -1;
p.i.latest_mouse_button_down = -1;
p.i.latest_mouse_button_up = -1;
p.i.click = false;
p.i.touchdown = false;
p.i.tap = false;
p.i.mouse_x = 0;
p.i.mouse_y = 0;
p.i.touch_x = 0;
p.i.touch_y = 0;
p.i.touch_start_time = 0;
p.i.swipe_start_x = 0;
p.i.swipe_start_y = 0;
p.i.HORIZONTAL_SWIPE_DIRECTION = "";
p.i.VERTICAL_SWIPE_DIRECTION = "";

w.addEventListener("mousedown", function(e) {
    p.i.swipe_start_x = e.clientX || e.pageX;
    p.i.swipe_start_y = e.clientY || e.pageY;
    p.i.touch_start_time = new Date().getTime();
});

w.addEventListener("mouseup", function(e) {
    p.i.mouse_x = e.clientX || e.pageX;
    p.i.mouse_y = e.clientY || e.pageY;
    var swipe_dist_x = (e.clientX || e.pageX) - p.i.swipe_start_x;
    var swipe_dist_y = (e.clientY || e.pageY) - p.i.swipe_start_y;
    var elapsedTime = new Date().getTime() - p.i.touch_start_time;
    if (elapsedTime <= 1000) {
        if (m.abs(swipe_dist_x) >= 100 && m.abs(swipe_dist_y) <= 300) {
            if (swipe_dist_x < 0) p.i.VERTICAL_SWIPE_DIRECTION = "LEFT";
            else p.i.VERTICAL_SWIPE_DIRECTION = "RIGHT";
        }
        else if (m.abs(swipe_dist_y) >= 100 && m.abs(swipe_dist_x) <= 300) {
            if (swipe_dist_y < 0) p.i.HORIZONTAL_SWIPE_DIRECTION = "UP";
            else p.i.HORIZONTAL_SWIPE_DIRECTION = "DOWN";
        }
    }
});

w.addEventListener("mousemove",function(e) {
    p.i.mouse_x = e.clientX || e.pageX;
    p.i.mouse_y = e.clientY || e.pageY;
});

w.addEventListener("touchstart", function(e) {
    p.i.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    p.i.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    p.i.swipe_start_x = e.changedTouches[0].pageX;
    p.i.swipe_start_y = e.changedTouches[0].pageY;
    p.i.tap = true;
    p.i.touch_start_time = new Date().getTime();
    e.preventDefault();
}, false);

w.addEventListener("touchend", function(e) {
    p.i.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    p.i.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    var swipe_dist_x = e.changedTouches[0].pageX - p.i.swipe_start_x;
    var swipe_dist_y = e.changedTouches[0].pageY - p.i.swipe_start_y;
    var elapsedTime = new Date().getTime() - p.i.touch_start_time;
    if (elapsedTime <= 1000) {
        if (m.abs(swipe_dist_x) >= 100 && m.abs(swipe_dist_y) <= 300) {
            if (swipe_dist_x < 0) p.i.VERTICAL_SWIPE_DIRECTION = "LEFT";
            else p.i.VERTICAL_SWIPE_DIRECTION = "RIGHT";
        }
        else if (m.abs(swipe_dist_y) >= 100 && m.abs(swipe_dist_x) <= 300) {
            if (swipe_dist_y < 0) p.i.HORIZONTAL_SWIPE_DIRECTION = "UP";
            else p.i.HORIZONTAL_SWIPE_DIRECTION = "DOWN";
            e.preventDefault();
        }
    }
    p.i.tap = true;
    e.preventDefault();
}, false);

w.addEventListener("touchcancel", function(e) {
    p.i.tap = false;
    e.preventDefault();
}, false);

w.addEventListener("touchmove", function(e) {
    p.i.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    p.i.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    p.i.touchdown = true;
    e.preventDefault();
}, false);

w.addEventListener("click", function() {
    p.i.click = true;
});

w.addEventListener("mousedown", function(e) {
    p.i.latest_mouse_button_down = e.button;
    p.i.click = false;
});

w.addEventListener("mouseup", function(e) {
    p.i.latest_mouse_button_up = e.button;
    p.i.click = false;
});

w.addEventListener("keydown", function(e) {
    p.i.latest_key_down = e.which || e.keyCode;
});

w.addEventListener("keyup", function(e) {
    p.i.latest_key_up = e.which || e.keyCode;
});

w.addEventListener("keypress", function(e) {
    p.i.latest_key_pressed = e.which || e.keyCode;
});

p.i.mousedown = function(b) {
    return p.i.latest_mouse_button_down == b;
};

p.i.mouseup = function(b) {
    return p.i.latest_mouse_button_up == b;
};

p.i.swipe = function(direction) {
    return (p.i.HORIZONTAL_SWIPE_DIRECTION == direction || p.i.VERTICAL_SWIPE_DIRECTION == direction);
};

p.i.keydown = function(k) {
    return p.i.latest_key_down == k;
};

p.i.keyup = function(k) {
    return p.i.latest_key_up == k;
};

p.i.keypress = function(k) {
    return p.i.latest_key_pressed == k;
};

p.i.hideCursor = function(i) {
    pancake.canvases[i].style.cursor = "none";
};

p.i.showCursor = function(i) {
    pancake.canvases[i].style.cursor = "auto";
};

p.i.lockPointer = function() {
    if (p.g.context.canvas.requestPointerLock) p.g.context.canvas.requestPointerLock();
    if (d.pointerLockElement === p.g.context.canvas) p.g.context.canvas.requestPointerLock();
};

p.i.unlockPointer = function() {
    d.exitPointerLock();
};

if (p.b.s.GAMEPAD()) {
    p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "";
    p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION = "";
    p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "";
    p.i.GAMEPAD_CAMERA_VERTICAL_DIRECTION = "";
    p.i.GAMEPAD_ANALOG_UP = -0.3;
    p.i.GAMEPAD_ANALOG_DOWN = 0.3;
    p.i.GAMEPAD_ANALOG_LEFT = 0.3;
    p.i.GAMEPAD_ANALOG_RIGHT = -0.3;
    p.i.GAMEPAD_MOVE_ANALOG = 1;
    p.i.GAMEPAD_CAMERA_ANALOG = 2;

    p.i.gamepadConnected = function(i) {
        return !(n.getGamepads()[i] == undefined);
    };
    
    p.i.gamepadID = function(i) {
        if (!(n.getGamepads()[i] == undefined)) return n.getGamepads()[i].id;
    };
    
    p.i.gamepadButtonPressed = function(b, i) {
        if (!(n.getGamepads()[i] == undefined)) return n.getGamepads()[i].buttons[b].pressed;
    };
    
    p.i.gamepadButtonTouched = function(b, i) {
        if (!(n.getGamepads()[i] == undefined)) return n.getGamepads()[i].buttons[b].touched;
    };

    p.i.checkMovement = function(i, a, d) {
        if (!(n.getGamepads()[i] == undefined)) {
            if (a == p.i.GAMEPAD_MOVE_ANALOG) {
                if (n.getGamepads()[i].axes[1] <= d) p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "UP";
                if (n.getGamepads()[i].axes[1] >= d) p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "DOWN";
                if (n.getGamepads()[i].axes[0] <= d) p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION = "LEFT";
                if (n.getGamepads()[i].axes[0] >= d) p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION = "RIGHT";
            }
            
            if (a == p.i.GAMEPAD_CAMERA_ANALOG) {
                if (n.getGamepads()[i].axes[3] <= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "UP";
                if (n.getGamepads()[i].axes[3] >= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "DOWN";
                if (n.getGamepads()[i].axes[2] <= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "LEFT";
                if (n.getGamepads()[i].axes[2] >= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "RIGHT";
            }
        }
    };

    p.i.gamepadAnalogMoved = function(i, a, ad, d) {
        p.i.checkMovement(i, a, ad);
        if (a == p.i.GAMEPAD_MOVE_ANALOG) return (p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION == d || p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION == d);
        if (a == p.i.GAMEPAD_CAMERA_ANALOG) return (p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION == d || p.i.GAMEPAD_CAMERA_VERTICAL_DIRECTION == d);
    };
}

p.i.preventLoop = function() {
    p.i.latest_key_down = -1;
    p.i.latest_key_up = -1;
    p.i.latest_key_pressed = -1;
    p.i.latest_mouse_button_down = -1;
    p.i.latest_mouse_button_up = -1;
    p.i.click = false;
    p.i.tap = false;
    p.i.touchdown = false;
    p.i.HORIZONTAL_SWIPE_DIRECTION = "";
    p.i.VERTICAL_SWIPE_DIRECTION = "";
    if (p.b.s.GAMEPAD()) {
        p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "";
        p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION = "";
        p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "";
        p.i.GAMEPAD_CAMERA_VERTICAL_DIRECTION = "";
    }
};

// Keyboard keys,Mouse and gamepad buttons
p.i.key = {
    A: 65, B: 66, C: 67, D: 68,E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77,
    N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
    ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56,
    NINE: 57, UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SPACE: 32, TAB: 9, SHIFT: 16, CONTROL: 17, 
    ALT: 18, BACKSPACE: 8, ENTER: 13, NUMLOCK: 144, OS: 91, UNIDENTIFIED: 0, HOME: 36, PGUP: 33,
    PGDN: 34, CLEAR: 12, DELETE: 46, ESCAPE: 27, INSERT: 45
};

p.i.button = {
    LEFT_MOUSE_BUTTON: 0,RIGHT_MOUSE_BUTTON: 2,MIDDLE_MOUSE_BUTTON: 1,A: 0,B: 1,XBOX_X: 2,
    Y: 3,LB: 4,RB: 5,LT: 6,RT: 7,BACK: 8,START: 9,LEFT_ANALOG_STICK: 10,RIGHT_ANALOG_STICK: 11,
    UP: 12,DOWN: 13,LEFT: 14,RIGHT: 15,PLAYSTATION_X: 0,O: 1,SQUARE: 2,TRIANGLE: 3,L1: 4,R1: 5,L2: 6,R2: 7,
    SELECT: 8
};

p.p = {};
p.p.distance_x = undefined;
p.p.distance_y = undefined;

p.p.checkCollisionRect = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
};

p.p.checkCollisionCircle = function(x1, y1, r1, x2, y2, r2) {
    return (m.sqrt((x1 - x2 * x1 - x2) + (y1 + y2 * y1 + y2)) < r1 + r2);
};

p.p.checkCollisionCircleRect = function(x1, y1, r, x2, y2, w, h) {
    if (m.abs(x1 - x2 - w / 2) > (w / 2 + r) || m.abs(y1 - y2 - h / 2) > (h / 2 + r)) { return false; }
	if (m.abs(x1 - x2 - w / 2) <= (w / 2) || m.abs(y1 - y2 - h / 2) <= (h / 2)) { return true; }
    return (m.abs(x1 - x2 - w / 2) - w / 2 * m.abs(x1 - x2 - w / 2) - w / 2 + m.abs(y1 - y2 - h / 2) - h / 2 * m.abs(y1 - y2 - h / 2) - h / 2 <= m.pow(r,2));
};

p.p.checkCollisionCircleLine = function(x, y, r, fx, fy, tx, ty) {
    var dist;
    var u = ((x - fx) * (tx - fx) + (y - fy) * (ty - fy)) / ((ty - fy) * (ty - fy) + (tx - fx) * (tx - fx));
    if (u >= 0 && u <= 1) dist = m.pow((fx + (tx - fx) * u - x),2) + m.pow((fy + (ty - fy) * u - y),2);
    else {
        if (u < 0) dist = m.pow((fx - x),2) + m.pow((fy - y),2);
        else dist = m.pow((tx - x),2) + m.pow((ty - y),2);
    }
    if (dist < m.pow(r,2)) return true;
};

// Collision with canvas sides
// NOTES: As shape info in array,Here is following bellow
// [ x, y, width, height ] for rectangle
// [ x1, y1, radius, speedX, speedY ] for circle
p.p.checkCollisionLeftCanvas = function(s) {
    if (s.length == 4) return s[0] <= s[2] * 0.5;
    if (s.length == 5) return s[0] + s[3] < s[2];
};

p.p.checkCollisionRightCanvas = function(s, c) {
    if (s.length == 4) return s[0] + s[2] >= p.canvases[c].width + s[2] * 0.5;
    if (s.length == 5) return s[0] + s[3] > p.canvases[c].width - s[2];
};

p.p.checkCollisionTopCanvas = function(s) {
    if (s.length == 4) return s[1] <= s[3] * 0.5;
    if (s.length == 5) return s[1] + s[4] < s[2];
};

p.p.checkCollisionBottomCanvas = function(s, c) {
    if (s.length == 4) return s[1] + s[3] >= p.canvases[c].height + s[3] * 0.5;
    if (s.length == 5) return s[1] + s[4] > p.canvases[c].height - s[2];
};

p.p.distanceBetween = function(x1, y1, x2, y2) {
    return m.hypot(x2 - x1, y2 - y1);
};

// Distance are stored in p.p.distance_x and p.p_distance_y
p.p.getDistance = function(x1, y1, x2, y2) {
    p.p.distance_x = x2 - x1;
    p.p.distance_y = y2 - y1;
};

p.sp = {};
p.sprites = [];
p.sp.timers = [];
p.sp.create = function(im, s) {
    p.sprites[s] = [];
    p.sp.timers[s] = 0;
    for (var i = 0;i < im.length;i++) {
        p.sprites[s][i] = new Image();
        p.sprites[s][i].src = im[i];
    }
};

p.sp.get = function(s) {
    return p.sprites[s];
};

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
    if (p.g.mode == p.g.FILL) p.g.c.fill();
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
// Pancake audio part
// NOTES: To resume playing audio use same play function,Also you can even play music or song
p.a = {};
p.audio_files = [];
var _audio = undefined;

// Play audio from source directly
p.a.play = function(s) {
    _audio = new Audio(s).play();
};

// Load audio to audio files array to play from index using functions below
p.a.load = function(s, a) {
    p.audio_files[a] = new Audio(s);
    p.audio_files[a].loop = false;
    p.audio_files[a].load();

};

p.a.playFromIndex = function(a) {
    p.audio_files[a].play();
    if (p.audio_files[a].loop) p.audio_files[a].play();
};

p.a.pauseFromIndex = function(a) {
    p.audio_files[a].pause();
};

p.a.setVolumeFromIndex = function(v, a) {
    p.audio_files[a].volume = v;
};

p.a.setMuteFromIndex = function(m, a) {
    p.audio_files[a].muted = m;
};

p.a.setLoopFromIndex = function(l, a) {
    p.audio_files[a].loop = l;
};

p.a.finishedPlayingFromIndex = function(a) {
    return p.audio_files[a].ended;
};

p.v = {};
p.videos = [];
var _video = undefined;

p.v.load = function(s, v) {
    p.videos[v] = d.createElement("video");
    p.videos[v].src = s;
    p.videos[v].autoplay = true;
    p.videos[v].loop = false;
    p.videos[v].load();
};

p.v.play = function(v, x, y, w, h) {
    if (p.d.unknown(x)) x = 0;
    if (p.d.unknown(y)) y = 0;
    if (p.d.unknown(w)) w = p.g.context.canvas.width;
    if (p.d.unknown(h)) h = p.g.context.canvas.height;
    if (!p.videos[v].ended) {
        p.g.image(p.videos[v], x, y, w, h);
        p.videos[v].play();
        if (p.videos[v].loop) {
            p.g.image(p.videos[v], x, y, w, h);
            p.videos[v].play();
        }
    }
};

p.v.pause = function(v) {
    p.videos[v].pause();
};

p.v.setVolume = function(vo, v) {
    p.videos[v].volume = vo;
};

p.v.setMute = function(m, v) {
    p.videos[v].muted = m;
};

p.v.setLoop = function(l, v) {
    p.videos[v].loop = l;
};

p.v.finished = function(v) {
    return p.videos[v].ended;
};

p.s = {};
p.scripts = [];

p.s.eval = function(c) {
    w.eval(c);
};

p.s.load = function(src, s) {
    p.scripts[s] = d.createElement("script"); 
    p.scripts[s].src = src; 
    p.scripts[s].type = "text/javascript"; 
    p.scripts[s].defer = true; 
    b.appendChild(p.scripts[s]);
};

p.st = {};
p.st.save = function(v, val) {
    s.setItem(v, val);
};

p.st.load = function(v) {
    return s.getItem(v);
};

p.st.remove = function(v) {
    s.removeItem(v)
};

p.st.clear = function() {
    s.clear();
};

p.t = {};
p.t.f = undefined;

p.t.countdown = function(f, ms) {
    return w.setTimeout(f, ms);
};

p.t.timer = function(f, ms) {
    return w.setInterval(f, 1000 / ms);
};

p.t.pause = function(t) {
    w.clearInterval(t);
};

// Don't judge me,I used that one by Paul Irish
// Sorry if that makes Pancake sucks
w.animate = (function() {
    return  w.requestAnimationFrame       ||
            w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame    ||
            w.msRequestAnimationFrame     ||
            w.oRequestAnimationFrame      ||
            function(callback, fps) {
                w.setTimeout(callback, 1000 / fps);
            };
})();
p.c = {};

p.c.load = function(s) {
    return j.parse(j.stringify(c));
};

var pancake = p;
pancake.audio = p.a;
pancake.canvas = p.can;
pancake.context = p.con;
pancake.game = p.ga;
pancake.graphics = p.g;
pancake.graphics.random = p.g.r;
pancake.browser = p.b;
pancake.browser.support = p.b.s;
pancake.content = pancake.c;
pancake.debug = p.d;
pancake.device = p.de;
pancake.input = p.i;
pancake.os = p.o;
pancake.physics = p.p;
pancake.script = p.s;
pancake.sprite = p.sp;
pancake.storage = p.st;
pancake.timers = p.t;
pancake.util = p.u;
pancake.video = p.v;
