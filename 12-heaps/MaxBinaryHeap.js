class MaxBinaryHeap {

    constructor() {
        this.values = [];
    }

    /*
	* Push the value into the values property on the heap
    */
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }

    /*
	* bubbleUp()
		* create a variable called index which is the length of the values property - 1
		* create a variable called parentIndex which is the floor of (index-1)/2
		* Keep looping as long as the values element at the parentIndex is less
		 than the values element at the child index
			* Swap the value of the values element at the parentIndex with the value 
			of the element property at the child index
			* set the index to be the parentIndex and start over
    */
    bubbleUp() {
        // tracks newly inserted item
        let index = this.values.length - 1;
        const newElement = this.values[index];
        while (true) {
            const parentIndex = this.findParent(index);
            const parent = this.values[parentIndex];
            if (parent < newElement) {
                // swap the values
                this.values[parentIndex] = newElement;
                this.values[index] = parent;
                index = parentIndex; 
            } else {
                break;
            }
        }
    }

    findParent(index) {
        return Math.floor((index - 1) / 2);
    }

    /*  
	* Swap the first value in the values property with the last one
	* Pop from the values property, so you can return the value at the end.
	* Have the new root "sink down" to the correct spot
    */
    extractMax() {
    	const maxValue = this.values[0];
    	const lastValue = this.values.pop();
    	// fix edge case for 1 item list
    	if (this.values.length > 0) {
			this.values[0] = lastValue;
			this.sinkDown();
    	}
        return maxValue;
    }

    /*
    * sinking down
		* Your parent index starts at 0 (the root)
		* Find the index of the left child: 2 * index + 1 (makes sure it's not out of bounds)
		* Find the index of the right child: 2 * index + 1 (makes sure it's not out of bounds)
		* If the left or right child is greater than the element... swap. 
		    If both left and right children are larger, swap with the largest child
		* The child index you swapped to now becomes the new parent index.
		* Keep looping and swapping until neither child is larger than the element
		* return the old root
    */
    sinkDown() {
    	const { values } = this;
    	let parentIdx = 0;
    	const element = values[parentIdx];
    	const length = values.length;

    	while(true) {
    		const leftChildIdx = (2 * parentIdx) + 1;
    		const rightChildIdx = (2 * parentIdx) + 2;

    		let leftChild, rightChild;
    		let swap = null;

    		if (leftChildIdx < length) {
    			leftChild = values[leftChildIdx];
                if (leftChild > element) {
                	swap = leftChildIdx;
                }
    		}

    		if (rightChildIdx < length) {
    			rightChild = values[rightChildIdx];
    			if (
    			    (swap === null && rightChild > element) ||
    			    (swap !== null && rightChild > leftChild)
    			) {
                    swap = rightChildIdx;
    			}
    		}

    		if (swap === null) break;
    		// swapping
    		values[parentIdx] = values[swap];
    		values[swap] = element;
    		parentIdx = swap;
    	}
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);