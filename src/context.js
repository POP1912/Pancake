// Written by Rabia Alhaffar in 9/February/2020
// More functions to CanvasRenderingContext2D and pancake context module
if(!CanvasRenderingContext2D.prototype.clear) 
{
    CanvasRenderingContext2D.prototype.clear = function() 
    {
        this.clearRect(0,0,this.canvas.width,this.canvas.height);
    };
}

if(!CanvasRenderingContext2D.prototype.fillCircle)
{
    CanvasRenderingContext2D.prototype.fillCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeCircle)
{
    CanvasRenderingContext2D.prototype.strokeCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillEllipse)
{
    CanvasRenderingContext2D.prototype.fillEllipse = function(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise)
    {
        this.beginPath();
        this.ellipse(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeEllipse)
{
    CanvasRenderingContext2D.prototype.strokeEllipse = function(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise)
    {
        this.beginPath();
        this.ellipse(x, y, rx, ry, rotation, start_angle, end_angle, anticlockwise);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillTriangle)
{
    CanvasRenderingContext2D.prototype.fillTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeTriangle)
{
    CanvasRenderingContext2D.prototype.strokeTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillPolygon)
{
    CanvasRenderingContext2D.prototype.fillPolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
        for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokePolygon)
{
    CanvasRenderingContext2D.prototype.strokePolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
        for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillRoundedRect)
{
    CanvasRenderingContext2D.prototype.fillRoundedRect = function(x,y,width,height,radius)
    {
        this.beginPath();
        this.moveTo(x + radius,y);
        this.lineTo(x + width - radius,y);
        this.quadraticCurveTo(x + width,y,x + width,y + radius);
        this.lineTo(x + width,y + height - radius);
        this.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
        this.lineTo(x + radius,y + height);
        this.quadraticCurveTo(x,y + height,x,y + height - radius);
        this.lineTo(x,y + radius);
        this.quadraticCurveTo(x,y,x + radius,y);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeRoundedRect)
{
    CanvasRenderingContext2D.prototype.strokeRoundedRect = function(x,y,width,height,radius)
    {
        this.beginPath();
        this.moveTo(x + radius,y);
        this.lineTo(x + width - radius,y);
        this.quadraticCurveTo(x + width,y,x + width,y + radius);
        this.lineTo(x + width,y + height - radius);
        this.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
        this.lineTo(x + radius,y + height);
        this.quadraticCurveTo(x,y + height,x,y + height - radius);
        this.lineTo(x,y + radius);
        this.quadraticCurveTo(x,y,x + radius,y);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.clearFilters) 
{
    CanvasRenderingContext2D.prototype.clearFilters = function()
    {
        this.canvas.style.filter = "none";
    };
}

if(!CanvasRenderingContext2D.prototype.fillSquare) 
{
    CanvasRenderingContext2D.prototype.fillSquare = function(x,y,size)
    {
        this.fillRect(x,y,size,size);
    };
}

if(!CanvasRenderingContext2D.prototype.strokeSquare) 
{
    CanvasRenderingContext2D.prototype.strokeSquare = function(x,y,size)
    {
        this.strokeRect(x,y,size,size);
    };
}

if(!CanvasRenderingContext2D.prototype.shear)
{
    CanvasRenderingContext2D.prototype.shear = function(sx,sy)
    {
        this.transform(1,sy,sx,1,0,0);
    };
}

if(!CanvasRenderingContext2D.prototype.line)
{
    CanvasRenderingContext2D.prototype.line = function(x1,y1,x2,y2,size)
    {
        this.lineWidth = size;
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.closePath();
        this.stroke();
    };
}

pancake.context = {};
pancake.contexts = [];

pancake.context.create = function(canvas_index, context_index) {
    pancake.contexts[context_index] = pancake.canvases[canvas_index].getContext("2d");
};

pancake.context.use = function(canvas, context_index) {
    pancake.contexts[context_index] = canvas.getContext("2d");
    pancake.graphics.useContext(context_index);
};

pancake.context.set = function(context, context_index) {
    pancake.contexts[context_index] = context;
};