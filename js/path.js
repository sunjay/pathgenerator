function Path() {
  this.verts = [];
}

Path.prototype.add = function(point) {
  this.verts.push(point);
  return this;
};
