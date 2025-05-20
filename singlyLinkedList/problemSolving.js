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
    let inc = 0;
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
    let newSlow = this.head;
    let currStr = [];
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let middle = Math.floor(this.size / 2);
    let i = 0;

    while (i <= middle) {
      currStr.push(newSlow.data);
      newSlow = newSlow.next;
      i++;
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
}

const list = new SinglyLinkedList();
list.push("h");
list.push("e");
list.push("l");
list.push("l");
list.push("o");
// list.push("a");
// list.push("r");
// list.push(1);
// list.pop();
console.log(list.palindrome());
