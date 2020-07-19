// Pancake audio part
// NOTES: To resume playing audio use same play function,Also you can even play music or song
p.a = {};
p.audio_files = [];
var _audio = undefined;

// Play audio from source directly
p.a.play = function(s) {
    _audio = new Audio(s).play();
};

// Load audio to audio files array to play from index using functions below
p.a.load = function(s, a) {
    p.audio_files[a] = new Audio(s);
    p.audio_files[a].loop = false;
    p.audio_files[a].load();

};

p.a.playFromIndex = function(a) {
    p.audio_files[a].play();
    if (p.audio_files[a].loop) p.audio_files[a].play();
};

p.a.pauseFromIndex = function(a) {
    p.audio_files[a].pause();
};

p.a.setVolumeFromIndex = function(v, a) {
    p.audio_files[a].volume = v;
};

p.a.setMuteFromIndex = function(m, a) {
    p.audio_files[a].muted = m;
};

p.a.setLoopFromIndex = function(l, a) {
    p.audio_files[a].loop = l;
};

p.a.finishedPlayingFromIndex = function(a) {
    return p.audio_files[a].ended;
};
