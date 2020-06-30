pancake.debug = {};

pancake.debug.unknown = function(variable) {
    return ((variable == undefined) || (variable == null) || (variable == NaN));
};

pancake.debug.redefine = function(variable, value) {
    if ((variable == undefined) || (variable == null) || (variable == NaN)) variable = value;
};

pancake.debug.type = function(variable) {
    return typeof(variable);
};
