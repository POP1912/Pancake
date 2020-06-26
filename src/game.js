pancake.game = {};

pancake.game.title = function(title) {
    window.document.title = title;
};

pancake.game.restart = function() {
    window.location.reload();
};

pancake.game.close = function() {
    window.close();
};