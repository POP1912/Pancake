# Pancake
Lightweight,Fast,And easy-to-use HTML5 game programming library/Game framework for all purposes

Pancake is successor of [Cake game engine](https://github.com/Cake-Engine/Cake)

Pancake inspired by LOVE,Pygame,And even AppGameKit and it shares some of their concepts

## Features
- Shares concepts of most lovable frameworks like LOVE,Pygame,And AppGameKit
- Easy and simple to setup
- Free,Moddable and Open-Source
- Fast,Lightweight,And thin in one pack (All in over 40kb, Minimifed version over 30kb)
- Every part needed is written without dependencies,From OS detection to gamepad support
- Using `CanvasRenderingContext2D` as it's graphics core
- Collision detection physics
- Audio based on WebAudio API
- Supports browsers that can't run ES6 (Internet Explorer >= 9 for example)
- Using indexes,Which can be good for ordering sometimes,And gives easy control of game content
 
## Examples
- Creating a game canvas
```javascript
// Create canvas with both width and height of 600,And set it's index to 0
pancake.canvas.create(600, 600, 0);

// Create context with index 0 and set to use canvas that has index 0
// And set graphics to use context with index 0
pancake.context.create(0, 0);
pancake.graphics.useContext(0);
```

- Drawing text
```javascript
// Create canvas with both width and height of 600,And set it's index to 0
pancake.canvas.create(600, 600, 0);

// Create context with index 0 and set to use canvas that has index 0
// And set graphics to use context with index 0
pancake.context.create(0, 0);
pancake.graphics.useContext(0);

// We can set font and it's size in pixels
pancake.graphics.setFont("Arial", 22);

// Draw text
pancake.graphics.text("Hello Pancake", 10, 10);
```

- Drawing shapes
```javascript
// Create canvas with both width and height of 600,And set it's index to 0
pancake.canvas.create(800, 800, 0);

// Create context with index 0 and set to use canvas that has index 0
// And set graphics to use context with index 0
pancake.context.create(0, 0);
pancake.graphics.useContext(0);

// Draw rectangle with red color
pancake.graphics.color("red");
pancake.graphics.rect(100, 100, 50, 50);

// Draw circle with radius of 50 and orange color
pancake.graphics.color("orange");
pancake.graphics.circle(200, 200, 50);

// Draw line with width of 5 and yellow color
pancake.graphics.color("yellow");
pancake.graphics.line(100, 100, 200, 200, 5);

// Set drawing mode to stroke
pancake.graphics.mode = pancake.graphics.STROKE;

// Draw triangle with green color
pancake.graphics.color("green");
pancake.graphics.triangle(500, 50, 600, 50, 500, 150);

// Draw polygon with points and blue color
pancake.graphics.color("blue");

// From 200, 200 to 200, 300
pancake.graphics.polygon([ [ 200, 200 ],
                           [ 200, 300 ],
                           [ 300, 350 ],
                           [ 200, 200 ] ]);
```

- Playing Audio
```javascript
// When audio loaded, Play it directly
pancake.audio.play("game.mp3");

// Load audio file to index 0
pancake.audio.load("loaded.mp3", 0);

// Plays loaded.mp3
pancake.audio.playFromIndex(0);

// Pauses loaded.mp3
pancake.audio.pauseFromIndex(0);

// Resumes loaded.mp3
pancake.audio.playFromIndex(0);
```

- Saving variables
```javascript
// Save score to localStorage variable "score"
pancake.storage.save("score", Number(0));

// Load it,It gives score value which is 0
var score = pancake.storage.load("score");
```

- Physics + Game Loop
```javascript
var playercolor = "blue";

// Use a HTML <canvas> tags that has ID "canvas"
// And set index of the context that will use it to 0
pancake.context.use(document.getElementById("canvas"), 0);

// Create 2 rectangles objects
var rect1 = { x: 100, y: 100, w: 50, h: 50 };
var rect2 = { x: 125, y: 125, w: 50, h: 50 };

function game() {
    // Clear canvas
    pancake.graphics.clear();

    // Draw first rectangle
    pancake.graphics.color(playercolor);
    pancake.graphics.rect(rect1.x, rect1.y, rect1.w, rect1.h);
    
    // Draw second rectangle
    pancake.graphics.color("green");
    pancake.graphics.rect(rect2.x, rect2.y, rect2.w, rect2.h);

    // Check collision between both 2 rectangles
    // If true then change color of first rectangle
    // Else then reset it's color to the default color
    if (pancake.physics.checkCollisionRect(rect1.x, rect1.y, rect1.w, rect1.h, rect2.x, rect2.y, rect2.w, rect2.h)) {
        playercolor = "red";
    } else {
        playercolor = "blue";
    }
    
}

var gameloop = pancake.timers.timer(game, 120); // Set frames per second to 120
```

- Keyboard + Game Loop
```javascript
function game() {
    // If key pressed
    if (pancake.input.keypress(pancake.input.key.Z)) alert("Key pressed");

    // If key down
    if (pancake.input.keydown(pancake.input.key.X)) alert("Key down");

    // If key up
    if (pancake.input.keyup(pancake.input.key.C)) alert("Key up");

    // Needed to prevent input loop
    pancake.input.preventLoop();
}

var gameloop = pancake.timers.timer(game, 120); // Set frames per second to 120
```

> NOTES: More examples can be found in the [Examples folder]()

## Build

> NOTES: Pancake is prebuilt but if you are modify the source then you will need to rebuild it using `build.py`

To build Pancake and to run it's tools you need Python,Although Pancake can run offline as single library

```
mkdir pancake
cd pancake
git clone https://github.com/Rabios/Pancake.git
python build.py
```
A folder named `build` will created (if not exist) in the repository folders,Containing `pancake.js`,Which is the full build

## License
```
Copyright (c) 2020 - 2021 Rabia Alhaffar and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```