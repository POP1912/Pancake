p.sp = {};
p.sprites = [];
p.sp.timers = [];
p.sp.create = function(im, s) {
    p.sprites[s] = [];
    p.sp.timers[s] = 0;
    for (var i = 0;i < im.length;i++) {
        p.sprites[s][i] = new Image();
        p.sprites[s][i].src = im[i];
    }
};

p.sp.get = function(s) {
    return p.sprites[s];
};
