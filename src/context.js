// Rewritten by Rabia Alhaffar in 9/February/2020
pancake.context = {};
pancake.contexts = [];

pancake.context.create = function(c, co) {
    pancake.contexts[co] = pancake.canvases[c].getContext("2d");
};

pancake.context.use = function(c, co) {
    pancake.contexts[co] = canvas.getContext("2d");
    pancake.graphics.useContext(co);
    pancake.canvas.set(c, co);
};

pancake.context.set = function(nco, co) {
    pancake.contexts[co] = nco;
};
