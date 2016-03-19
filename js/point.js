function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y;
};
