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
