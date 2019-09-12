// Graphs are collection of things
// and relationships and connection between them..

// Data in the graph are called Node and Vertices..
// The connection between the nodes are called edges..
// example: social networking sites...

// Graphs: Breath-First Search

function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;
  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIndex = [];
    var index = curConnected.indexOf(1);
    while (index != -1) {
      neighborIndex.push(index);
      index = curConnected.indexOf(1, index + 1);
    }

    for (var j = 0; j < neighborIndex.length; j++) {
      if (nodesLen[neighborIndex[j]] == Infinity) {
        nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
        queue.push(neighborIndex[j]);
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1)); // { '0': 2, '1': 0, '2': 1, '3': 3, '4': Infinity }
