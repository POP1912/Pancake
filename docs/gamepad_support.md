# Gamepad support for Pancake
Gamepad API is supported in major browsers (Except IE 11) and most gamepads,Pancake using Gamepad API for gamepad controls

## How to use?
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Pancake Gamepad</title>
    </head>
    <body>
        <script src="path/to/pancake.js"></script>
        <script>

            function game() {
                // Check if gamepad with index 0 (First gamepad) is connected
                if (pancake.input.gamepadConnected(0)) {

                    // Check if X button pressed on gamepad with index 0
                    // Works on both PS4/PS3 and XBOX gamepads
                    if (pancake.input.gamepadButtonPressed(pancake.input.button.XBOX_X,0) || 
                        pancake.input.gamepadButtonPressed(pancake.input.button.PLAYSTATION_X,0)) {

                        window.alert("Gamepad input works!!!");
                        console.info("Gamepad is working,WOW!!!");

                    }
                }

                // We need to prevent input loop when input gives true,Use this line below
                pancake.input.preventLoop();
            }

            var gameloop = pancake.timers.timer(game,120); // 120 frames per second
        </script>
    </body>
</html>
```

## NOTES
1. X gamepad button is the only gamepad button that has variants
2. Gamepad input does not works on Internet Explorer,It's recommended to use `try` and `catch` in case you want to use it
3. Sometimes gamepad connected but browser gives error that is not connected or gamepad input doesn't works,In this case try to remove the controller and plug it again,Or...Keep pressing buttons until works
4. Gamepad analogs are also supported,But to check which direction you will give both analog direction and direction string (Uppercase string contains direction),See `input_04.html` in examples folder to find more about this