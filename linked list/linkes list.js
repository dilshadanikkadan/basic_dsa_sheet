class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  middle() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow.value;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr && curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  sortMerge(list, list2) {
    const dummy = new LinkedList();
    let l1 = list.head;
    let l2 = list2.head;
    while (l1 && l2) {
      if (l1.value < l2.value) {
        dummy.append(l1.value);
        l1 = l1.next;
      } else {
        dummy.append(l2.value);
        l2 = l2.next;
      }
    }

    while (l1) {
      dummy.append(l1.value);
      l1 = l1.next;
    }
    while (l2) {
      dummy.append(l2.value);
      l2 = l2.next;
    }

    return dummy;
  }
  deleteEl(index) {
    let curr = this.head;
    for (let i = 0; i < this.getSize() - 1 - index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
  }
  deleteValue(value) {
    let curr = this.head;
    while (curr.next.value !== value) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
  }

  secondLargest(){
    let curr = this.head;
    let largest =curr.value
    let largestSecond =curr.value
    while(curr){
        if(curr.value > largest){
            largestSecond = largest;
            largest = curr.value 
        }else if(curr.value > largestSecond){
            largestSecond = curr.value
        }
        curr = curr.next
    }
    console.log(largestSecond);
    return largestSecond
  }
  print() {
    let curr = this.head;
    let listedValues = "";
    while (curr) {
      listedValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listedValues);
  }
}

const list = new LinkedList();
const list2 = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
// list.deleteValue(20)
// list.deleteEl(1);
list.print();
// console.log(list.secondLargest());
list.secondLargest()
