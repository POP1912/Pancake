pancake.debug = {};

pancake.debug.unknown = function(variable) {
    if ((variable == undefined) || (variable == null) || (variable == NaN)) return true;
};

pancake.debug.redefine = function(variable, value) {
    if ((variable == undefined) || (variable == null) || (variable == NaN)) variable = value;
};

pancake.debug.type = function(variable) {
    return typeof(variable);
};