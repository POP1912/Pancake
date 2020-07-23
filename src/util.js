p.u = {};

p.u.random = function(a) {
    return m.floor(m.random() * a);
};

// @see https://stackoverflow.com/a/1527820/2124254
p.u.randomBetween = function(a, b) {
    return m.floor(m.random() * (b - a)) + a;
};

p.u.quote = function(s) {
    return j.stringify(s);
};
