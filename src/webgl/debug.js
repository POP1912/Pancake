p.d = {};

p.d.unknown = function(v) {
    return ((v == undefined) || (v == null) || (v == NaN));
};

p.d.redefine = function(v, val) {
    if ((v == undefined) || (v == null) || (v == NaN)) v = val;
};

p.d.type = function(v) {
    return typeof(v);
};
