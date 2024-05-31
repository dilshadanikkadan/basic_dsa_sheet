class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getParentIndex(currentIndex) {
    return Math.floor((currentIndex - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
  getRight(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  getLeft(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  hasLeftChildIndex(index) {
    console.log(this.getLeftChildIndex(index));
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChildIndex(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  heapUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  add(value) {
    this.heap.push(value);
    this.heapUp();
  }
  remove() {
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapDown();
    return item;
  }

  heapDown() {
    let index = 0;
    while (this.hasLeftChildIndex(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChildIndex(index) &&
        this.getRight(index) < this.getLeft(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
  printHeap() {
    let heap = ` ${this.heap[0]} `;
    for (let i = 1; i < this.heap.length; i++) {
      heap += ` ${this.heap[i]} `;
    }
    console.log(heap);
  }
}

var heap = new MinHeap();
heap.add(15);
heap.add(30);
heap.add(10);
heap.add(40);
heap.add(50);
heap.add(9);
heap.add(40);
heap.add(16);
heap.printHeap();
heap.remove();
console.log("....after");
heap.printHeap();
