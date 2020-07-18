// Pancake HTML5 game framework
// Copyright (c) 2020 - 2021 Rabia Alhaffar,Licensed under MIT License
// Build Date: 12/July/2020
var pancake = {};
pancake.version = "v0.0.9";
console.info("Made with Pancake " + pancake.version + "\nhttps://github.com/Rabios/Pancake");

pancake.browser = {};
pancake.browser.support = {};
pancake.browser.CHROME = navigator.userAgent.match("Chrome") != null;
pancake.browser.FIREFOX = navigator.userAgent.match("Firefox") != null;
pancake.browser.OPERA = navigator.userAgent.match("OPR") != null;
pancake.browser.SAFARI = navigator.userAgent.match("Safari") != null;
pancake.browser.EDGE = navigator.userAgent.match("Edg") != null;
pancake.browser.IE = navigator.userAgent.match("Trident") != null;
pancake.browser.MAXTHON = navigator.userAgent.match("Maxthon") != null;
pancake.browser.SAMSUNG_INTERNET = navigator.userAgent.match("SamsungBrowser") != null;
pancake.browser.SEAMONKEY = navigator.userAgent.match("SeaMonkey") != null;

pancake.browser.support.CANVAS = function() {
    return (!!(document.createElement("canvas").getContext) && (document.createElement("canvas").getContext("2d"))) != null;
};

pancake.browser.support.MP3 = function() {
    return document.createElement("audio").canPlayType("audio/mp3") != "";
};

pancake.browser.support.MPEG = function() {
    return document.createElement("audio").canPlayType("audio/mpeg") != "";
};

pancake.browser.support.MP4 = function() {
    return document.createElement("video").canPlayType("video/mp4") != "";
};

pancake.browser.support.OGG = function() {
    return document.createElement("audio").canPlayType("audio/ogg") != "";
};

pancake.browser.support.WAV = function() {
    return document.createElement("audio").canPlayType("audio/wav") != "";
};

pancake.browser.support.WEBM = function() {
    return document.createElement("video").canPlayType("video/webm") != "";
};

pancake.browser.support.GAMEPAD = function() {
    return "getGamepads" in window.navigator;
};

pancake.browser.open = function(u) {
    window.open(u);
};

pancake.os = {};
pancake.os.iOS = navigator.userAgent.match(/iPhone|iPad|iPod|Apple-iPhone/i) != null;
pancake.os.ANDROID = navigator.userAgent.match(/Android/i) != null;
pancake.os.OSX = navigator.userAgent.match(/Macintosh|Intel Mac OS X/i) != null;
pancake.os.WINDOWS = navigator.userAgent.match(/Windows|Windows NT/i) != null;
pancake.os.WINDOWS_PHONE = navigator.userAgent.match(/Windows Phone/i) != null;
pancake.os.LINUX = navigator.userAgent.match(/Linux|X11/i) != null;
pancake.os.UBUNTU = navigator.userAgent.match(/Ubuntu/i) != null;
pancake.os.PLAYSTATION = navigator.userAgent.match(/PlayStation/i) != null;
pancake.os.XBOX = navigator.userAgent.match(/Xbox|XBOX_ONE_ED|Xbox One/i) != null;
pancake.os.BLACKBERRY = navigator.userAgent.match(/Blackberry|BB/i) != null;
pancake.os.CHROMECAST = navigator.userAgent.match(/CrKey/i) != null;
pancake.os.CHROME_OS = navigator.userAgent.match(/CrOS/i) != null;
pancake.os.PS4 = navigator.userAgent.match(/PlayStation 4/i) != null;
pancake.os.PSVITA = navigator.userAgent.match(/PlayStation Vita/i) != null;
pancake.os.XBOX_ONE = navigator.userAgent.match(/Xbox One/i) != null;
pancake.os.XBOX_ONE_S = navigator.userAgent.match(/XBOX_ONE_ED/i) != null;
pancake.os.NINTENDO = navigator.userAgent.match(/Nintendo/i) != null;
pancake.os.N3DS = navigator.userAgent.match(/Nintendo 3DS/i) != null;
pancake.os.WII_U = navigator.userAgent.match(/Nintendo WiiU/i) != null;
pancake.os.FIRE_TV = navigator.userAgent.match(/AFTS/i) != null;
pancake.os.ROKU_ULTRA = navigator.userAgent.match(/Roku4640X/i) != null;
pancake.os.ROKU = navigator.userAgent.match(/Roku/i) != null;
pancake.os.NEXUS_PLAYER = navigator.userAgent.match(/Nexus Player/i) != null;
pancake.os.MINIX_NEO_X5 = navigator.userAgent.match(/NEO-X5/i) != null;
pancake.os.APPLE_TV = navigator.userAgent.match(/AppleTV/i) != null;
pancake.os.KINDLE = navigator.userAgent.match(/Kindle/i) != null;

