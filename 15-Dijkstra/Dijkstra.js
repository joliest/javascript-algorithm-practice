class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    /**
	* this function should accept a starting and ending vertex
	* Create an object (distances) and set each key to be every vertex in the adjacency list with a 
	   value of Infinity, except for the starting vertex which should have a value of 0
	* after setting a value in the distances object, add each vertex with a priority of Infinity 
	   to the priority queue, except the starting vertex, which should have a priority of 0 because 
	   that's where we begin.
	* Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
	* Start looping as long as there is anything in the priority queue.
		* de-queue a vertex from the priority queue
		* if that vertex is the same as the ending vertex - we are done
		* Otherwise, loop thru each value in the adjacency list at that vertex
			* Calculate the distance to the vertex from the starting vertex
			* If the distance is less that what s currently stored in our distances object
				* update the distances object with the new lower distance
				* update the previous object to contain that vertex
				* enqueue the vertex with the total distance from the start node
    */
    shortestPath(start, end) {
    	let smallest,
    	    path = [],
    	    distances = {},
    	    previous = {},
    	    priorityQueue = new PriorityQueue();
    	
    	// build initial state    
        for (let key in this.adjacencyList) {
        	if (key === start) {
        		 distances[key] = 0
        	     priorityQueue.enqueue(key, 0);
        	} else {
                 distances[key] = Infinity;
        	     priorityQueue.enqueue(key, Infinity);
        	}
        	previous[key] = null;
        }

        // as long as there is something to visit
        while (priorityQueue.values.length) {
        	smallest = priorityQueue.dequeue().val;

        	if (smallest === end) {
        		// done and returns the path to shortest path
        		while(previous[smallest]) {
        			path.push(smallest)
        			smallest = previous[smallest];
        		}
        		break;
        	};

        	if (smallest || distances[smallest] !== Infinity) {
				this.adjacencyList[smallest].forEach(neighbor => {
					// calculate new distance to neighboring node
					const currentDistance = distances[smallest];
					const nextDistance = neighbor.weight;
					const candidate = currentDistance + nextDistance;

					const nextNeighbor = neighbor.node;
					// compare candidate for shortest distance
					if (candidate < distances[nextNeighbor]) {
						// updates new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// updating previous - how we got to neighbor
						previous[nextNeighbor] = smallest;
						// enqueue in priority queue with new priority
						priorityQueue.enqueue(nextNeighbor, candidate);
					}
				});
        	}
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.shortestPath("A", "E")

class PriorityQueue {
    /** This is a minMaxValue*/
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
    	let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        // tracks newly inserted item
        let index = this.values.length - 1;
        const newElement = this.values[index];
        while (index > 0) {
            const parentIndex = this.findParent(index);
            const parent = this.values[parentIndex];
            if (newElement.priority >= parent.priority) break;
            this.values[parentIndex] = newElement;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    findParent(index) {
        return Math.floor((index - 1) / 2);
    }

    dequeue() {
        const minValue = this.values[0];
        const lastValue = this.values.pop();
        // fix edge case for 1 item list
        if (this.values.length > 0) {
            this.values[0] = lastValue;
            this.sinkDown();
        }
        return minValue;
    }

    sinkDown() {
        const {values} = this;
        let parentIdx = 0;
        const element = values[parentIdx];
        const length = values.length;

        while (true) {
            const leftChildIdx = (2 * parentIdx) + 1;
            const rightChildIdx = (2 * parentIdx) + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null)
                break;
            // swapping
            values[parentIdx] = values[swap];
            values[swap] = element;
            parentIdx = swap;
        }
    }
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
