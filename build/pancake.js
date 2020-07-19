// Pancake HTML5 game framework
// Copyright (c) 2020 - 2021 Rabia Alhaffar,Licensed under MIT License
// Build Date: 19/July/2020
var p = {};
p.version = "v0.0.10";
console.info("Made with Pancake " + p.version + "\nhttps://github.com/Rabios/Pancake");

p.b = {};
p.b.s = {};
p.b.CHROME = navigator.userAgent.match("Chrome") != null;
p.b.FIREFOX = navigator.userAgent.match("Firefox") != null;
p.b.OPERA = navigator.userAgent.match("OPR") != null;
p.b.SAFARI = navigator.userAgent.match("Safari") != null;
p.b.EDGE = navigator.userAgent.match("Edg") != null;
p.b.IE = navigator.userAgent.match("Trident") != null;
p.b.MAXTHON = navigator.userAgent.match("Maxthon") != null;
p.b.SAMSUNG_INTERNET = navigator.userAgent.match("SamsungBrowser") != null;
p.b.SEAMONKEY = navigator.userAgent.match("SeaMonkey") != null;

p.b.s.CANVAS = function() {
    return (!!(document.createElement("canvas").getContext) && (document.createElement("canvas").getContext("2d"))) != null;
};

p.b.s.MP3 = function() {
    return document.createElement("audio").canPlayType("audio/mp3") != "";
};

p.b.s.MPEG = function() {
    return document.createElement("audio").canPlayType("audio/mpeg") != "";
};

p.b.s.MP4 = function() {
    return document.createElement("video").canPlayType("video/mp4") != "";
};

p.b.s.OGG = function() {
    return document.createElement("audio").canPlayType("audio/ogg") != "";
};

p.b.s.WAV = function() {
    return document.createElement("audio").canPlayType("audio/wav") != "";
};

p.b.s.WEBM = function() {
    return document.createElement("video").canPlayType("video/webm") != "";
};

p.b.s.GAMEPAD = function() {
    return "getGamepads" in window.navigator;
};

p.b.open = function(u) {
    window.open(u);
};

p.o = {};
p.o.iOS = navigator.userAgent.match(/iPhone|iPad|iPod|Apple-iPhone/i) != null;
p.o.ANDROID = navigator.userAgent.match(/Android/i) != null;
p.o.OSX = navigator.userAgent.match(/Macintosh|Intel Mac OS X/i) != null;
p.o.WINDOWS = navigator.userAgent.match(/Windows|Windows NT/i) != null;
p.o.WINDOWS_PHONE = navigator.userAgent.match(/Windows Phone/i) != null;
p.o.LINUX = navigator.userAgent.match(/Linux|X11/i) != null;
p.o.UBUNTU = navigator.userAgent.match(/Ubuntu/i) != null;
p.o.PLAYSTATION = navigator.userAgent.match(/PlayStation/i) != null;
p.o.XBOX = navigator.userAgent.match(/Xbox|XBOX_ONE_ED|Xbox One/i) != null;
p.o.BLACKBERRY = navigator.userAgent.match(/Blackberry|BB/i) != null;
p.o.CHROMECAST = navigator.userAgent.match(/CrKey/i) != null;
p.o.CHROME_OS = navigator.userAgent.match(/CrOS/i) != null;
p.o.PS4 = navigator.userAgent.match(/PlayStation 4/i) != null;
p.o.PSVITA = navigator.userAgent.match(/PlayStation Vita/i) != null;
p.o.XBOX_ONE = navigator.userAgent.match(/Xbox One/i) != null;
p.o.XBOX_ONE_S = navigator.userAgent.match(/XBOX_ONE_ED/i) != null;
p.o.NINTENDO = navigator.userAgent.match(/Nintendo/i) != null;
p.o.N3DS = navigator.userAgent.match(/Nintendo 3DS/i) != null;
p.o.WII_U = navigator.userAgent.match(/Nintendo WiiU/i) != null;
p.o.FIRE_TV = navigator.userAgent.match(/AFTS/i) != null;
p.o.ROKU_ULTRA = navigator.userAgent.match(/Roku4640X/i) != null;
p.o.ROKU = navigator.userAgent.match(/Roku/i) != null;
p.o.NEXUS_PLAYER = navigator.userAgent.match(/Nexus Player/i) != null;
p.o.MINIX_NEO_X5 = navigator.userAgent.match(/NEO-X5/i) != null;
p.o.APPLE_TV = navigator.userAgent.match(/AppleTV/i) != null;
p.o.KINDLE = navigator.userAgent.match(/Kindle/i) != null;

