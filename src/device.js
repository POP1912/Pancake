p.de = {};
p.de.screen_height = screen.height;
p.de.screen_width = screen.width;

p.de.vibrate = function(p) {
    window.navigator.vibrate(p);
};

p.de.stopVibrating = function() {
    window.navigator.vibrate(0);
};