pancake.util = {};

pancake.util.random = function(a) {
    return Math.floor(Math.random() * a);
};

// @see https://stackoverflow.com/a/1527820/2124254
pancake.util.randomBetween = function(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
};

pancake.util.quote = function(s) {
    return JSON.stringify(s);
};

pancake.debug = {};

pancake.debug.unknown = function(v) {
    return ((v == undefined) || (v == null) || (v == NaN));
};

pancake.debug.redefine = function(v, val) {
    if ((v == undefined) || (v == null) || (v == NaN)) v = val;
};

pancake.debug.type = function(v) {
    return typeof(v);
};

pancake.game = {};

pancake.game.title = function(t) {
    window.document.title = t;
};

pancake.game.restart = function() {
    window.location.reload();
};

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

// Rewritten by Rabia Alhaffar in 9/February/2020
pancake.context = {};
pancake.contexts = [];

pancake.context.create = function(c, co) {
    pancake.contexts[co] = pancake.canvases[c].getContext("2d");
};

pancake.context.use = function(c, co) {
    pancake.contexts[co] = canvas.getContext("2d");
    pancake.graphics.useContext(co);
    pancake.canvas.set(c, co);
};

pancake.context.set = function(nco, co) {
    pancake.contexts[co] = nco;
};

pancake.device = {};
pancake.device.screen_height = screen.height;
pancake.device.screen_width = screen.width;

pancake.device.vibrate = function(p) {
    window.navigator.vibrate(p);
};

pancake.device.stopVibrating = function() {
    window.navigator.vibrate(0);
};

pancake.input = {};
pancake.input.latest_key_down = -1;
pancake.input.latest_key_up = -1;
pancake.input.latest_key_pressed = -1;
pancake.input.latest_mouse_button_down = -1;
pancake.input.latest_mouse_button_up = -1;
pancake.input.click = false;
pancake.input.touchdown = false;
pancake.input.tap = false;
pancake.input.mouse_x = 0;
pancake.input.mouse_y = 0;
pancake.input.touch_x = 0;
pancake.input.touch_y = 0;
pancake.input.touch_start_time = 0;
pancake.input.swipe_start_x = 0;
pancake.input.swipe_start_y = 0;
pancake.input.HORIZONTAL_SWIPE_DIRECTION = "";
pancake.input.VERTICAL_SWIPE_DIRECTION = "";

window.addEventListener("mousedown", function(e) {
    pancake.input.swipe_start_x = e.clientX || e.pageX;
    pancake.input.swipe_start_y = e.clientY || e.pageY;
    pancake.input.touch_start_time = new Date().getTime();
});

window.addEventListener("mouseup", function(e) {
    pancake.input.mouse_x = e.clientX || e.pageX;
    pancake.input.mouse_y = e.clientY || e.pageY;
    var swipe_dist_x = (e.clientX || e.pageX) - pancake.input.swipe_start_x;
    var swipe_dist_y = (e.clientY || e.pageY) - pancake.input.swipe_start_y;
    var elapsedTime = new Date().getTime() - pancake.input.touch_start_time;
    if (elapsedTime <= 1000) {
        if (Math.abs(swipe_dist_x) >= 100 && Math.abs(swipe_dist_y) <= 300) {
            if (swipe_dist_x < 0) pancake.input.VERTICAL_SWIPE_DIRECTION = "LEFT";
            else pancake.input.VERTICAL_SWIPE_DIRECTION = "RIGHT";
        }
        else if (Math.abs(swipe_dist_y) >= 100 && Math.abs(swipe_dist_x) <= 300) {
            if (swipe_dist_y < 0) pancake.input.HORIZONTAL_SWIPE_DIRECTION = "UP";
            else pancake.input.HORIZONTAL_SWIPE_DIRECTION = "DOWN";
        }
    }
});

