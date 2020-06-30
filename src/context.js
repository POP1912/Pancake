// Rewritten by Rabia Alhaffar in 9/February/2020
pancake.context = {};
pancake.contexts = [];

pancake.context.create = function(canvas_index, context_index) {
    pancake.contexts[context_index] = pancake.canvases[canvas_index].getContext("2d");
};

pancake.context.use = function(canvas, context_index) {
    pancake.contexts[context_index] = canvas.getContext("2d");
    pancake.graphics.useContext(context_index);
};

pancake.context.set = function(context, context_index) {
    pancake.contexts[context_index] = context;
};
