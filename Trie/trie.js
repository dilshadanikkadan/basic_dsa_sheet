class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEnd = true;
  }

  search(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.isEnd;
  }

  autoComplete(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        return [];
      }
      currentNode = currentNode.children[char];
    }

    let list = [];
    this.collectWord(currentNode, word, list);
    return list
  }
  collectWord(node, word, list) {
    if (node.isEnd) {
      list.push(word);
    }

    for (const char in node.children) {
      this.collectWord(node.children[char], word + char, list);
    }
  }
}

const tr = new Trie();
tr.addWord("apple");
tr.addWord("appointment");
console.log(tr.search("apple"));
console.log(tr.autoComplete("ap"));
