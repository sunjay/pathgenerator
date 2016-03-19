function Box(topLeft, bottomRight) {
  this.topLeft = topLeft;
  this.bottomRight = bottomRight;
}

Box.prototype.onBox = function(edge) {
  return (
    (edge.p1.x === this.topLeft.x && edge.p2.x === this.topLeft.x) ||
    (edge.p1.y === this.topLeft.y && edge.p2.y === this.topLeft.y) ||
    (edge.p1.x === this.bottomRight.x && edge.p2.x === this.bottomRight.x) ||
    (edge.p1.y === this.bottomRight.y && edge.p2.y === this.bottomRight.y)
  );
};
