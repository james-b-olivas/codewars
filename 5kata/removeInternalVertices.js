const removeInternal = (...triangles) => {
  var vertices = {};
  var output = [];
  var limit = (triangles.length < 5) ? Math.max(triangles.length - 1, 4) : 5;
  var maxVertices, keyLength, vertex;

  for (var i = 0; i < triangles.length; i++) {
    vertex = triangles[i];
    for (var j = 0; j < 3; j++) {
      if (!vertices.hasOwnProperty(vertex[j])) {
        vertices[vertex[j]] = {};
      }
      for (var k = 0; k < 3; k++) {
        if (k !== j) {
          vertices[vertex[j]][vertex[k]] = vertex[k];
        }
      }
    }
  }
  maxVertices = Object.keys(vertices).length - 1;
  for (var i in vertices) {
    keyLength = Object.keys(vertices[i]).length;
    if (keyLength < limit || (triangles.length > 5 && keyLength === maxVertices)) {
      output.push(parseInt(i));
    }
  }
  return output;
}