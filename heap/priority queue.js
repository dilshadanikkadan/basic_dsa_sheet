class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    hasParent(index) {
      return this.getParentIndex(index) >= 0;
    }
  
    hasLeftChild(index) {
      return this.getLeftChildIndex(index) < this.heap.length;
    }
  
    hasRightChild(index) {
      return this.getRightChildIndex(index) < this.heap.length;
    }
  
    getParent(index) {
      return this.heap[this.getParentIndex(index)];
    }
  
    getLeftChild(index) {
      return this.heap[this.getLeftChildIndex(index)];
    }
  
    getRightChild(index) {
      return this.heap[this.getRightChildIndex(index)];
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    peek() {
      if (this.heap.length === 0) {
        return null;
      }
      return this.heap[0];
    }
  
    push(value, priority) {
      this.heap.push({ value, priority });
      this.heapifyUp();
    }
  
    pop() {
      if (this.heap.length === 0) {
        return null;
      }
      
      const minItem = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      
      return minItem.value;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (this.hasParent(index) && this.getParent(index).priority > this.heap[index].priority) {
        const parentIndex = this.getParentIndex(index);
        this.swap(index, parentIndex);
        index = parentIndex;
      }
    }
  
    heapifyDown() {
      let index = 0;
      while (this.hasLeftChild(index)) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.getRightChild(index).priority < this.getLeftChild(index).priority) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
  
        if (this.heap[index].priority < this.heap[smallerChildIndex].priority) {
          break;
        }
  
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }
  
  const priorityQueue = new PriorityQueue();
  
  priorityQueue.push('Task 1', 2);
  priorityQueue.push('Task 2', 3);
  priorityQueue.push('Task 3', 1);
  
  console.log(priorityQueue.pop()); 
  console.log(priorityQueue.pop()); 
  console.log(priorityQueue.pop()); 