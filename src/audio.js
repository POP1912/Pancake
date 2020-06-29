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
pancake.audio.load = function(src, audio_index) {
    pancake.audio_files[audio_index] = new Audio(src);
    pancake.audio_files[audio_index].loop = false;
    pancake.audio_files[audio_index].load();

};

pancake.audio.playFromIndex = function(audio_index) {
    pancake.audio_files[audio_index].play();
    if (pancake.audio_files[audio_index].loop) pancake.audio_files[audio_index].play();
};

pancake.audio.pauseFromIndex = function(audio_index) {
    pancake.audio_files[audio_index].pause();
};

pancake.audio.setVolumeFromIndex = function(volume, audio_index) {
    pancake.audio_files[audio_index].volume = volume;
};

pancake.audio.setMuteFromIndex = function(mute, audio_index) {
    pancake.audio_files[audio_index].muted = mute;
};

pancake.audio.setLoopFromIndex = function(loop, audio_index) {
    pancake.audio_files[audio_index].loop = loop;
};

pancake.audio.finishedPlayingFromIndex = function(audio_index) {
    return pancake.audio_files[audio_index].ended;
};