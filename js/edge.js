function Edge(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
  this.isBoundary = false;
  this.adjacents = [];
}

Edge.prototype.equals = function(other) {
  return (
    (this.p1.equals(other.p1) && this.p2.equals(other.p2)) ||
    (this.p1.equals(other.p2) && this.p2.equals(other.p1))
  );
};

Edge.prototype.commonPoint = function(other) {
  if (this.p1.equals(other.p1) || this.p1.equals(other.p2)) {
    return this.p1;
  }
  if (this.p2.equals(other.p1) || this.p2.equals(other.p2)) {
    return this.p2;
  }
};

