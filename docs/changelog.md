# Changelog

### v0.0.11
1. Added `pancake.game.close()` back so you can close game if opened by script,Or if you use Phonegab or Apache Cordova (In case you linked their script to game HTML file)
2. Optimized the framework for the third time
3. Updated video and audio examples to check if video and audio playing supported
4. Improved browser and OS examples

> CAUTION: If you are developing a game that focuses on frame rates,Do not use `pancake.timers.second` as it's not accurate in counting a second
 
> NOTES: This might be the last update for Pancake,So i maybe add tutorials or more docs if i would,But no updates for the framework source code as it's enough

### v0.0.10
1. Optimized the framework for the second time
2. Fixed example `graphics_04.html` (Changing color mode example),Where color mode doesn't change

> That's all,Thanks for support!

### v0.0.9
1. Optimized the framework for the first time

> TODO: Optimize Pancake for the second time

### v0.0.8
1. Added `pancake.graphics.shadow(color, blur)` to apply shadows in-game when drawing shapes

> TODO: Optimizing

### v0.0.7
1. Removed `pancake.graphics.resize()` but let canvas used by `pancake.canvas.set()` in case you used a canvas using `pancake.context.use()` 
2. Better fullscreen check and better fullscreen functionality
3. Added ability to detect SeaMonkey browser,And Maxthon browser (In case developer didn't changed `navigator.userAgent` from Maxthon browser settings)
4. Improved games,And also improved some examples

> TODO: Optimize Pancake to become smaller,That doesn't means i will remove content

### v0.0.6
1. Added content feature to load JSON content and parse it
2. Added more operating systems and browsers to detect
3. Optimized gamepad detection
4. Added `pancake.graphics.resize()` So you can resize current canvas easily without setting canvas index if it were used from HTML `<canvas>` tags
5. Added `pancake.physics.getDistance()` To get distance from position to another
6. Fixed problem when video and audio not looping if loop set to true
7. Fixed problem mouse pointer not locked in canvas element
8. Fixed lock pointer problems
9. Fixed problem swiping doesn't works

For more info check the [API](https://github.com/Rabios/Pancake/blob/master/docs/api.md)

### v0.0.5
1. Fixed some problems related to touch support
2. Now functions of drawing shapes integrated with `pancake.graphics` instead of adding them to `CanvasRenderingContext2D.prototype`,To let framework take smaller size with same result
3. Removed `pancake.game.close()` (Same as `window.close()` it gives warning)
4. Improved touch
5. Added video features,Check the [API](https://github.com/Rabios/Pancake/blob/master/docs/api.md) again

### v0.0.4
1. Added `pancake.graphics.fullscreen()` to check if game is in fullscreen
2. Set keyboard input to use `KeyboardEvent.keyCode` instead of `KeyboardEvent.key`
3. Fixed problem that some examples can't run offline on internet explorer cause of `localStorage`
   
### v0.0.3
1. Renamed `pancake.timers.animate()` to `window.animate()` cause of TypeError
2. Added new game: Snake 
3. Resize canvas to fit screen when toggling fullscreen mode
4. Added ability use `pancake.graphics.screenshot()` on a specified canvas (you just need to add canvas index as first parameter)
5. Removed `pancake.graphics.setResolution()`

### v0.0.2
1. Removed `pancake.device.online()` cause of incompatibility with Google Chrome and some browsers
2. Improved scrolling
3. Added `pancake.util.randomBetween(a, b)`
4. Added `pancake.timers.second`

### v0.0.1
First release,Looking for bugs to smash it!!!