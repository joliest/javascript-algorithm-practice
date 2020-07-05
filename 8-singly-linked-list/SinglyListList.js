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

    /*
	* if there are no nodes in the list, return undefined
	* Loop through the list until you reach the tail
	* Set the next property of the 2nd to the last node to be null
	* Set the tail to be the 2nd to the last node
	* Decrement the length of the list by 1
	* Return the value of the node removed
    */
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // work around on deleting the last item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /*
	* if there are no nodes,  return undefined
	* Store the current head property in a variable
	* Set the head property to be the current head's next property
	* decrement the length of 1
	* return the value of the node removed
    */
   shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currentHead;
    }


    /*
	* this function should accept a value
	* create a new node using the value passed to the function
	* if there is no head property on the list, set the head and tail to be the newly created node
	* Otherwise, set the newly created node's next property to be the current head property of the list.
	* Set the head property on the list to be that newly created node
	* Increment the length of the list by 1
	* return the linked list
    */
   unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /*
	* this function should accept an index
	* if the index is less than zero or greater than or equal to the length of the list, return null
	* Loop thru the list until you reach the index and return the node at that specific index
    */
   get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;

        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }
    

    /*
	* function should accept a value and an index
	* use your get function to find the specific node
	* if the node is not found, return false
	* if the node is found, set the value of that node to be the value passed to the function and return true
    */
   set(index, value) {
        const found = this.get(index);
        if (!found) return false
        found.val = value;
        return true;
    }

    /*
        * if the index is less than zero or greater than the length, return false
        * if the index is the same as the length, push a new node to the end of the list
        * if the index is 0, unshift a new node to the start of the list
        * Otherwise, using get method, access the node at the index - 1
        * set the next property on that node to be the new node
        * set the next property of the new node to be the previous next (create temp variable to hold prev.next)
        * increment the length
        * return true
    */
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        const prevNode = this.get(index - 1);
        const newNode = new Node(val);
        const temp = prevNode.next;

        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    

    /*
	* if the index is less than zero or greater than the length return undefined
	* if the index is the same as length - 1, pop
	* if the index is 0, shift
	* Otherwise, using the get method, access the node at the index - 1
	* Set the next property of that node to be the next property of the next node
	* decrement the length
	* return the value of the node remove
    */
   remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === (this.length - 1)) return this.pop();
        if (index === 0) return this.shift();

        const prevNode = this.get(index - 1);
        const deleteNode = this.get(index);
        prevNode.next = deleteNode.next;
        this.length--;
        return deleteNode;
    }
    
/*
	* swap the head and tail
	* create variable next, prev and node
	* initialize node to the head property (13)
	* Loop thru the list
	* Set node next property to next variable
	* Set prev to node next property
    * Set node to prev variable	
    * Set next as the new node
*/
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var prev = null;
        
        for (var i = 0; i < this.length; i++) {
        	next = node.next;
        	node.next = prev;
        	prev = node;
        	node = next;
        }
        return this;
    }

    // prints all the values in array
    print() {
    	var arr = [];
    	var current = this.head;
    	while (current) {
    		arr.push(current.val);
    		current = current.next;
    	}
    	console.log(arr);
    }
}
