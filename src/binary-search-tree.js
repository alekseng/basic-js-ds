const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {

    this.head = addNode(this.head, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchNode(this.head, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (data > node.data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    };
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};