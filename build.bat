rem Check if build directory exists,Else create it
if not exist "%~dp0\build" mkdir "%~dp0\build"

rem Building...
copy /b "%~dp0\src\main.js" + "%~dp0\src\browser.js" + "%~dp0\src\os.js" + "%~dp0\src\util.js" + "%~dp0\src\debug.js" + "%~dp0\src\game.js" + "%~dp0\src\canvas.js" + "%~dp0\src\context.js" + "%~dp0\src\device.js" + "%~dp0\src\input.js" + "%~dp0\src\physics.js" + "%~dp0\src\sprite.js" + "%~dp0\src\graphics.js" + "%~dp0\src\audio.js" + "%~dp0\src\video.js" + "%~dp0\src\script.js" + "%~dp0\src\storage.js" + "%~dp0\src\timers.js" + "%~dp0\src\content.js" "%~dp0\build\pancake.js"