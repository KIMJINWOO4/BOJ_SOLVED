let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let nodeList = input.slice(1).map(line => line.split(' '));

class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

function buildTree(nodeList) {
  let nodeMap = new Map();

  for (const [parent, left, right] of nodeList) {
      const parentNode = getNode(parent, nodeMap);
      parentNode.left = getNode(left, nodeMap);
      parentNode.right = getNode(right, nodeMap);
  }

  return getNode('A', nodeMap);
}

function getNode(value, nodeMap) {
  if (value === '.') return null;

  if (!nodeMap.has(value)) {
      const newNode = new Node(value);
      nodeMap.set(value, newNode);
  }

  return nodeMap.get(value);
}

function preorderTraversal(node, result = '') {
  if (node) {
      result += node.value;
      result = preorderTraversal(node.left, result);
      result = preorderTraversal(node.right, result);
  }
  return result;
}

function inorderTraversal(node, result = '') {
  if (node) {
      result = inorderTraversal(node.left, result);
      result += node.value;
      result = inorderTraversal(node.right, result);
  }
  return result;
}

function postorderTraversal(node, result = '') {
  if (node) {
      result = postorderTraversal(node.left, result);
      result = postorderTraversal(node.right, result);
      result += node.value;
  }
  return result;
}

let root = buildTree(nodeList);

console.log(preorderTraversal(root));
console.log(inorderTraversal(root));
console.log(postorderTraversal(root));