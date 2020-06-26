// Pancake audio part
// NOTES: To resume playing audio use same play function,Also you can even play music or song
pancake.audio = {};
pancake.audio_files = [];
var _audio = undefined;

// Play audio from source directly
pancake.audio.play = function(src) {
    _audio = new Audio(src).play();
};

// Load audio to audio files array to play from index using functions below
pancake.audio.load = function(src, index) {
    pancake.audio_files[index] = new Audio(src);
};

pancake.audio.playFromIndex = function(index) {
    pancake.audio_files[index].load();
    pancake.audio_files[index].play();
};

pancake.audio.pauseFromIndex = function(index) {
    pancake.audio_files[index].pause();
};

pancake.audio.setVolumeFromIndex = function(volume, index) {
    pancake.audio_files[index].volume = volume;
};

pancake.audio.setMuteFromIndex = function(mute, index) {
    pancake.audio_files[index].muted = mute;
};

pancake.audio.setLoopFromIndex = function(loop, index) {
    pancake.audio_files[index].loop = loop;
};

pancake.audio.finishedPlayingFromIndex = function(index) {
    return pancake.audio_files[index].ended;
};