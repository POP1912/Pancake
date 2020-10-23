# WebGL with Pancake

Pancake in version v0.0.12 features a WebGL layer that can be used...

### Source

Later, The WebGL layer extended and turned into [`polygl.js`](https://github.com/Rabios/polygl.js), And anyone can use it as standalone library!

### NOTES

1. Some functions still use `CanvasRenderingContext2D` backend, But before creating context you can disable them by using `pancake.graphics.ctx2d_enabled = false;`
2. Max line width is 1 in WebGL, But if bigger it will set for `CanvasRenderingContext2D` backend...
3. Antialiasing does not have quality in WebGL!
4. Drawing video is experimental in WebGL...
5. WebGL functions might not documented as they are intended to be used as internal functions in Pancake.
6. HSL and HSLA colors are converted to RGB and RGBA for use in WebGL!