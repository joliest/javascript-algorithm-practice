// piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /*
	* push function should accept a value
	* create a new node using the value passed to the function
	* if there is no head property on the list, set the head and the tail to be the newly created one
	* Otherwise:
		* set the the tail's next property to be the new node
		* set the tail property on the list to be the newly created node
	* Increment the length by one
	* return the list
    */
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}
