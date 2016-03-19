// A closed shape
function Shape(points, box) {
  if (points.length < 3) {
    throw new Error('Do not create a shape with less than 3 points');
  }

  this.verts = points;
  this.box = box;

  var prev = points[points.length - 1];
  var firstEdge;
  var prevEdge = null;
  this.edges = points.map(function(point) {
    var edge = new Edge(prev, point);
    edge.isBoundary = this.box.onBox(edge);

    if (!prevEdge) {
      firstEdge = edge;
    }
    else {
      prevEdge.adjacents.push(edge);
      edge.adjacents.push(prevEdge);
    }

    prevEdge = edge;
    prev = point;
    return edge;
  });

  var lastEdge = this.edges[this.edges.length - 1];
  firstEdge.adjacents.push(lastEdge);
  lastEdge.adjacents.push(firstEdge);

  this.boundaryEdges = this.edges.filter(function(e) {return e.isBoundary});
}

Shape.prototype.edgePath = function(start, next, target) {
  var path = new Path();

  var prev = start;
  var current = next;
  while (!prev.equals(target)) {
    path.add(prev.commonPoint(current));

    var adjacents = current.adjacents;
    var tmp = current;
    current = adjacents[0].equals(prev) ? adjacents[1] : adjacents[0];
    prev = tmp;
  }

  return path;
};