window.addEventListener("mousemove",function(e) {
    pancake.input.mouse_x = e.clientX || e.pageX;
    pancake.input.mouse_y = e.clientY || e.pageY;
});

window.addEventListener("touchstart", function(e) {
    pancake.input.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    pancake.input.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    pancake.input.swipe_start_x = e.changedTouches[0].pageX;
    pancake.input.swipe_start_y = e.changedTouches[0].pageY;
    pancake.input.tap = true;
    pancake.input.touch_start_time = new Date().getTime();
    e.preventDefault();
}, false);

window.addEventListener("touchend", function(e) {
    pancake.input.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    pancake.input.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    var swipe_dist_x = e.changedTouches[0].pageX - pancake.input.swipe_start_x;
    var swipe_dist_y = e.changedTouches[0].pageY - pancake.input.swipe_start_y;
    var elapsedTime = new Date().getTime() - pancake.input.touch_start_time;
    if (elapsedTime <= 1000) {
        if (Math.abs(swipe_dist_x) >= 100 && Math.abs(swipe_dist_y) <= 300) {
            if (swipe_dist_x < 0) pancake.input.VERTICAL_SWIPE_DIRECTION = "LEFT";
            else pancake.input.VERTICAL_SWIPE_DIRECTION = "RIGHT";
        }
        else if (Math.abs(swipe_dist_y) >= 100 && Math.abs(swipe_dist_x) <= 300) {
            if (swipe_dist_y < 0) pancake.input.HORIZONTAL_SWIPE_DIRECTION = "UP";
            else pancake.input.HORIZONTAL_SWIPE_DIRECTION = "DOWN";
            e.preventDefault();
        }
    }
    pancake.input.tap = true;
    e.preventDefault();
}, false);

window.addEventListener("touchcancel", function(e) {
    pancake.input.tap = false;
    e.preventDefault();
}, false);

window.addEventListener("touchmove", function(e) {
    pancake.input.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    pancake.input.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    pancake.input.touchdown = true;
    e.preventDefault();
}, false);

window.addEventListener("click", function() {
    pancake.input.click = true;
});

window.addEventListener("mousedown", function(e) {
    pancake.input.latest_mouse_button_down = e.button;
    pancake.input.click = false;
});

window.addEventListener("mouseup", function(e) {
    pancake.input.latest_mouse_button_up = e.button;
    pancake.input.click = false;
});

window.addEventListener("keydown", function(e) {
    pancake.input.latest_key_down = e.which || e.keyCode;
});

window.addEventListener("keyup", function(e) {
    pancake.input.latest_key_up = e.which || e.keyCode;
});

window.addEventListener("keypress", function(e) {
    pancake.input.latest_key_pressed = e.which || e.keyCode;
});

pancake.input.mousedown = function(b) {
    return pancake.input.latest_mouse_button_down == b;
};

pancake.input.mouseup = function(b) {
    return pancake.input.latest_mouse_button_up == b;
};

pancake.input.swipe = function(direction) {
    return (pancake.input.HORIZONTAL_SWIPE_DIRECTION == direction || pancake.input.VERTICAL_SWIPE_DIRECTION == direction);
};

pancake.input.keydown = function(k) {
    return pancake.input.latest_key_down == k;
};

pancake.input.keyup = function(k) {
    return pancake.input.latest_key_up == k;
};

pancake.input.keypress = function(k) {
    return pancake.input.latest_key_pressed == k;
};

