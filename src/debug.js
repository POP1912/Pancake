pancake.debug = {};

pancake.debug.unknown = function(v) {
    return ((v == undefined) || (v == null) || (v == NaN));
};

pancake.debug.redefine = function(v, val) {
    if ((v == undefined) || (v == null) || (v == NaN)) v = val;
};

pancake.debug.type = function(v) {
    return typeof(v);
};
