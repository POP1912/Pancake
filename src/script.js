pancake.script = {};
pancake.scripts = [];

pancake.script.eval = function(c) {
    window.eval(c);
};

pancake.script.load = function(src, s) {
    pancake.scripts[s] = document.createElement("script"); 
    pancake.scripts[s].src = src; 
    pancake.scripts[s].type = "text/javascript"; 
    pancake.scripts[s].defer = true; 
    document.body.appendChild(pancake.scripts[s]);
};
