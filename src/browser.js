p.b = {};
p.b.s = {};
p.b.CHROME = navigator.userAgent.match("Chrome") != null;
p.b.FIREFOX = navigator.userAgent.match("Firefox") != null;
p.b.OPERA = navigator.userAgent.match("OPR") != null;
p.b.SAFARI = navigator.userAgent.match("Safari") != null;
p.b.EDGE = navigator.userAgent.match("Edg") != null;
p.b.IE = navigator.userAgent.match("Trident") != null;
p.b.MAXTHON = navigator.userAgent.match("Maxthon") != null;
p.b.SAMSUNG_INTERNET = navigator.userAgent.match("SamsungBrowser") != null;
p.b.SEAMONKEY = navigator.userAgent.match("SeaMonkey") != null;

p.b.s.CANVAS = function() {
    return (!!(document.createElement("canvas").getContext) && (document.createElement("canvas").getContext("2d"))) != null;
};

p.b.s.MP3 = function() {
    return document.createElement("audio").canPlayType("audio/mp3") != "";
};

p.b.s.MPEG = function() {
    return document.createElement("audio").canPlayType("audio/mpeg") != "";
};

p.b.s.MP4 = function() {
    return document.createElement("video").canPlayType("video/mp4") != "";
};

p.b.s.OGG = function() {
    return document.createElement("audio").canPlayType("audio/ogg") != "";
};

p.b.s.WAV = function() {
    return document.createElement("audio").canPlayType("audio/wav") != "";
};

p.b.s.WEBM = function() {
    return document.createElement("video").canPlayType("video/webm") != "";
};

p.b.s.GAMEPAD = function() {
    return "getGamepads" in window.navigator;
};

p.b.open = function(u) {
    window.open(u);
};
