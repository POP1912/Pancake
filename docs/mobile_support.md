# Mobile support for Pancake
At the meantime,Tapping and swiping is supported by pancake so i think you can have your time developing games

## How to use?
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Pancake - Touch 'n Click</title>
    </head>
    <body>
        <p>Click or touch the canvas to see in action</p>
        <!-- This time,I set canvas background color using style attribute -->
        <canvas id="canvas" style="background-color: black;" width="400" height="400"></canvas>
        <script src="../build/pancake.js"></script>
        <script>
            // NOTES: If you see a bug or problem in touch,Please report in GitHub issues
            pancake.context.use(document.getElementById("canvas"), 0);

            function game() {
                // Clear
                pancake.graphics.clear();

                // If tapped or clicked on canvas
                if (pancake.input.tap || pancake.input.click) alert("Works!!!");
                
                // If swiped to up
                // Use "UP" or "DOWN" or "LEFT" or "RIGHT"
                if (pancake.input.swipe("UP")) alert("Swiped up!!!");

                // This line below used to prevent input loop
                pancake.input.preventLoop();
            }

            var gameloop = pancake.timers.timer(game, 120);
        </script>
    </body>
</html>
```
## NOTES
1. If you're developing from mobile,Use Mozilla Firefox or Spck editor instead of Google Chrome cause Mozilla Firefox can allow file system,Plus i developed Pancake on Mozilla Firefox,NOT Google Chrome (It works in Chrome but not on mobile i think so).
2. Touch and swipe are emulated on PC with mouse