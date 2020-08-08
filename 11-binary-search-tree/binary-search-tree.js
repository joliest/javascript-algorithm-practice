class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 

        let currentRoot = this.root;

        while(true) {
            // handle duplicates
            if (value === currentRoot.value) return undefined;
            if (value > currentRoot.value) {
                if (!currentRoot.right) {
                    currentRoot.right = newNode;
                    return this;
                }

                currentRoot = currentRoot.right;
            } else {
                if (!currentRoot.left) {
                    currentRoot.left = newNode;
                    return this;
                }

                currentRoot = currentRoot.left;
            }
        }
    }

    find(value) {
        if (!this.root) return false;

        let current = this.root, 
            found = false;

        while(!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true
            }
        }
        return false;
    }

     /**
	* Create a queue (JS Array) and a variable to store the values of nodes visited
	* Place the root node in the queue
	* Loop as long as there is anything in the queue
		* Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
		* If there is a left property on the node dequeued - add it to the queue
		* If there is a right property on the node dequeued - add it to the queue
	* Return the variable that stores the values
    */
   breadthFirstSearch() {
        if (!this.root) return [];
        let queue = [this.root];
        let visited = [];

        while(queue.length) {
            const dequeuedNode = queue.shift()
            visited.push(dequeuedNode.value)
            if (dequeuedNode.left) queue.push(dequeuedNode.left)
            if (dequeuedNode.right) queue.push(dequeuedNode.right)
        }
        
        return visited;
    }
}