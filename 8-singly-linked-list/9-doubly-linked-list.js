class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* 
	* Create a new node with the value passed to the the function
	* If the head property is null, set the head and tail to be the newy created node
	* if not, set the tail next property to be the node
	* Set the newly created node prev property to be the to-be-old tail
	* Set the tail to be the newly created node
	* return list
    */
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}