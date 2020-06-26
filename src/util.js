pancake.util = {};

pancake.util.random = function(a) {
    return Math.floor(Math.random() * a);
};

pancake.util.quote = function(s) {
    return JSON.stringify(s);
};