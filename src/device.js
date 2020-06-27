pancake.device = {};
pancake.device.screen_height = screen.height;
pancake.device.screen_width = screen.width;

pancake.device.vibrate = function(pattern) {
    window.navigator.vibrate(pattern);
};

pancake.device.stopVibrating = function() {
    window.navigator.vibrate(0);
};