pancake.input.hideCursor = function(i) {
    pancake.canvases[i].style.cursor = "none";
};

pancake.input.showCursor = function(i) {
    pancake.canvases[i].style.cursor = "auto";
};

pancake.input.lockPointer = function() {
    if (pancake.graphics.context.canvas.requestPointerLock) pancake.graphics.context.canvas.requestPointerLock();
    if (document.pointerLockElement === pancake.graphics.context.canvas) pancake.graphics.context.canvas.requestPointerLock();
};

pancake.input.unlockPointer = function() {
    document.exitPointerLock();
};

if (pancake.browser.support.GAMEPAD()) {
    pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "";
    pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION = "";
    pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "";
    pancake.input.GAMEPAD_CAMERA_VERTICAL_DIRECTION = "";
    pancake.input.GAMEPAD_ANALOG_UP = -0.3;
    pancake.input.GAMEPAD_ANALOG_DOWN = 0.3;
    pancake.input.GAMEPAD_ANALOG_LEFT = 0.3;
    pancake.input.GAMEPAD_ANALOG_RIGHT = -0.3;
    pancake.input.GAMEPAD_MOVE_ANALOG = 1;
    pancake.input.GAMEPAD_CAMERA_ANALOG = 2;

    pancake.input.gamepadConnected = function(i) {
        return !(navigator.getGamepads()[i] == undefined);
    };
    
    pancake.input.gamepadID = function(i) {
        if (!(navigator.getGamepads()[i] == undefined)) return navigator.getGamepads()[i].id;
    };
    
    pancake.input.gamepadButtonPressed = function(b, i) {
        if (!(navigator.getGamepads()[i] == undefined)) return navigator.getGamepads()[i].buttons[b].pressed;
    };
    
    pancake.input.gamepadButtonTouched = function(b, i) {
        if (!(navigator.getGamepads()[i] == undefined)) return navigator.getGamepads()[i].buttons[b].touched;
    };

    pancake.input.checkMovement = function(i, a, d) {
        if (!(navigator.getGamepads()[i] == undefined)) {
            if (a == pancake.input.GAMEPAD_MOVE_ANALOG) {
                if (navigator.getGamepads()[i].axes[1] <= d) pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "UP";
                if (navigator.getGamepads()[i].axes[1] >= d) pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "DOWN";
                if (navigator.getGamepads()[i].axes[0] <= d) pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION = "LEFT";
                if (navigator.getGamepads()[i].axes[0] >= d) pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION = "RIGHT";
            }
            
            if (a == pancake.input.GAMEPAD_CAMERA_ANALOG) {
                if (navigator.getGamepads()[i].axes[3] <= d) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "UP";
                if (navigator.getGamepads()[i].axes[3] >= d) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "DOWN";
                if (navigator.getGamepads()[i].axes[2] <= d) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "LEFT";
                if (navigator.getGamepads()[i].axes[2] >= d) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "RIGHT";
            }
        }
    };

    pancake.input.gamepadAnalogMoved = function(i, a, ad, d) {
        pancake.input.checkMovement(i, a, ad);
        if (a == pancake.input.GAMEPAD_MOVE_ANALOG) return (pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION == d || pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION == d);
        if (a == pancake.input.GAMEPAD_CAMERA_ANALOG) return (pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION == d || pancake.input.GAMEPAD_CAMERA_VERTICAL_DIRECTION == d);
    };
}

pancake.input.preventLoop = function() {
    pancake.input.latest_key_down = -1;
    pancake.input.latest_key_up = -1;
    pancake.input.latest_key_pressed = -1;
    pancake.input.latest_mouse_button_down = -1;
    pancake.input.latest_mouse_button_up = -1;
    pancake.input.click = false;
    pancake.input.tap = false;
    pancake.input.touchdown = false;
    pancake.input.HORIZONTAL_SWIPE_DIRECTION = "";
    pancake.input.VERTICAL_SWIPE_DIRECTION = "";
    if (pancake.browser.support.GAMEPAD()) {
        pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "";
        pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION = "";
        pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "";
        pancake.input.GAMEPAD_CAMERA_VERTICAL_DIRECTION = "";
    }
};

