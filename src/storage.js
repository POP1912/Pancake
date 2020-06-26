pancake.storage = {};
pancake.storage.save = function(variable, value) {
    window.localStorage.setItem(variable, value);
};

pancake.storage.load = function(variable) {
    return window.localStorage.getItem(variable);
};

pancake.storage.remove = function(variable) {
    window.localStorage.removeItem(variable)
};

pancake.storage.clear = function() {
    window.localStorage.clear();
};