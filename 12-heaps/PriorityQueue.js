class PriorityQueue {
    /** This is a minMaxValue*/
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
    	let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        // tracks newly inserted item
        let index = this.values.length - 1;
        const newElement = this.values[index];
        while (index > 0) {
            const parentIndex = this.findParent(index);
            const parent = this.values[parentIndex];
            if (newElement.priority >= parent.priority) break;
            this.values[parentIndex] = newElement;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    findParent(index) {
        return Math.floor((index - 1) / 2);
    }

    dequeue() {
        const minValue = this.values[0];
        const lastValue = this.values.pop();
        // fix edge case for 1 item list
        if (this.values.length > 0) {
            this.values[0] = lastValue;
            this.sinkDown();
        }
        return minValue;
    }

    sinkDown() {
        const {values} = this;
        let parentIdx = 0;
        const element = values[parentIdx];
        const length = values.length;

        while (true) {
            const leftChildIdx = (2 * parentIdx) + 1;
            const rightChildIdx = (2 * parentIdx) + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null)
                break;
            // swapping
            values[parentIdx] = values[swap];
            values[swap] = element;
            parentIdx = swap;
        }
    }
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

const ER = new PriorityQueue();
ER.enqueue('Common cold', 5);
ER.enqueue('gunshot wound', 1)
ER.enqueue('fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)
