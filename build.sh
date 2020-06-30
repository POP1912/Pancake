# Check if build directory exists,Else create it
mkdir -p $PWD/build

# Building...
cat $PWD/src/main.js $PWD/src/browser.js $PWD/src/os.js $PWD/src/util.js $PWD/src/debug.js $PWD/src/game.js $PWD/src/canvas.js $PWD/src/context.js $PWD/src/device.js $PWD/src/input.js $PWD/src/physics.js $PWD/src/sprite.js $PWD/src/graphics.js $PWD/src/audio.js $PWD/src/video.js $PWD/src/script.js $PWD/src/storage.js $PWD/src/timers.js $PWD/src/content.js > $PWD/build/pancake.js