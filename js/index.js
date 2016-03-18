var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var shape = [
  new Point(60, 400),
  new Point(70, 280),
  new Point(90, 180),
  new Point(120, 120),
  new Point(220, 60),
  new Point(300, 45),
  new Point(400, 40),
  new Point(400, 140),
  new Point(300, 160),
  new Point(240, 190),
  new Point(200, 240),
  new Point(170, 320),
  new Point(160, 400),
];

function drawShape(shape) {
  ctx.strokeStyle = 'green';
  ctx.fillStyle = 'rgba(191, 255, 178, 0.48)';

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(shape[0].x, shape[0].y);
  shape.slice(1).forEach(function(point) {
    ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'black';
  shape.forEach(function(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  });
}
drawShape(shape);
