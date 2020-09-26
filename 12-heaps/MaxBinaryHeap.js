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
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];