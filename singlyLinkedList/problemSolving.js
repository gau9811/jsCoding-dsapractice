class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let currNext = current.next;
    while (currNext.next) {
      current = current.next;
      currNext = currNext.next;
    }
    this.tail = current;
    this.tail.next = null;
    this.size--;
    return true;
  }

  shift() {
    if (!this.head) return null;
    const current = this.head;
    this.head = current.next;
    this.size--;
    return this;
  }
  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
  }
  get(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, data) {
    const node = this.get(index);
    if (node) {
      node.data = data;
      return true;
    }
    return false;
  }

  middle() {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }
  reverse() {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this.head;
  }

  palindrome() {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;
    let currStr = [];

    while (fast?.next) {
      currStr.push(slow.data);
      slow = slow.next;
      fast = fast.next.next;
    }

    if (fast) {
      slow = slow.next;
    }

    while (slow?.data) {
      let str = currStr.pop();
      if (slow.data !== str) {
        return false;
      }
      slow = slow.next;
    }
    return true;
  }
  rotate(ind) {
    if (ind > this.size) return null;
    let firstNode = this.head;
    let remainingList = this.head.next;

    let currentH = 0;
    while (currentH < ind) {
      firstNode.next = remainingList;
      this.tail.next = firstNode;
      firstNode.next = null;
      this.head = remainingList;
      this.tail = firstNode;
      firstNode = this.head;
      remainingList = this.head.next;
      currentH++;
    }
  }

  getlist() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }

  swapNode() {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    let next = null;

    while (current && current.next) {
      next = current.next;
      current.next = next.next;
      next.next = current;

      if (prev) {
        prev.next = next;
      } else {
        this.head = next;
      }
      prev = current;
      current = current.next;
    }
    return this.getlist();
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

console.log(list.swapNode());
