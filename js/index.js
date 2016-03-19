var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var box = new Box(new Point(0, 0), new Point(400, 400));
var shape = new Shape([
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
], box);

var path;
update();

function render() {
  drawShape(shape);
  drawPath(path);
}

function clearView() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clearView();

  path = generatePath(shape);

  render();
}

