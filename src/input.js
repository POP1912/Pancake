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