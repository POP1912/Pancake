p.b = {};
p.b.s = {};
p.b.CHROME = ua.match("Chrome") != null;
p.b.FIREFOX = ua.match("Firefox") != null;
p.b.OPERA = ua.match("OPR") != null;
p.b.SAFARI = ua.match("Safari") != null;
p.b.EDGE = ua.match("Edg") != null;
p.b.IE = ua.match("Trident") != null;
p.b.MAXTHON = ua.match("Maxthon") != null;
p.b.SAMSUNG_INTERNET = ua.match("SamsungBrowser") != null;
p.b.SEAMONKEY = ua.match("SeaMonkey") != null;

p.b.s.WEBGL = function() {
    return (!!(d.createElement("canvas").getContext) && (d.createElement("canvas").getContext("experimental-webgl") || d.createElement("canvas").getContext("webgl"))) != null;
};

p.b.s.CANVAS = function() {
    return (!!(d.createElement("canvas").getContext) && (d.createElement("canvas").getContext("2d"))) != null;
};

p.b.s.MP3 = function() {
    return d.createElement("audio").canPlayType("audio/mp3") != "";
};

p.b.s.MPEG = function() {
    return d.createElement("audio").canPlayType("audio/mpeg") != "";
};

p.b.s.MP4 = function() {
    return d.createElement("video").canPlayType("video/mp4") != "";
};

p.b.s.OGG = function() {
    return d.createElement("audio").canPlayType("audio/ogg") != "";
};

p.b.s.WAV = function() {
    return d.createElement("audio").canPlayType("audio/wav") != "";
};

p.b.s.WEBM = function() {
    return d.createElement("video").canPlayType("video/webm") != "";
};

p.b.s.GAMEPAD = function() {
    return "getGamepads" in n;
};

p.b.open = function(u) {
    w.open(u);
};

p.b.supports = function(s) {
    return p.b.s[s]();
};