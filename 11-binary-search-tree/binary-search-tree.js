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
}