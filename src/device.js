pancake.device = {};
pancake.device.screen_height = screen.height;
pancake.device.screen_width = screen.width;

pancake.device.online = function() {
  var xhr = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
  xhr.open("HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false);
  try {
    xhr.send();
    return (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304));
  } catch (error) {
    return false;
  }
};

pancake.device.vibrate = function(pattern) {
    window.navigator.vibrate(pattern);
};

pancake.device.stopVibrating = function() {
    window.navigator.vibrate(0);
};