// Keyboard keys,Mouse and gamepad buttons
pancake.input.key = {
    A: 65, B: 66, C: 67, D: 68,E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77,
    N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
    ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56,
    NINE: 57, UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SPACE: 32, TAB: 9, SHIFT: 16, CONTROL: 17, 
    ALT: 18, BACKSPACE: 8, ENTER: 13, NUMLOCK: 144, OS: 91, UNIDENTIFIED: 0, HOME: 36, PGUP: 33,
    PGDN: 34, CLEAR: 12, DELETE: 46, ESCAPE: 27, INSERT: 45
};

pancake.input.button = {
    LEFT_MOUSE_BUTTON: 0,RIGHT_MOUSE_BUTTON: 2,MIDDLE_MOUSE_BUTTON: 1,A: 0,B: 1,XBOX_X: 2,
    Y: 3,LB: 4,RB: 5,LT: 6,RT: 7,BACK: 8,START: 9,LEFT_ANALOG_STICK: 10,RIGHT_ANALOG_STICK: 11,
    UP: 12,DOWN: 13,LEFT: 14,RIGHT: 15,PLAYSTATION_X: 0,O: 1,SQUARE: 2,TRIANGLE: 3,L1: 4,R1: 5,L2: 6,R2: 7,
    SELECT: 8
};

pancake.physics = {};
pancake.physics.distance_x = undefined;
pancake.physics.distance_y = undefined;

pancake.physics.checkCollisionRect = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
};

pancake.physics.checkCollisionCircle = function(x1, y1, r1, x2, y2, r2) {
    return (Math.sqrt((x1 - x2 * x1 - x2) + (y1 + y2 * y1 + y2)) < r1 + r2);
};

pancake.physics.checkCollisionCircleRect = function(x1, y1, r, x2, y2, w, h) {
    if (Math.abs(x1 - x2 - w / 2) > (w / 2 + r) || Math.abs(y1 - y2 - h / 2) > (h / 2 + r)) { return false; }
	if (Math.abs(x1 - x2 - w / 2) <= (w / 2) || Math.abs(y1 - y2 - h / 2) <= (h / 2)) { return true; }
    return (Math.abs(x1 - x2 - w / 2) - w / 2 * Math.abs(x1 - x2 - w / 2) - w / 2 + Math.abs(y1 - y2 - h / 2) - h / 2 * Math.abs(y1 - y2 - h / 2) - h / 2 <= Math.pow(r,2));
};

