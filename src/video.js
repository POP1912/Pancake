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
