pancake.sprite = {};
pancake.sprites = [];
pancake.sprite.timers = [];
pancake.sprite.create = function(im, s) {
    pancake.sprites[s] = [];
    pancake.sprite.timers[s] = 0;
    for (var i = 0;i < im.length;i++) {
        pancake.sprites[s][i] = new Image();
        pancake.sprites[s][i].src = im[i];
    }
};

pancake.sprite.get = function(s) {
    return pancake.sprites[s];
};
