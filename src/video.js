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
