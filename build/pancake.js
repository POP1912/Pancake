// Pancake HTML5 game framework
// Copyright (c) 2020 - 2021 Rabia Alhaffar,Licensed under MIT License
// Build Date: 27/June/2020
var pancake = {};
pancake.version = "v0.0.2";
console.info("Made with Pancake " + pancake.version + "\nhttps://github.com/Rabios/Pancake");

pancake.browser = {};
pancake.browser.support = {};
pancake.browser.CHROME = !(navigator.userAgent.match("Chrome") == null);
pancake.browser.FIREFOX = !(navigator.userAgent.match("Firefox") == null);
pancake.browser.OPERA = !(navigator.userAgent.match("OPR") == null);
pancake.browser.SAFARI = !(navigator.userAgent.match("Safari") == null);
pancake.browser.EDGE = !(navigator.userAgent.match("Edg") == null);
pancake.browser.IE = !(navigator.userAgent.match("Trident") == null);

pancake.browser.support.CANVAS = function() {
    return (!!(document.createElement("canvas").getContext) && (document.createElement("canvas").getContext("2d"))) != null;
};

pancake.browser.support.MP3 = function() {
    return !(document.createElement("audio").canPlayType("audio/mp3")) == "";
};

pancake.browser.support.MPEG = function() {
    return !(document.createElement("audio").canPlayType("audio/mpeg")) == "";
};

pancake.browser.support.MP4 = function() {
    return !(document.createElement("video").canPlayType("video/mp4")) == "";
};

pancake.browser.support.OGG = function() {
    return !(document.createElement("audio").canPlayType("audio/ogg")) == "";
};

pancake.browser.support.WAV = function() {
    return !(document.createElement("audio").canPlayType("audio/wav")) == "";
};

pancake.browser.support.WEBM = function() {
    return !(document.createElement("video").canPlayType("video/webm")) == "";
};

pancake.browser.support.GAMEPAD = function() {
    return (!!navigator.getGamepads || !!navigator.webkitGetGamepads || !!navigator.webkitGamepads);
};

