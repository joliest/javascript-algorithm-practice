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

    /**
	* this function should accept two vertices, we can call them vertex1 and vertex2
	* This function should find in the adjacency list the key of vertex1 and push vertex2 to to the array
	* The function should find in the adjacency list the key of vertext2 and push vertex1 to the array
	* Dont worry about handling errors or invalid vertices
    */
    addEdge(vertex1, vertex2) {
        // add validation
        // if this is directed, you dont need the second line
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    /**
	* should accept two vertices
	* the function should reassign the key of vertext1 to be an array and does not contain vertex2
	* the function should reassign the key of vertext2 to be an array and does not contain vertex1
    */
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1);
    }
}

const graph = new Graph();
graph.addVertex('joli');
graph.addVertex('arlene');
graph.addVertex('khaye');

graph.addEdge('joli', 'arlene');
graph.addEdge('joli', 'khaye');