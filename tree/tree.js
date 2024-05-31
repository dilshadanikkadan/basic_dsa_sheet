class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insertNode(root, node) {
    if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    } else if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    }
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  min(root) {
    if (!root) {
      return root.value;
    } else {
      this.min(root.left);
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value > root.value) {
        return this.search(root.right, value);
      } else if (value < root.value) {
        return this.search(root.left, value);
      }
    }
  }
  preOrder(root){
     if(root){
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
     }
  }
  deleteNode(root, value) {
    if (root == null) {
      return false;
    } 
    if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right,root.value)
    }
    return root
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
}

const t = new Tree();
t.insert(5);
t.insert(7);
t.insert(10);
t.insert(3);
t.preOrder(t.root)
t.delete(3)
console.log(".......");
t.preOrder(t.root   )