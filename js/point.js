function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y;
};

Point.prototype.distanceTo = function(other) {
  return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
};

Point.prototype.average = function(other) {
  return new Point(this.x + other.x, this.y + other.y).divide(2);
};

Point.prototype.divide = function(n) {
  return new Point(this.x / 2, this.y / 2);
};

