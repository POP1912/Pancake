p.u = {};

p.u.random = function(a) {
    return Math.floor(Math.random() * a);
};

// @see https://stackoverflow.com/a/1527820/2124254
p.u.randomBetween = function(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
};

p.u.quote = function(s) {
    return JSON.stringify(s);
};
