pancake.video = {};
pancake.videos = [];
var _video = undefined;

pancake.video.load = function(src, video_index) {
    pancake.videos[video_index] = document.createElement("video");
    pancake.videos[video_index].src = src;
    pancake.videos[video_index].autoplay = true;
    pancake.videos[video_index].load();
};

pancake.video.play = function(video_index, x, y, w, h) {
    if (pancake.debug.unknown(x)) x = 0;
    if (pancake.debug.unknown(y)) y = 0;
    if (pancake.debug.unknown(w)) w = pancake.graphics.context.canvas.width;
    if (pancake.debug.unknown(h)) h = pancake.graphics.context.canvas.height;
    if (!pancake.videos[video_index].ended) {
        pancake.graphics.image(pancake.videos[video_index], x, y, w, h);
        pancake.videos[video_index].play();
    }
};

pancake.video.pause = function(video_index) {
    pancake.videos[video_index].pause();
};

pancake.video.setVolume = function(volume, video_index) {
    pancake.videos[video_index].volume = volume;
};

pancake.video.setMute = function(mute, video_index) {
    pancake.videos[video_index].muted = mute;
};

pancake.video.setLoop = function(loop, video_index) {
    pancake.videos[video_index].loop = loop;
};

pancake.video.finished = function(video_index) {
    return pancake.videos[video_index].ended;
};