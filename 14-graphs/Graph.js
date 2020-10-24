class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /**
	* write a method called addVertex() which accepts a name of a vertex
	* It should add a key to an adjacency list with the name of the vertex and 
	set its value to be an empty array.
    */
    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }
}

const graph = new Graph();
graph.addVertex('joli');