p.st = {};
p.st.save = function(v, val) {
    window.localStorage.setItem(v, val);
};

p.st.load = function(v) {
    return window.localStorage.getItem(v);
};

p.st.remove = function(v) {
    window.localStorage.removeItem(v)
};

p.st.clear = function() {
    window.localStorage.clear();
};
