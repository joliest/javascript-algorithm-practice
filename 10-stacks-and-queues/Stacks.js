class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    /*

	* Accept a value, and create a new node from it
	* If no nodes in the stack, set the first and last as the new node
	* If there's stack, create a temp variable and store the current first property on the stack
	* Set the first property to be the new node
	* Set the next proeprty of new node to be the temp\
	* Increment size

    */
    push(val) {
        const newNode = new Node(val);
        if (!this.first || this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    
    /*
	* If there are no nodes in the stack, return null
	* Create a temporary variable to store the first property on the stack
	* If there is only onenode, set the first and last property to be null
	* Otherwise, set the first property to be the next property of current first
	* decrement the size by 1
	* return the value of the node removed
    */
   pop() {
        if (!this.first || this.size === 0) return null;
        const temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp.val;
    }
}
