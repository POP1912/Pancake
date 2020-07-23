p.st = {};
p.st.save = function(v, val) {
    s.setItem(v, val);
};

p.st.load = function(v) {
    return s.getItem(v);
};

p.st.remove = function(v) {
    s.removeItem(v)
};

p.st.clear = function() {
    s.clear();
};