pancake.physics.checkCollisionCircleLine = function(x, y, r, fx, fy, tx, ty) {
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
pancake.physics.checkCollisionLeftCanvas = function(s) {
    if (s.length == 4) return s[0] <= s[2] * 0.5;
    if (s.length == 5) return s[0] + s[3] < s[2];
};

pancake.physics.checkCollisionRightCanvas = function(s, c) {
    if (s.length == 4) return s[0] + s[2] >= pancake.canvases[c].width + s[2] * 0.5;
    if (s.length == 5) return s[0] + s[3] > pancake.canvases[c].width - s[2];
};

pancake.physics.checkCollisionTopCanvas = function(s) {
    if (s.length == 4) return s[1] <= s[3] * 0.5;
    if (s.length == 5) return s[1] + s[4] < s[2];
};

pancake.physics.checkCollisionBottomCanvas = function(s, c) {
    if (s.length == 4) return s[1] + s[3] >= pancake.canvases[c].height + s[3] * 0.5;
    if (s.length == 5) return s[1] + s[4] > pancake.canvases[c].height - s[2];
};

pancake.physics.distanceBetween = function(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
};

// Distance are stored in pancake.physics.distance_x and pancake.physics_distance_y
pancake.physics.getDistance = function(x1, y1, x2, y2) {
    pancake.physics.distance_x = x2 - x1;
    pancake.physics.distance_y = y2 - y1;
};

pancake.sprite = {};
pancake.sprites = [];
pancake.sprite.timers = [];
pancake.sprite.create = function(im, s) {
    pancake.sprites[s] = [];
    pancake.sprite.timers[s] = 0;
    for (var i = 0;i < im.length;i++) {
        pancake.sprites[s][i] = new Image();
        pancake.sprites[s][i].src = im[i];
    }
};

pancake.sprite.get = function(s) {
    return pancake.sprites[s];
};

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

pancake.graphics.setBackgroundColor = function(c) {
    pancake.graphics.context.canvas.style.backgroundColor = c;
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

pancake.graphics.text = function(t, x, y) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillText(t, x, y);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeText(t, x, y);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillText(t, x, y);
        pancake.graphics.context.strokeText(t, x, y);
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

pancake.graphics.ellipse = function(x, y, rx, ry, rot, sa, ea, a) {
    pancake.graphics.context.beginPath();
    pancake.graphics.context.ellipse(x, y, rx, ry, rot, sa, ea, a);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fill();
        pancake.graphics.context.stroke();
    }
};

pancake.graphics.line = function(x1, y1, x2, y2, lw) {
    pancake.graphics.context.lineWidth = lw;
    pancake.graphics.context.beginPath();
    pancake.graphics.context.moveTo(x1,y1);
    pancake.graphics.context.lineTo(x2,y2);
    pancake.graphics.context.closePath();
    pancake.graphics.context.stroke();
    pancake.graphics.context.lineWidth = 1;
};

pancake.graphics.triangle = function(x1, y1, x2, y2, x3, y3, lw) {
    pancake.graphics.context.lineWidth = lw;
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

pancake.graphics.polygon = function(p) {
    pancake.graphics.context.beginPath();
    pancake.graphics.context.moveTo(p[0][0], p[0][1]);
    for (var i = 0; i < p.length; i++) pancake.graphics.context.lineTo(p[i][0], p[i][1]);
    pancake.graphics.context.closePath();
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.fill();
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.stroke();
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fill();
        pancake.graphics.context.stroke(); 
    }
};

pancake.graphics.loadImage = function(src, i) {
    pancake.images[i] = new Image();
    pancake.images[i].src = src;
};

pancake.graphics.loadImageFromDocument = function(e, i) {
    pancake.images[i] = new Image();
    pancake.images[i].src = e.src;
};

pancake.graphics.image = function(i, x, y, w, h) {
    pancake.graphics.context.drawImage(i, x, y, w, h);
};

pancake.graphics.imageFromIndex = function(i, x, y, w, h) {
    pancake.graphics.context.drawImage(pancake.images[i], x, y, w, h);
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

pancake.graphics.canvasToImage = function(c) {
    if (pancake.debug.unknown(c)) c = 0;
    return pancake.canvases[c].toDataURL();
};

pancake.graphics.screenshot = function(c) {
    if (pancake.debug.unknown(c)) c = 0;
    window.open(pancake.canvases[c].toDataURL());
};

pancake.graphics.square = function(x, y, s) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillRect(x, y, s, s);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeRect(x, y, s, s);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillRect(x, y, s, s);
        pancake.graphics.context.strokeRect(x, y, s, s);
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

pancake.graphics.grid = function(s) {
    var grid_loop_width = pancake.graphics.context.canvas.width / s,grid_loop_height = pancake.graphics.context.canvas.height / s;
	var x = 0,y = 0;
	for(var i = 0;i < grid_loop_height;i++)
	{
		for(z = 0;z < grid_loop_width;z++)
		{
			pancake.graphics.context.strokeRect(x,y,s,s);
            pancake.graphics.context.strokeRect(x + s,y,s,s);
            x = x + s;
		}
		x = 0,y = y + s;
	}
};

// NOTES: Antialiasing works with images
pancake.graphics.setAntialiasing = function(e, q) {
    pancake.graphics.context.imageSmoothingEnabled = e;
    pancake.graphics.context.imageSmoothingQuality = q;
};

pancake.graphics.setContext = function(c, i) {
    pancake.graphics.context = c;
    pancake.context.set(c, i);
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

pancake.graphics.shadow = function(c, b) {
    pancake.graphics.context.shadowColor = c;
    pancake.graphics.context.shadowBlur = b;
};
// Pancake audio part
// NOTES: To resume playing audio use same play function,Also you can even play music or song
pancake.audio = {};
pancake.audio_files = [];
var _audio = undefined;

// Play audio from source directly
pancake.audio.play = function(s) {
    _audio = new Audio(s).play();
};

// Load audio to audio files array to play from index using functions below
pancake.audio.load = function(s, a) {
    pancake.audio_files[a] = new Audio(s);
    pancake.audio_files[a].loop = false;
    pancake.audio_files[a].load();

};

pancake.audio.playFromIndex = function(a) {
    pancake.audio_files[a].play();
    if (pancake.audio_files[a].loop) pancake.audio_files[a].play();
};

pancake.audio.pauseFromIndex = function(a) {
    pancake.audio_files[a].pause();
};

pancake.audio.setVolumeFromIndex = function(v, a) {
    pancake.audio_files[a].volume = v;
};

pancake.audio.setMuteFromIndex = function(m, a) {
    pancake.audio_files[a].muted = m;
};

pancake.audio.setLoopFromIndex = function(l, a) {
    pancake.audio_files[a].loop = l;
};

pancake.audio.finishedPlayingFromIndex = function(a) {
    return pancake.audio_files[a].ended;
};

pancake.video = {};
pancake.videos = [];
var _video = undefined;

pancake.video.load = function(s, v) {
    pancake.videos[v] = document.createElement("video");
    pancake.videos[v].src = s;
    pancake.videos[v].autoplay = true;
    pancake.videos[v].loop = false;
    pancake.videos[v].load();
};

pancake.video.play = function(v, x, y, w, h) {
    if (pancake.debug.unknown(x)) x = 0;
    if (pancake.debug.unknown(y)) y = 0;
    if (pancake.debug.unknown(w)) w = pancake.graphics.context.canvas.width;
    if (pancake.debug.unknown(h)) h = pancake.graphics.context.canvas.height;
    if (!pancake.videos[v].ended) {
        pancake.graphics.image(pancake.videos[v], x, y, w, h);
        pancake.videos[v].play();
        if (pancake.videos[v].loop) {
            pancake.graphics.image(pancake.videos[v], x, y, w, h);
            pancake.videos[v].play();
        }
    }
};

pancake.video.pause = function(v) {
    pancake.videos[v].pause();
};

pancake.video.setVolume = function(vo, v) {
    pancake.videos[v].volume = vo;
};

pancake.video.setMute = function(m, v) {
    pancake.videos[v].muted = m;
};

pancake.video.setLoop = function(l, v) {
    pancake.videos[v].loop = l;
};

pancake.video.finished = function(v) {
    return pancake.videos[v].ended;
};

pancake.script = {};
pancake.scripts = [];

pancake.script.eval = function(c) {
    window.eval(c);
};

pancake.script.load = function(src, s) {
    pancake.scripts[s] = document.createElement("script"); 
    pancake.scripts[s].src = src; 
    pancake.scripts[s].type = "text/javascript"; 
    pancake.scripts[s].defer = true; 
    document.body.appendChild(pancake.scripts[s]);
};

pancake.storage = {};
pancake.storage.save = function(v, val) {
    window.localStorage.setItem(v, val);
};

pancake.storage.load = function(v) {
    return window.localStorage.getItem(v);
};

pancake.storage.remove = function(v) {
    window.localStorage.removeItem(v)
};

pancake.storage.clear = function() {
    window.localStorage.clear();
};

pancake.timers = {};
pancake.timers.second = 80;

pancake.timers.countdown = function(f, ms) {
    return window.setTimeout(f, ms);
};

pancake.timers.timer = function(f, ms) {
    return window.setInterval(f, 1000 / ms);
};

pancake.timers.pause = function(t) {
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

pancake.content = {};

pancake.content.load = function(j) {
    return JSON.parse(JSON.stringify(j));
};

