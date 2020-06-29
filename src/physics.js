pancake.physics = {};
pancake.physics.distance_x = undefined;
pancake.physics.distance_y = undefined;

pancake.physics.checkCollisionRect = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
};

pancake.physics.checkCollisionCircle = function(x1, y1, r1, x2, y2, r2) {
    return (Math.sqrt((x1 - x2 * x1 - x2) + (y1 + y2 * y1 + y2)) < r1 + r2);
};

pancake.physics.checkCollisionCircleRect = function(x1, y1, r, x2, y2, w, h) {
    if (Math.abs(x1 - x2 - w / 2) > (w / 2 + r) || Math.abs(y1 - y2 - h / 2) > (h / 2 + r)) { return false; }
	if (Math.abs(x1 - x2 - w / 2) <= (w / 2) || Math.abs(y1 - y2 - h / 2) <= (h / 2)) { return true; }
    return (Math.abs(x1 - x2 - w / 2) - w / 2 * Math.abs(x1 - x2 - w / 2) - w / 2 + Math.abs(y1 - y2 - h / 2) - h / 2 * Math.abs(y1 - y2 - h / 2) - h / 2 <= Math.pow(r,2));
};

pancake.physics.checkCollisionCircleLine = function(x, y, r, line_from_x, line_from_y, line_to_x, line_to_y) {
    var dist;
    var v1x = line_to_x - line_from_x;
    var v1y = line_to_y - line_from_y;
    var v2x = x - line_from_x;
    var v2y = y - line_from_y;
    var u = (v2x * v1x + v2y * v1y) / (v1y * v1y + v1x * v1x);
    if (u >= 0 && u <= 1) dist = Math.pow((line_from_x + v1x * u - x),2) + Math.pow((line_from_y + v1y * u - y),2);
    else {
        if (u < 0) dist = Math.pow((line_from_x - x),2) + Math.pow((line_from_y - y),2);
        else dist = Math.pow((line_to_x - x),2) + Math.pow((line_to_y - y),2);
    }
    if (dist < Math.pow(r,2)) return true;
};

// Collision with canvas sides
// NOTES: As shape info in array,Here is following bellow
// [ x, y, width, height ] for rectangle
// [ x1, y1, radius, speedX, speedY ] for circle
pancake.physics.checkCollisionLeftCanvas = function(shape) {
    if (shape.length == 4) return shape[0] <= shape[2] * 0.5;
    if (shape.length == 5) return shape[0] + shape[3] < shape[2];
};

pancake.physics.checkCollisionRightCanvas = function(shape, canvas_index) {
    if (shape.length == 4) return shape[0] + shape[2] >= pancake.canvases[canvas_index].width + shape[2] * 0.5;
    if (shape.length == 5) return shape[0] + shape[3] > pancake.canvases[canvas_index].width - shape[2];
};

pancake.physics.checkCollisionTopCanvas = function(shape) {
    if (shape.length == 4) return shape[1] <= shape[3] * 0.5;
    if (shape.length == 5) return shape[1] + shape[4] < shape[2];
};

pancake.physics.checkCollisionBottomCanvas = function(shape, canvas_index) {
    if (shape.length == 4) return shape[1] + shape[3] >= pancake.canvases[canvas_index].height + shape[3] * 0.5;
    if (shape.length == 5) return shape[1] + shape[4] > pancake.canvases[canvas_index].height - shape[2];
};

pancake.physics.distanceBetween = function(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
};

// Distance are stored in pancake.physics.distance_x and pancake.physics_distance_y
pancake.physics.getDistance = function(x1, y1, x2, y2) {
    pancake.physics.distance_x = x2 - x1;
    pancake.physics.distance_y = y2 - y1;
};