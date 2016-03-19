function drawShape(shape) {
  ctx.strokeStyle = 'green';
  ctx.fillStyle = 'rgba(191, 255, 178, 0.48)';

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(shape.verts[0].x, shape.verts[0].y);
  shape.verts.slice(1).forEach(function(point) {
    ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'black';
  shape.verts.forEach(function(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  });
}

function drawPath(path) {
  if (!path.verts.length) {
    return;
  }

  ctx.strokeStyle = 'red';

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(path.verts[0].x, path.verts[0].y);
  path.verts.slice(1).forEach(function(point) {
    ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'black';
  path.verts.forEach(function(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  });
}

