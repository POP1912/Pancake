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

pancake.physics.checkCollisionCircleLine = function(x, y, r, fx, fy, tx, ty) {
    var dist;
    var u = ((x - fx) * (tx - fx) + (y - fy) * (ty - fy)) / ((ty - fy) * (ty - fy) + (tx - fx) * (tx - fx));
    if (u >= 0 && u <= 1) dist = Math.pow((fx + (tx - fx) * u - x),2) + Math.pow((fy + (ty - fy) * u - y),2);
    else {
        if (u < 0) dist = Math.pow((fx - x),2) + Math.pow((fy - y),2);
        else dist = Math.pow((tx - x),2) + Math.pow((ty - y),2);
    }
    if (dist < Math.pow(r,2)) return true;
};

// Collision with canvas sides
// NOTES: As shape info in array,Here is following bellow
// [ x, y, width, height ] for rectangle
// [ x1, y1, radius, speedX, speedY ] for circle
pancake.physics.checkCollisionLeftCanvas = function(s) {
    if (s.length == 4) return s[0] <= s[2] * 0.5;
    if (s.length == 5) return s[0] + s[3] < s[2];
};

pancake.physics.checkCollisionRightCanvas = function(s, c) {
    if (s.length == 4) return s[0] + s[2] >= pancake.canvases[c].width + s[2] * 0.5;
    if (s.length == 5) return s[0] + s[3] > pancake.canvases[c].width - s[2];
};

pancake.physics.checkCollisionTopCanvas = function(s) {
    if (s.length == 4) return s[1] <= s[3] * 0.5;
    if (s.length == 5) return s[1] + s[4] < s[2];
};

pancake.physics.checkCollisionBottomCanvas = function(s, c) {
    if (s.length == 4) return s[1] + s[3] >= pancake.canvases[c].height + s[3] * 0.5;
    if (s.length == 5) return s[1] + s[4] > pancake.canvases[c].height - s[2];
};

pancake.physics.distanceBetween = function(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
};

// Distance are stored in pancake.physics.distance_x and pancake.physics_distance_y
pancake.physics.getDistance = function(x1, y1, x2, y2) {
    pancake.physics.distance_x = x2 - x1;
    pancake.physics.distance_y = y2 - y1;
};
