const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.start = null;
  }
  
  root() {
    return this.start;
  }

  add( data ) {
    class Node {
      constructor(){
        this.data = data;
        this.left = null;
        this.right = null;
      }
    }
    this.start = addN(this.start,data);
    function addN(node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(data< node.data){
        node.left = addN(node.left,data)
      }else{
        node.right = addN(node.right,data)
      }
      return node;
    }
  }

  has( data ) {
    return hasN(this.start, data);
      function hasN(node,data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      if(data< node.data){
        return hasN(node.left,data)
      }else {
        return hasN(node.right,data)
      }
    }
  }

  find( data ) {
    return hasN(this.start, data);
    function hasN(node, data) {
      if(!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return hasN(node.left, data)
      } else {
        return hasN(node.right, data)
      }
    }
  }

  remove( data ) {
    this.start = removeN(this.start, data);

    function removeN(node, data) {
      if(!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeN(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeN(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeN(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.start) {
      return
    }
    let node = this.start;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.start) {
      return;
    }
    let node = this.start;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }

  
}

module.exports = {
  BinarySearchTree
};

// по лекции Антона