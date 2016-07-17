function Path() {
  this.verts = [];

  this.size = 0;
}

Path.prototype.add = function(point) {
  this.verts.push(point);

  if (this.verts.length > 1) {
    this.size += this.verts[this.verts.length - 2].distanceTo(point);
  }
  return this;
};

// Linearly interpolate (t = 0.0 to 1.0)
Path.prototype.lerp = function(time) {
  var target = this.size * time;
  if (target === 0) {
    return this.verts[0];
  }

  var maxBound;
  var minBound = this.verts[0];

  var distance;
  var totalDistance = 0;
  for (var i = 1; i < this.verts.length; i++) {
    var point = this.verts[i];
    distance = minBound.distanceTo(point);
    totalDistance += distance;

    if (totalDistance >= target) {
      maxBound = point;
      break;
    }

    minBound = point;
  }

  if (target === totalDistance) {
    return maxBound;
  }

  console.log(time, distance, totalDistance, this.size, (totalDistance - distance) / this.size);
  var remaining = time - (totalDistance - distance) / this.size;

  var distanceRemaining = distance * remaining;
  var norm = maxBound.sub(minBound);
  norm = norm.divide(norm.magnitude());

  var result = norm.multiply(distanceRemaining);
  return result;
};

