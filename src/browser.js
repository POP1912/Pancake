pancake.browser = {};
pancake.browser.support = {};
pancake.browser.CHROME = navigator.userAgent.match("Chrome") != null;
pancake.browser.FIREFOX = navigator.userAgent.match("Firefox") != null;
pancake.browser.OPERA = navigator.userAgent.match("OPR") != null;
pancake.browser.SAFARI = navigator.userAgent.match("Safari") != null;
pancake.browser.EDGE = navigator.userAgent.match("Edg") != null;
pancake.browser.IE = navigator.userAgent.match("Trident") != null;
pancake.browser.MAXTHON = navigator.userAgent.match("Maxthon") != null;
pancake.browser.SAMSUNG_INTERNET = navigator.userAgent.match("SamsungBrowser") != null;
pancake.browser.SEAMONKEY = navigator.userAgent.match("SeaMonkey") != null;

pancake.browser.support.CANVAS = function() {
    return (!!(document.createElement("canvas").getContext) && (document.createElement("canvas").getContext("2d"))) != null;
};

pancake.browser.support.MP3 = function() {
    return document.createElement("audio").canPlayType("audio/mp3") != "";
};

pancake.browser.support.MPEG = function() {
    return document.createElement("audio").canPlayType("audio/mpeg") != "";
};

pancake.browser.support.MP4 = function() {
    return document.createElement("video").canPlayType("video/mp4") != "";
};

pancake.browser.support.OGG = function() {
    return document.createElement("audio").canPlayType("audio/ogg") != "";
};

pancake.browser.support.WAV = function() {
    return document.createElement("audio").canPlayType("audio/wav") != "";
};

pancake.browser.support.WEBM = function() {
    return document.createElement("video").canPlayType("video/webm") != "";
};

pancake.browser.support.GAMEPAD = function() {
    return "getGamepads" in window.navigator;
};

pancake.browser.open = function(url) {
    window.open(url);
};
