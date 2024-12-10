export class Graph {
  private adjacencyList: {
    [key: string]: { vertex: string; weight: number }[]
  } = {}

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight })
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight }) // Pro neorientovaný graf
  }

  display(): void {
    for (const vertex in this.adjacencyList) {
      const edges = this.adjacencyList[vertex]
        .map((edge) => `${edge.vertex} (${edge.weight})`)
        .join(', ')
      console.log(vertex, '->', edges)
    }
  }
  bfs(startNode: string): string[] {
    const visited: string[] = []
    const queue: string[] = []
    const visitedSet: Set<string> = new Set()

    queue.push(startNode)
    visitedSet.add(startNode)

    while (queue.length > 0) {
      const currentNode = queue.shift()
      if (!currentNode) continue

      visited.push(currentNode)

      for (const neighbor of this.adjacencyList[currentNode]) {
        if (!visitedSet.has(neighbor.vertex)) {
          queue.push(neighbor.vertex)
          visitedSet.add(neighbor.vertex)
        }
      }
    }
    return visited
  }
  dfs(startNode: string): string[] {
    const visited: string[] = []
    const visitedSet: Set<string> = new Set()

    const dfsRecursive = (node: string) => {}
  }
}

//implement bfs, dfs, Dijkstra algorithm
