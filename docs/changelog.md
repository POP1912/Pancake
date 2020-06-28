# Changelog

### v0.0.5
1. Fixed some problems related to touch
2. Now functions of drawing shapes integrated with `pancake.graphics` instead of adding them to `CanvasRenderingContext2D.prototype`,To let framework take smaller size with same result
3. Removed `pancake.game.close()` (Same as `window.close()` it gives warning)
4. Improved touch
5. Added video features,Check the API again

### v0.0.4
1. Added `pancake.graphics.fullscreen()` to check if game is in fullscreen
2. Set keyboard input to use `KeyboardEvent.keyCode` instead of `KeyboardEvent.key`
3. Fixed problem that some examples can't run offline on internet explorer cause of `localStorage`
   
### v0.0.3
1. Renamed `pancake.timers.animate()` to `window.animate()` cause of TypeError
2. Added new game: Snake 
3. Resize canvas to fit screen when toggling fullscreen mode
4. Added ability use `pancake.graphics.screenshot()` on a specified canvas (you just need to add canvas index as first parameter)
5. Removed `pancake.graphics.setResolution()` (Resolution is ignored on mobile)

### v0.0.2
1. Removed `pancake.device.online()` cause of incompatibility with Google Chrome and some browsers
2. Improved scrolling
3. Added `pancake.util.randomBetween(a, b)`
4. Added `pancake.timers.second`

### v0.0.1
First release,Looking for bugs to smash it!!!