function generatePath(shape, angleThreshold) {
  if (shape.boundaryEdges.length !== 2) {
    throw new Error('Anything other than 2 boundary edges not supported');
  }

  // With more than two boundary edges, we'll have to target the edge from
  // the start edge with some algorithm and run this multiple times until
  // all boundary edges have been hit
  var startEdge = shape.boundaryEdges[0];
  var targetEdge = shape.boundaryEdges[1];

  var edgePath1 = shape.edgePath(startEdge, startEdge.adjacents[0], targetEdge);
  var edgePath2 = shape.edgePath(startEdge, startEdge.adjacents[1], targetEdge);

  var path = new Path();

  var samples = 10;
  for (var i = 0; i <= samples; i++) {
    var time = i * (1 / samples);

    var edgePoint1 = edgePath1.lerp(time);
    var edgePoint2 = edgePath2.lerp(time);
    console.log(time, edgePoint1, edgePath2);

    var midpoint = edgePoint1.average(edgePoint2);

    path.add(midpoint);
  }

  return path;
}

