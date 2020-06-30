pancake.script = {};
pancake.scripts = [];

pancake.script.eval = function(code) {
    window.eval(code);
};

pancake.script.load = function(src, script_index) {
    pancake.scripts[script_index] = document.createElement("script"); 
    pancake.scripts[script_index].src = src; 
    pancake.scripts[script_index].type = "text/javascript"; 
    pancake.scripts[script_index].defer = true; 
    document.body.appendChild(pancake.scripts[script_index]);
};
