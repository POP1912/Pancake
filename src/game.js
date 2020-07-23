p.ga = {};

p.ga.title = function(t) {
    d.title = t;
};

p.ga.restart = function() {
    l.reload();
};

// https://stackoverflow.com/questions/12297525/exit-from-app-when-click-button-in-android-phonegap
p.ga.close = function() {
    if (n.app) {
        n.app.exitApp();
    } else if (n.device) {
        n.device.exitApp();
    } else {
        w.close();
    }
}