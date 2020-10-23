p.s = {};
p.scripts = [];

p.s.eval = function(c) {
    w.eval(c);
};

p.s.load = function(src, s) {
    p.scripts[s] = d.createElement("script"); 
    p.scripts[s].src = src; 
    p.scripts[s].type = "text/javascript"; 
    p.scripts[s].defer = true; 
    b.appendChild(p.scripts[s]);
};