pancake.browser.open = function(url) {
    window.open(url);
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

pancake.util = {};

pancake.util.random = function(a) {
    return Math.floor(Math.random() * a);
};

// https://stackoverflow.com/a/1527820/2124254
pancake.util.randomBetween = function(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
};

pancake.util.quote = function(s) {
    return JSON.stringify(s);
};

pancake.debug = {};

pancake.debug.unknown = function(variable) {
    if ((variable == undefined) || (variable == null) || (variable == NaN)) return true;
};

pancake.debug.redefine = function(variable, value) {
    if ((variable == undefined) || (variable == null) || (variable == NaN)) variable = value;
};

pancake.debug.type = function(variable) {
    return typeof(variable);
};

pancake.game = {};

pancake.game.title = function(title) {
    window.document.title = title;
};

pancake.game.restart = function() {
    window.location.reload();
};

pancake.game.close = function() {
    window.close();
};

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

// Written by Rabia Alhaffar in 9/February/2020
// More functions to CanvasRenderingContext2D and pancake context module
if(!CanvasRenderingContext2D.prototype.clear) 
{
    CanvasRenderingContext2D.prototype.clear = function() 
    {
        this.clearRect(0,0,this.canvas.width,this.canvas.height);
    };
}

if(!CanvasRenderingContext2D.prototype.fillCircle)
{
    CanvasRenderingContext2D.prototype.fillCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeCircle)
{
    CanvasRenderingContext2D.prototype.strokeCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillEllipse)
{
    CanvasRenderingContext2D.prototype.fillEllipse = function(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise)
    {
        this.beginPath();
        this.ellipse(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeEllipse)
{
    CanvasRenderingContext2D.prototype.strokeEllipse = function(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise)
    {
        this.beginPath();
        this.ellipse(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillTriangle)
{
    CanvasRenderingContext2D.prototype.fillTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeTriangle)
{
    CanvasRenderingContext2D.prototype.strokeTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillPolygon)
{
    CanvasRenderingContext2D.prototype.fillPolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
        for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokePolygon)
{
    CanvasRenderingContext2D.prototype.strokePolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
        for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillRoundedRect)
{
    CanvasRenderingContext2D.prototype.fillRoundedRect = function(x,y,width,height,radius)
    {
        this.beginPath();
        this.moveTo(x + radius,y);
        this.lineTo(x + width - radius,y);
        this.quadraticCurveTo(x + width,y,x + width,y + radius);
        this.lineTo(x + width,y + height - radius);
        this.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
        this.lineTo(x + radius,y + height);
        this.quadraticCurveTo(x,y + height,x,y + height - radius);
        this.lineTo(x,y + radius);
        this.quadraticCurveTo(x,y,x + radius,y);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeRoundedRect)
{
    CanvasRenderingContext2D.prototype.strokeRoundedRect = function(x,y,width,height,radius)
    {
        this.beginPath();
        this.moveTo(x + radius,y);
        this.lineTo(x + width - radius,y);
        this.quadraticCurveTo(x + width,y,x + width,y + radius);
        this.lineTo(x + width,y + height - radius);
        this.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
        this.lineTo(x + radius,y + height);
        this.quadraticCurveTo(x,y + height,x,y + height - radius);
        this.lineTo(x,y + radius);
        this.quadraticCurveTo(x,y,x + radius,y);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.clearFilters) 
{
    CanvasRenderingContext2D.prototype.clearFilters = function()
    {
        this.canvas.style.filter = "none";
    };
}

if(!CanvasRenderingContext2D.prototype.fillSquare) 
{
    CanvasRenderingContext2D.prototype.fillSquare = function(x,y,size)
    {
        this.fillRect(x,y,size,size);
    };
}

if(!CanvasRenderingContext2D.prototype.strokeSquare) 
{
    CanvasRenderingContext2D.prototype.strokeSquare = function(x,y,size)
    {
        this.strokeRect(x,y,size,size);
    };
}

if(!CanvasRenderingContext2D.prototype.shear)
{
    CanvasRenderingContext2D.prototype.shear = function(sx,sy)
    {
        this.transform(1,sy,sx,1,0,0);
    };
}

if(!CanvasRenderingContext2D.prototype.line)
{
    CanvasRenderingContext2D.prototype.line = function(x1,y1,x2,y2,size)
    {
        this.lineWidth = size;
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.closePath();
        this.stroke();
    };
}

pancake.context = {};
pancake.contexts = [];

pancake.context.create = function(canvas_index, context_index) {
    pancake.contexts[context_index] = pancake.canvases[canvas_index].getContext("2d");
};

pancake.context.use = function(canvas, context_index) {
    pancake.contexts[context_index] = canvas.getContext("2d");
    pancake.graphics.useContext(context_index);
};

pancake.context.set = function(context, context_index) {
    pancake.contexts[context_index] = context;
};

pancake.device = {};
pancake.device.screen_height = screen.height;
pancake.device.screen_width = screen.width;

pancake.device.vibrate = function(pattern) {
    window.navigator.vibrate(pattern);
};

pancake.device.stopVibrating = function() {
    window.navigator.vibrate(0);
};

pancake.input = {};
pancake.input.latest_key_down = "";
pancake.input.latest_key_up = "";
pancake.input.latest_key_pressed = "";
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
});

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
});

window.addEventListener("touchcancel", function() {
    pancake.input.tap = false;
});

window.addEventListener("touchmove", function(e) {
    pancake.input.touch_x = e.changedTouches[0].clientX || e.changedTouches[0].pageX;
    pancake.input.touch_y = e.changedTouches[0].clientY || e.changedTouches[0].pageY;
    pancake.input.touchdown = true;
    e.preventDefault();
});

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
    pancake.input.latest_key_down = e.key;
});

window.addEventListener("keyup", function(e) {
    pancake.input.latest_key_up = e.key;
});

window.addEventListener("keypress", function(e) {
    pancake.input.latest_key_pressed = e.key;
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

pancake.input.hideCursor = function(canvas_index) {
    window.eval(" pancake.canvases[" + canvas_index.toString() + "].style.cursor = none; ");
};

pancake.input.showCursor = function(canvas_index) {
    window.eval(" pancake.canvases[" + canvas_index.toString() + "].style.cursor = auto; ");
};

pancake.input.lockPointer = function(canvas_index) {
    if (pancake.canvases[index].requestPointerLock) pancake.canvases[canvas_index].requestPointerLock();
    if (document.pointerLockElement === canvas) pancake.canvases[canvas_index].requestPointerLock();
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

    pancake.input.gamepadConnected = function(index) {
        return !(navigator.getGamepads()[index] == undefined);
    };
    
    pancake.input.gamepadID = function(index) {
        if (!(navigator.getGamepads()[index] == undefined)) return navigator.getGamepads()[index].id;
    };
    
    pancake.input.gamepadButtonPressed = function(button, index) {
        if (!(navigator.getGamepads()[index] == undefined)) return navigator.getGamepads()[index].buttons[button].pressed;
    };
    
    pancake.input.gamepadButtonTouched = function(button, index) {
        if (!(navigator.getGamepads()[index] == undefined)) return navigator.getGamepads()[index].buttons[button].touched;
    };

    pancake.input.checkMovement = function(index, analog, direction) {
        if (!(navigator.getGamepads()[index] == undefined)) {
            if (analog == pancake.input.GAMEPAD_MOVE_ANALOG) {
                if (navigator.getGamepads()[index].axes[1] <= direction) pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "UP";
                if (navigator.getGamepads()[index].axes[1] >= direction) pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION = "DOWN";
                if (navigator.getGamepads()[index].axes[0] <= direction) pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION = "LEFT";
                if (navigator.getGamepads()[index].axes[0] >= direction) pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION = "RIGHT";
            }
            
            if (analog == pancake.input.GAMEPAD_CAMERA_ANALOG) {
                if (navigator.getGamepads()[index].axes[3] <= direction) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "UP";
                if (navigator.getGamepads()[index].axes[3] >= direction) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "DOWN";
                if (navigator.getGamepads()[index].axes[2] <= direction) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "LEFT";
                if (navigator.getGamepads()[index].axes[2] >= direction) pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION = "RIGHT";
            }
        }
    };

    pancake.input.gamepadAnalogMoved = function(index, analog, analog_direction, direction) {
        pancake.input.checkMovement(index, analog, analog_direction);
        if (analog == pancake.input.GAMEPAD_MOVE_ANALOG) return (pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION == direction || pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION == direction);
        if (analog == pancake.input.GAMEPAD_CAMERA_ANALOG) return (pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION == direction || pancake.input.GAMEPAD_CAMERA_VERTICAL_DIRECTION == direction);
    };
}

pancake.input.preventLoop = function() {
    pancake.input.latest_key_down = "";
    pancake.input.latest_key_up = "";
    pancake.input.latest_key_pressed = "";
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
    A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h", I: "i", J: "j", K: "k",
    L: "l", M: "m", N: "n", O: "o", P: "p", Q: "q", R: "r", S: "s", T: "t", U: "u", V: "v",
    W: "w", X: "x", Y: "y", Z: "z", ZERO: "0", ONE: "1", TWO: "2", THREE: "3", FOUR: "4",
    FIVE: "5", SIX: "6", SEVEN: "7", EIGHT: "8", NINE: "9", UP: "ArrowUp", DOWN: "ArrowDown",
    LEFT: "ArrowLeft", RIGHT: "ArrowRight", SPACE: " ", TAB: "Tab", SHIFT: "Shift", CTRL: "Control",
    ALT: "Alt", BACKSPACE: "Backspace", ENTER: "Enter", OS: "OS", UNIDENTIFIED: "Unidentified",
    HOME: "Home", PGUP: "PageUp", PGDN: "PageDown", CLEAR: "Clear", DELETE: "Delete", ESCAPE: "Escape", INSERT: "Insert"
};

pancake.input.button = {
    LEFT_MOUSE_BUTTON: 0,RIGHT_MOUSE_BUTTON: 2,MIDDLE_MOUSE_BUTTON: 1,A: 0,B: 1,XBOX_X: 2,
    Y: 3,LB: 4,RB: 5,LT: 6,RT: 7,BACK: 8,START: 9,LEFT_ANALOG_STICK: 10,RIGHT_ANALOG_STICK: 11,
    UP: 12,DOWN: 13,LEFT: 14,RIGHT: 15,PLAYSTATION_X: 0,O: 1,SQUARE: 2,TRIANGLE: 3,L1: 4,R1: 5,L2: 6,R2: 7,
    SELECT: 8
};

pancake.physics = {};

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

pancake.physics.checkCollisionCircleLine = function(x, y, r, line_from_x, line_from_y, line_to_x, line_to_y) {
    var dist;
    var v1x = line_to_x - line_from_x;
    var v1y = line_to_y - line_from_y;
    var v2x = x - line_from_x;
    var v2y = y - line_from_y;
    var u = (v2x * v1x + v2y * v1y) / (v1y * v1y + v1x * v1x);
    if (u >= 0 && u <= 1) dist = Math.pow((line_from_x + v1x * u - x),2) + Math.pow((line_from_y + v1y * u - y),2);
    else {
        if (u < 0) dist = Math.pow((line_from_x - x),2) + Math.pow((line_from_y - y),2);
        else dist = Math.pow((line_to_x - x),2) + Math.pow((line_to_y - y),2);
    }
    if (dist < Math.pow(r,2)) return true;
};

// Collision with canvas sides
// NOTES: As shape info in array,Here is following bellow
// [ x, y, width, height ] for rectangle
// [ x1, y1, radius, speedX, speedY ] for circle
pancake.physics.checkCollisionLeftCanvas = function(shape) {
    if (shape.length == 4) return shape[0] <= shape[2] * 0.5;
    if (shape.length == 5) return shape[0] + shape[3] < shape[2];
};

pancake.physics.checkCollisionRightCanvas = function(shape, canvas_index) {
    if (shape.length == 4) return shape[0] + shape[2] >= pancake.canvases[canvas_index].width + shape[2] * 0.5;
    if (shape.length == 5) return shape[0] + shape[3] > pancake.canvases[canvas_index].width - shape[2];
};

pancake.physics.checkCollisionTopCanvas = function(shape) {
    if (shape.length == 4) return shape[1] <= shape[3] * 0.5;
    if (shape.length == 5) return shape[1] + shape[4] < shape[2];
};

pancake.physics.checkCollisionBottomCanvas = function(shape, canvas_index) {
    if (shape.length == 4) return shape[1] + shape[3] >= pancake.canvases[canvas_index].height + shape[3] * 0.5;
    if (shape.length == 5) return shape[1] + shape[4] > pancake.canvases[canvas_index].height - shape[2];
};

pancake.physics.distanceBetween = function(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
};

pancake.sprite = {};
pancake.sprites = [];
pancake.sprite.timers = [];
pancake.sprite.create = function(images,sprite_index) {
    pancake.sprites[sprite_index] = [];
    pancake.sprite.timers[sprite_index] = 0;
    for (var i = 0;i < images.length;i++) {
        pancake.sprites[sprite_index][i] = new Image();
        pancake.sprites[sprite_index][i].src = images[i];
    }
};

pancake.sprite.get = function(sprite_index) {
    return pancake.sprites[sprite_index];
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

pancake.graphics.toggleFullscreen = function() {
    var screen = document.documentElement;
	if (screen.requestFullscreen) screen.requestFullscreen(); 
    if (screen.mozRequestFullScreen) screen.mozRequestFullScreen(); 
    if (screen.webkitRequestFullscreen) screen.webkitRequestFullscreen(); 
    if (screen.msRequestFullscreen) screen.msRequestFullscreen();
};

pancake.graphics.exitFullscreen = function() {
    if (document.exitFullscreen) document.exitFullscreen();
	if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	if (document.webkitExitFullscreen) document.webkitExitFullscreen();
	if (document.msExitFullscreen) document.msExitFullscreen();
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
    pancake.graphics.context.clear();
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
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillRoundedRect(x, y, w, h, r);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeRoundedRect(x, y, w, h, r);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillRoundedRect(x, y, w, h, r);
        pancake.graphics.context.strokeRoundedRect(x, y, w, h, r);
    }
};

pancake.graphics.circle = function(x, y, r) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillCircle(x, y, r);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeCircle(x, y, r);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillRect(x, y, r);
        pancake.graphics.context.strokeRect(x, y, r);
    }
};

pancake.graphics.ellipse = function(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillEllipse(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeEllipse(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillEllipse(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise);
        pancake.graphics.context.strokeEllipse(x, y, radius_x, radius_y, rotation, start_angle, end_angle, anticlockwise);        
    }
};

pancake.graphics.line = function(x1, y1, x2, y2, line_width) {
    pancake.graphics.context.line(x1, y1, x2, y2, line_width);
    pancake.graphics.context.lineWidth = 1;
};

pancake.graphics.triangle = function(x1, y1, x2, y2, x3, y3, line_width) {
    pancake.graphics.context.lineWidth = line_width;
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.context.fillTriangle(x1, y1, x2, y2, x3, y3);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokeTriangle(x1, y1, x2, y2, x3, y3);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillTriangle(x1, y1, x2, y2, x3, y3);
        pancake.graphics.context.strokeTriangle(x1, y1, x2, y2, x3, y3);
    }
    pancake.graphics.context.lineWidth = 1;
};

pancake.graphics.polygon = function(points) {
    if (pancake.graphics.mode == pancake.graphics.FILL) pancake.graphics.fillPolygon(points);
    if (pancake.graphics.mode == pancake.graphics.STROKE) pancake.graphics.context.strokePolygon(points);
    if (pancake.graphics.mode == pancake.graphics.BOTH) {
        pancake.graphics.context.fillPolygon(points);
        pancake.graphics.context.strokePolygon(points);   
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
    pancake.graphics.context.clearFilters();
};

pancake.graphics.erase = function(x, y, w, h) {
    pancake.graphics.context.clearRect(x, y, w, h);
};

pancake.graphics.canvasToImage = function() {
    return pancake.graphics.context.canvas.toDataURL();
};

pancake.graphics.screenshot = function() {
    window.open(pancake.graphics.context.canvas.toDataURL());
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
    for(var loopdlg = 0;loopdlg < content.length;loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
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

pancake.graphics.setResolution = function(width, height) {
    pancake.graphics.context.canvas.style.width = width;
    pancake.graphics.context.canvas.style.height = height;
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
    pancake.graphics.context.shear(x, y);
};

pancake.graphics.save = function() {
    pancake.graphics.context.save();
};

pancake.graphics.restore = function() {
    pancake.graphics.context.restore();
};

// Pancake audio part
// NOTES: To resume playing audio use same play function,Also you can even play music or song
pancake.audio = {};
pancake.audio_files = [];
var _audio = undefined;

// Play audio from source directly
pancake.audio.play = function(src) {
    _audio = new Audio(src).play();
};

// Load audio to audio files array to play from index using functions below
pancake.audio.load = function(src, index) {
    pancake.audio_files[index] = new Audio(src);
};

pancake.audio.playFromIndex = function(index) {
    pancake.audio_files[index].load();
    pancake.audio_files[index].play();
};

pancake.audio.pauseFromIndex = function(index) {
    pancake.audio_files[index].pause();
};

pancake.audio.setVolumeFromIndex = function(volume, index) {
    pancake.audio_files[index].volume = volume;
};

pancake.audio.setMuteFromIndex = function(mute, index) {
    pancake.audio_files[index].muted = mute;
};

pancake.audio.setLoopFromIndex = function(loop, index) {
    pancake.audio_files[index].loop = loop;
};

pancake.audio.finishedPlayingFromIndex = function(index) {
    return pancake.audio_files[index].ended;
};

pancake.script = {};
pancake.scripts = [];

pancake.script.eval = function(code) {
    window.eval(code);
};

pancake.script.load = function(src, script_index) {
    pancake.scripts[script_index] = document.createElement("script"); 
    pancake.scripts[script_index].src = src; 
    pancake.scripts[script_index].type = "text/javascript"; 
    pancake.scripts[script_index].defer = true; 
    document.body.appendChild(pancake.scripts[script_index]);
};

pancake.storage = {};
pancake.storage.save = function(variable, value) {
    window.localStorage.setItem(variable, value);
};

pancake.storage.load = function(variable) {
    return window.localStorage.getItem(variable);
};

pancake.storage.remove = function(variable) {
    window.localStorage.removeItem(variable)
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

pancake.timers.pause = function(timer) {
    window.clearInterval(timer);
};

// Don't judge me,I used that one by Paul Irish
// Sorry if that makes Pancake sucks
pancake.timers.animate = function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            window.oRequestAnimationFrame      ||
            function(callback, fps) {
                window.setTimeout(callback, 1000 / fps);
            };
};

