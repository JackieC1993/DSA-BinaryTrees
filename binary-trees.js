const { inspect } = require("util");

class TreeNode {
  constructor(val = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//        5
//       / \
//       3  7
//      /\   \
//     1  4   9
//       \
//         2
class BinaryTree {
  constructor(root = null) {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    // if there is no root node, assign the node to be the root
    if (!this.root) {
      this.root = newNode;
    } else {
      this.recursiveInsert(this.root, newNode);
    }
  }

  recursiveInsert(node, newNode) {
    // compare node's value to newNode's value
    if (newNode.val < node.val) {
      //if there is no node.left, assign newNode to be node.left
      if (!node.left) {
        node.left = newNode;
      } else {
        // keep traversing to find a home for the newNode
        this.recursiveInsert(node.left, newNode);
      }
    } else {
      // if there is node.right, assign newNode to be node.right
      if (!node.right) {
        node.right = newNode;
      } else {
        // keep traversing to find a home for the newNode
        this.recursiveInsert(node.right, newNode);
      }
    }
  }
  // return the node with the given value
  search(value) {
    return this.recursiveSearch(this.root, value);
  }

  //writing a separate method so we can pass any node to it, not just the root
  recursiveSearch(node, value) {
    // if we don't have a root node..?
    if (!node) return null;
    else if (node.val === value) {
      //node's vale is equal to the value
      // return that node
      return node;
    } else if (value < node.val) {
      // if value is less than the node.val
      return this.recursiveSearch(node.left, value);
    } else {
      return this.recursiveSearch(node.right, value);
    }
  }

  //  addValues(){} -- breadth first, depth first
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(9);
tree.insert(2);

// console.log(inspect(tree, true, 10));

console.log(tree.search(11))