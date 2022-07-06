// \
// '/** Bi/naryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.depth = 1;
    this.pathSum = 0;
  }
  
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }
    
    let toVisit = [this.root];
    let nextGen = [];
    let depth = 1;
    let current
    function checkGen(arr) {
      console.log('depth', depth)
      while (arr.length) {
        current = arr.shift();
        console.log(current);
        if (current.left) {
          nextGen.push(current.left);
          console.log('push left');
        } else if (current.right) {
          nextGen.push(current.right);
          console.log('push right');
        } else {
          console.log('returns depth of ', depth);
          return depth;
        }
      }
      if (!arr.length) {
        arr = nextGen;
        depth = depth + 1;
      }
      return checkGen(arr)
    }

    return checkGen(toVisit);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }
    
    let toVisit = [this.root];
    let current;
    let max = 0;

    while (toVisit.length) {
      let current = toVisit.shift();
      if (current.right && current.left) {
        current.right.depth = current.depth + 1;
        current.left.depth = current.depth + 1;
        toVisit.unshift(current.right);
        toVisit.unshift(current.left);
      } else if (current.right) {
        current.right.depth = current.depth + 1;
        toVisit.unshift(current.right);
      } else if (current.left) {
        current.left.depth = current.depth + 1;
        toVisit.unshift(current.left);
      } else {
        if (current.depth > max) {
          max = current.depth;
        }
      }
    }
    return max;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let result = 0;
    function maxSumHelper(node) {
      if (node == null) {
        return 0;
      }
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);

      result = Math.max(result, leftSum + rightSum + node.val);

      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root]
    let closest = null;

    while (queue.length) {
      let current = queue.shift();

      let larger = current.val > lowerBound;
      let reassign = current.val < closest || closest == null;

      if (larger && reassign) {
        closest = current.val;
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
