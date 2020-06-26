pancake.sprite = {};
pancake.sprites = [];
pancake.sprite.timers = [];
pancake.sprite.create = function(images,sprite_index) {
    pancake.sprites[sprite_index] = [];
    pancake.sprite.timers[sprite_index] = 0;
    for (var i = 0;i < images.length;i++) {
        pancake.sprites[sprite_index][i] = new Image();
        pancake.sprites[sprite_index][i].src = images[i];
    }
};

pancake.sprite.get = function(sprite_index) {
    return pancake.sprites[sprite_index];
};