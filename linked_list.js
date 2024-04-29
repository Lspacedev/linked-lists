function Node(val) {
  let value = val || null;
  let nextNode = null;

  return { value, nextNode };
}

function LinkedList(val) {
  let head = val;

  function append(node) {
    function enter(obj) {
      if (obj.nextNode === null) {
        obj.nextNode = node;
        return obj.nextNode;
      }

      enter(obj.nextNode);
    }
  }

  return { head, append };
}
let node1 = Node(5);
let node2 = Node(6);
let node3 = Node(7);
let node4 = Node(8);
let node5 = Node(9);

let list = LinkedList(node1);
list.append(node2);
list.append(node3);
list.append(node4);
list.append(node5);

console.log(list.head);
//console.log(list.head.value);
/*
let objj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
let result = [];

function recur(obj) {
  if (obj.next) {
    result.push(obj.value);
    recur(obj.next);
  } else if (obj.next === null) {
    result.push(obj.value);
    obj.next = "sd";
  }
}
recur(objj);
console.log(result);
console.log(objj);
*/
