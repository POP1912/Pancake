p.t = {};
p.t.second = 80;

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
