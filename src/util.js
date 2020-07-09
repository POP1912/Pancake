pancake.util = {};

pancake.util.random = function(a) {
    return Math.floor(Math.random() * a);
};

// @see https://stackoverflow.com/a/1527820/2124254
pancake.util.randomBetween = function(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
};

pancake.util.quote = function(s) {
    return JSON.stringify(s);
};
