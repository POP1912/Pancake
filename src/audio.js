// Pancake audio part
// NOTES: To resume playing audio use same play function,Also you can even play music or song
pancake.audio = {};
pancake.audio_files = [];
var _audio = undefined;

// Play audio from source directly
pancake.audio.play = function(s) {
    _audio = new Audio(s).play();
};

// Load audio to audio files array to play from index using functions below
pancake.audio.load = function(s, a) {
    pancake.audio_files[a] = new Audio(s);
    pancake.audio_files[a].loop = false;
    pancake.audio_files[a].load();

};

pancake.audio.playFromIndex = function(a) {
    pancake.audio_files[a].play();
    if (pancake.audio_files[a].loop) pancake.audio_files[a].play();
};

pancake.audio.pauseFromIndex = function(a) {
    pancake.audio_files[a].pause();
};

pancake.audio.setVolumeFromIndex = function(v, a) {
    pancake.audio_files[a].volume = v;
};

pancake.audio.setMuteFromIndex = function(m, a) {
    pancake.audio_files[a].muted = m;
};

pancake.audio.setLoopFromIndex = function(l, a) {
    pancake.audio_files[a].loop = l;
};

pancake.audio.finishedPlayingFromIndex = function(a) {
    return pancake.audio_files[a].ended;
};
