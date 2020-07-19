p.s = {};
p.scripts = [];

p.s.eval = function(c) {
    window.eval(c);
};

p.s.load = function(src, s) {
    p.scripts[s] = document.createElement("script"); 
    p.scripts[s].src = src; 
    p.scripts[s].type = "text/javascript"; 
    p.scripts[s].defer = true; 
    document.body.appendChild(p.scripts[s]);
};