p.u = {};

p.u.random = function(a) {
    return Math.floor(Math.random() * a);
};

// @see https://stackoverflow.com/a/1527820/2124254
p.u.randomBetween = function(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
};

p.u.quote = function(s) {
    return JSON.stringify(s);
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
    window.document.title = t;
};

p.ga.restart = function() {
    window.location.reload();
};

p.can = {};
p.canvases = [];
p.can.compatible_width = window.innerWidth - 20;
p.can.compatible_height = window.innerHeight - 20;

p.can.create = function(w, h, c) {
    p.canvases[c] = document.createElement("canvas");
    p.canvases[c].width = w;
    p.canvases[c].height = h;
    document.body.appendChild(p.canvases[c]);
};

p.can.resize = function(w, h, c) {
    p.canvases[c].width = w;
    p.canvases[c].height = h;
};

p.can.setAttribute = function(v, val, c) {
    window.eval(" p.canvases[" + c.toString() + "]." + v.toString() + " = " + val.toString() + "; ");
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
p.de.screen_height = screen.height;
p.de.screen_width = screen.width;

p.de.vibrate = function(p) {
    window.navigator.vibrate(p);
};

p.de.stopVibrating = function() {
    window.navigator.vibrate(0);
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

window.addEventListener("mousedown", function(e) {
    p.i.swipe_start_x = e.clientX || e.pageX;
    p.i.swipe_start_y = e.clientY || e.pageY;
    p.i.touch_start_time = new Date().getTime();
});

window.addEventListener("mouseup", function(e) {
    p.i.mouse_x = e.clientX || e.pageX;
    p.i.mouse_y = e.clientY || e.pageY;
    var swipe_dist_x = (e.clientX || e.pageX) - p.i.swipe_start_x;
    var swipe_dist_y = (e.clientY || e.pageY) - p.i.swipe_start_y;
    var elapsedTime = new Date().getTime() - p.i.touch_start_time;
    if (elapsedTime <= 1000) {
        if (Math.abs(swipe_dist_x) >= 100 && Math.abs(swipe_dist_y) <= 300) {
            if (swipe_dist_x < 0) p.i.VERTICAL_SWIPE_DIRECTION = "LEFT";
            else p.i.VERTICAL_SWIPE_DIRECTION = "RIGHT";
        }
        else if (Math.abs(swipe_dist_y) >= 100 && Math.abs(swipe_dist_x) <= 300) {
            if (swipe_dist_y < 0) p.i.HORIZONTAL_SWIPE_DIRECTION = "UP";
            else p.i.HORIZONTAL_SWIPE_DIRECTION = "DOWN";
        }
    }
});

window.addEventListener("mousemove",function(e) {
    p.i.mouse_x = e.clientX || e.pageX;
    p.i.mouse_y = e.clientY || e.pageY;
});

window.addEventListener("touchstart", function(e) {
    p.i.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    p.i.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    p.i.swipe_start_x = e.changedTouches[0].pageX;
    p.i.swipe_start_y = e.changedTouches[0].pageY;
    p.i.tap = true;
    p.i.touch_start_time = new Date().getTime();
    e.preventDefault();
}, false);

window.addEventListener("touchend", function(e) {
    p.i.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    p.i.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    var swipe_dist_x = e.changedTouches[0].pageX - p.i.swipe_start_x;
    var swipe_dist_y = e.changedTouches[0].pageY - p.i.swipe_start_y;
    var elapsedTime = new Date().getTime() - p.i.touch_start_time;
    if (elapsedTime <= 1000) {
        if (Math.abs(swipe_dist_x) >= 100 && Math.abs(swipe_dist_y) <= 300) {
            if (swipe_dist_x < 0) p.i.VERTICAL_SWIPE_DIRECTION = "LEFT";
            else p.i.VERTICAL_SWIPE_DIRECTION = "RIGHT";
        }
        else if (Math.abs(swipe_dist_y) >= 100 && Math.abs(swipe_dist_x) <= 300) {
            if (swipe_dist_y < 0) p.i.HORIZONTAL_SWIPE_DIRECTION = "UP";
            else p.i.HORIZONTAL_SWIPE_DIRECTION = "DOWN";
            e.preventDefault();
        }
    }
    p.i.tap = true;
    e.preventDefault();
}, false);

window.addEventListener("touchcancel", function(e) {
    p.i.tap = false;
    e.preventDefault();
}, false);

window.addEventListener("touchmove", function(e) {
    p.i.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    p.i.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    p.i.touchdown = true;
    e.preventDefault();
}, false);

window.addEventListener("click", function() {
    p.i.click = true;
});

window.addEventListener("mousedown", function(e) {
    p.i.latest_mouse_button_down = e.button;
    p.i.click = false;
});

window.addEventListener("mouseup", function(e) {
    p.i.latest_mouse_button_up = e.button;
    p.i.click = false;
});

window.addEventListener("keydown", function(e) {
    p.i.latest_key_down = e.which || e.keyCode;
});

window.addEventListener("keyup", function(e) {
    p.i.latest_key_up = e.which || e.keyCode;
});

window.addEventListener("keypress", function(e) {
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
    if (pancake.graphics.context.canvas.requestPointerLock) pancake.graphics.context.canvas.requestPointerLock();
    if (document.pointerLockElement === pancake.graphics.context.canvas) pancake.graphics.context.canvas.requestPointerLock();
};

p.i.unlockPointer = function() {
    document.exitPointerLock();
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
        return !(navigator.getGamepads()[i] == undefined);
    };
    
    p.i.gamepadID = function(i) {
        if (!(navigator.getGamepads()[i] == undefined)) return navigator.getGamepads()[i].id;
    };
    
    p.i.gamepadButtonPressed = function(b, i) {
        if (!(navigator.getGamepads()[i] == undefined)) return navigator.getGamepads()[i].buttons[b].pressed;
    };
    
    p.i.gamepadButtonTouched = function(b, i) {
        if (!(navigator.getGamepads()[i] == undefined)) return navigator.getGamepads()[i].buttons[b].touched;
    };

    p.i.checkMovement = function(i, a, d) {
        if (!(navigator.getGamepads()[i] == undefined)) {
            if (a == p.i.GAMEPAD_MOVE_ANALOG) {
                if (navigator.getGamepads()[i].axes[1] <= d) p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "UP";
                if (navigator.getGamepads()[i].axes[1] >= d) p.i.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "DOWN";
                if (navigator.getGamepads()[i].axes[0] <= d) p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION = "LEFT";
                if (navigator.getGamepads()[i].axes[0] >= d) p.i.GAMEPAD_MOVE_VERTICAL_DIRECTION = "RIGHT";
            }
            
            if (a == p.i.GAMEPAD_CAMERA_ANALOG) {
                if (navigator.getGamepads()[i].axes[3] <= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "UP";
                if (navigator.getGamepads()[i].axes[3] >= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "DOWN";
                if (navigator.getGamepads()[i].axes[2] <= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "LEFT";
                if (navigator.getGamepads()[i].axes[2] >= d) p.i.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "RIGHT";
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
    if (pancake.browser.support.GAMEPAD()) {
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
    return (Math.sqrt((x1 - x2 * x1 - x2) + (y1 + y2 * y1 + y2)) < r1 + r2);
};

p.p.checkCollisionCircleRect = function(x1, y1, r, x2, y2, w, h) {
    if (Math.abs(x1 - x2 - w / 2) > (w / 2 + r) || Math.abs(y1 - y2 - h / 2) > (h / 2 + r)) { return false; }
	if (Math.abs(x1 - x2 - w / 2) <= (w / 2) || Math.abs(y1 - y2 - h / 2) <= (h / 2)) { return true; }
    return (Math.abs(x1 - x2 - w / 2) - w / 2 * Math.abs(x1 - x2 - w / 2) - w / 2 + Math.abs(y1 - y2 - h / 2) - h / 2 * Math.abs(y1 - y2 - h / 2) - h / 2 <= Math.pow(r,2));
};

p.p.checkCollisionCircleLine = function(x, y, r, fx, fy, tx, ty) {
    var dist;
    var u = ((x - fx) * (tx - fx) + (y - fy) * (ty - fy)) / ((ty - fy) * (ty - fy) + (tx - fx) * (tx - fx));
    if (u >= 0 && u <= 1) dist = Math.pow((fx + (tx - fx) * u - x),2) + Math.pow((fy + (ty - fy) * u - y),2);
    else {
        if (u < 0) dist = Math.pow((fx - x),2) + Math.pow((fy - y),2);
        else dist = Math.pow((tx - x),2) + Math.pow((ty - y),2);
    }
    if (dist < Math.pow(r,2)) return true;
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
    return Math.hypot(x2 - x1, y2 - y1);
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
    for (var i = 0; i < p.length; i++) p.g.context.lineTo(po[i][0], po[i][1]);
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
    p.videos[v] = document.createElement("video");
    p.videos[v].src = s;
    p.videos[v].autoplay = true;
    p.videos[v].loop = false;
    p.videos[v].load();
};

p.v.play = function(v, x, y, w, h) {
    if (pancake.debug.unknown(x)) x = 0;
    if (pancake.debug.unknown(y)) y = 0;
    if (pancake.debug.unknown(w)) w = pancake.graphics.context.canvas.width;
    if (pancake.debug.unknown(h)) h = pancake.graphics.context.canvas.height;
    if (!p.videos[v].ended) {
        pancake.graphics.image(p.videos[v], x, y, w, h);
        p.videos[v].play();
        if (p.videos[v].loop) {
            pancake.graphics.image(p.videos[v], x, y, w, h);
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
    window.eval(c);
};

p.s.load = function(src, s) {
    p.scripts[s] = document.createElement("script"); 
    p.scripts[s].src = src; 
    p.scripts[s].type = "text/javascript"; 
    p.scripts[s].defer = true; 
    document.body.appendChild(p.scripts[s]);
};

p.st = {};
p.st.save = function(v, val) {
    window.localStorage.setItem(v, val);
};

p.st.load = function(v) {
    return window.localStorage.getItem(v);
};

p.st.remove = function(v) {
    window.localStorage.removeItem(v)
};

p.st.clear = function() {
    window.localStorage.clear();
};

p.t = {};
p.t.second = 80;

p.t.countdown = function(f, ms) {
    return window.setTimeout(f, ms);
};

p.t.timer = function(f, ms) {
    return window.setInterval(f, 1000 / ms);
};

p.t.pause = function(t) {
    window.clearInterval(t);
};

// Don't judge me,I used that one by Paul Irish
// Sorry if that makes Pancake sucks
window.animate = (function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            window.oRequestAnimationFrame      ||
            function(callback, fps) {
                window.setTimeout(callback, 1000 / fps);
            };
})();

p.c = {};

p.c.load = function(j) {
    return JSON.parse(JSON.stringify(j));
};

// Written by Rabia Alhaffar in 19/July/2020
// Defining for optimized versions of Pancake
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
