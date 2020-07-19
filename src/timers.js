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
