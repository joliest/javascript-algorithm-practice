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

    /**
	* function should accept a vertex to remove
	* the function should loop as long as there are any other vertices in the adjaceny list for the vertex
	* Inside the loop. call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
	* delete the key in adjacency list
    */
    removeVertex(vertex) {
//         for(let key in this.adjacencyList) {
//             this.adjacencyList[key] = this.adjacencyList[key].filter(item => item !== vertex);
//         }
//         delete this.adjacencyList[vertex];

        // colt solution 
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    /**
    DEPTH FIRST TRAVERSAL (recursive)
	* The function should accept a starting node
	* Create a list to store the end result, to be returned at the very end
	* Create an object to store visited vertices
	* Create a helper function which accepts a vertex
		* The helper function should return early if the vertex is empty
		* The helper function should place the vertex it accepts into the visited object and push the vertex into the result array
		* Loop over all the values in the adjacencyList for that vertex
		* If any of those values have not been visited, recursively invoke the helper function with that vertex
	* Invoke the helper function with the starting vertex
	* Return the result array
    */
    depthFirstRecursive(startingVertex) {
        const result = [];
        const visited = {};
        const helper = (vertex) => {
        	if (!vertex) throw new Error('Starting point is required');
        	if (!this.adjacencyList[vertex]) throw new Error('Invalid vertex');
        	visited[vertex] = true;
        	result.push(vertex);
        	this.adjacencyList[vertex].forEach(value => {
        		if(!visited[value]) {
        			return helper(value)
        		}
        	})
        }
        helper(startingVertex)
        return result;
    }
}

const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

/*
            A
          /   \
         B     C
        |_______\
        D       E
        \      /
         \   / 
           F
*/