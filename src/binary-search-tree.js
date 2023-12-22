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

  find(data) {
    return findNode(this.head, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data > node.data) {
        return findNode(node.right, data);
      } else {
        return findNode(node.left, data);
      }
    };
  }

  remove(data) {

    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        let maxDataInLeftNode = node.left;

        while (maxDataInLeftNode.right) {
          maxDataInLeftNode = maxDataInLeftNode.right;
        }

        node.data = maxDataInLeftNode.data;
        node.left = removeNode(node.left, maxDataInLeftNode.right);

        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};