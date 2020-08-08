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

    
    /*
	* Create a variable to store the values of nodes visited
	* Store the root of the BST in a variable called current
	* Write a helper function which accepts a node

		* push the value of the node to the variable that stores the values
		* if the node has a left property, call the helper function with the left property on the node
		* if the node has a right property, call the helper function with the right property on the node
	* invoke the helper function with current variable
	* return the visited array
    */
   preOrder() {
        if (!this.root) return [];
        let current = this.root;
        let visited = [];

        function helper(node) {
            visited.push(node.value);
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }
        
        helper(current);
        return visited;
    }

     /*
	* Create a variable to store the values of nodes visited
	* Store the root of the BST in a variable called current
	* Write a helper function which accepts a node

		* if the node has a left property, call the helper function with the left property on the node
		* if the node has a right property, call the helper function with the right property on the node
		* push the value of the node to the variable that stores the value
	* invoke the helper function with the current variable
	* return the visited array
    */
   postOrder() {
        if (!this.root) return [];
        let visited = [];
        
        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            visited.push(node.value)
        }
        traverse(this.root)
        return visited;
    }
}