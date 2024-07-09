function printDepthFirst(start) {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
      let currentNode = queue.pop();

      if (!visited.has(currentNode)) {
        console.log(currentNode);
        visited.add(currentNode);
      }
      //if neighbor nodes have not been visited add to queue
      for (const neighbor of adjList[currentNode]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
