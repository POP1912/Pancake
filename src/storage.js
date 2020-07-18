pancake.storage = {};
pancake.storage.save = function(v, val) {
    window.localStorage.setItem(v, val);
};

pancake.storage.load = function(v) {
    return window.localStorage.getItem(v);
};

pancake.storage.remove = function(v) {
    window.localStorage.removeItem(v)
};

pancake.storage.clear = function() {
    window.localStorage.clear();
};
