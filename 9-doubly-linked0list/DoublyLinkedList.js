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

    /*
    * if there is no head, return undefined
    * Store the current tail as a const to return later
    * if the length is 1, set head and tail to null
    * Update the tail to be the previous Node
    * Set the new tail's next to null
    * Decrement the length
    * return the value removed
    */
    pop() {
        if (!this.head) return undefined;
        const temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            // severing returning node previous
            temp.prev = null;
        }
        this.length--;
        return temp;
    }  
    
    /*
	* if length is 0, return undefined
	* Store the current head property in a variable -- var oldHead
	* if the length is one, set head and tail to null
	* Set head to be oldHead's next property
	* Set head prev property to null
	* set the oldHead's next property to null
	* Decrement the length
    */
    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    /*
	* Create a new node with the value passed to the function
	* If the length is 0, set head and tail to be the new node
	* Otherwise
		* set head prev property to be the new node
		* set new node next property to be the head property
		* set the head to be the new node
	* Increment the length
	* return list
    */
   unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /*
	* if the index is less than 0 or greater than or equal the length, return null
	* if the index is less than or equal to the half of the length of the list
		* Loop thru the list starting from the head and loop toward the middle
		* return the node if its found
	* If the index is greater than half the length of the list
		* Loop thu the list starting from the tail and loop towards the middle
		* return the node once it found
    */
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        const half = Math.floor(this.length / 2);
        let node;
        if (idx <= half) {
            node = this.head;
            for (let i = 0; i <= half; i++) {
                if (i === idx) return node;
                node = node.next;
            }
        } else {
            node = this.tail;
            for (let i = this.length - 1; i > half; i--) {
                if (i === idx) return node;
                node = node.prev;
            }
        }
    }

    /*
	* Create a variable which is the result of get() method at the index passed to the function
		* if get() value is valid, set the value of that node to be the value passed to the function 
		* return trrue
	* Otherwise, return false
    */
   set(idx, val) {
        const foundNode = this.get(idx)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    /*
	* If the index is less than zero or greater than or equal to the length return false
	* If the index is 0, unshift
	* if the index is the same as the length, push
	* Use the get method to access the index - 1
	* set the next and prev properties on the correct nodes to link everything together
	* Increment the length
	* return true
    */
   insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        const insertNode = new Node(val);
        const prevNode = this.get(idx - 1);
        const nextNode = prevNode.next;

        prevNode.next = insertNode;
        nextNode.prev = insertNode;
        insertNode.prev = prevNode;
        insertNode.next = nextNode;
        this.length++;
        return true;
    }

    

    /*
	* If the index is less than zero or greater than or equal to the length, return undefined
	* If the index is 0, shift()
	* if the indes is length - 1, pop()
	* Use get method to retrieve the item to be removed
	* Update the next and prev properties to remove the found node from the list
	* Set the next and prev to null on the found node
	* Decrement the length
	* return the removed node
    */
   remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === 0) return !!this.shift();
        if (idx === (this.length - 1)) return !!this.pop();
        const foundNode = this.get(idx);

        const beforeNode = foundNode.prev;
        const afterNode = foundNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        foundNode.next = null;
        foundNode.prev = null;
        this.length--;
        return foundNode;
    }
}