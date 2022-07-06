/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  findNodeDFS(val) {
    let toVisit = [this];
    while (toVisit.length) {
      let current = toVisit.pop();
      if (current.val === val) return current;
      for (let child of current.children) {
        toVisit.push(child);
      }
    }
  }

  findNodeBFS(val) {
    let toVisit = [this];
    while (toVisit.length) {
      let current = toVisit.shift();
      if (current.val === val) return current;
      for (let child of current.children) {
        toVisit.push(child);
      }
    }
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }
    let toVisit = [this.root];
    let sum = 0;
    while (toVisit.length) {
      let current = toVisit.pop();
      sum = sum + current.val;
      for (let child of current.children) {
        toVisit.push(child);
      }
    }
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let toVisit = [this.root];
    let count = 0;
    while (toVisit.length) {
      let current = toVisit.pop()
      if (current.val % 2 == 0) {
        count = count + 1;
      }
      for (let child of current.children) {
        toVisit.push(child)
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let toVisit = [this.root];
    let count = 0;
    while (toVisit.length) {
      let current = toVisit.pop();
      if (current.val > lowerBound) {
        count = count + 1;
      }
      for (let child of current.children) {
        toVisit.push(child)
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
