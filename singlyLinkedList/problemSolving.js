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
    this.head1 = null;
    this.tail1 = null;

    this.size = 0;
    this.size1 = 0;
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

  push1(data) {
    const newNode = new Node(data);
    if (!this.head1) {
      this.head1 = newNode;
      this.tail1 = newNode;
    } else {
      this.tail1.next = newNode;
      this.tail1 = newNode;
    }
    this.size1++;
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

  mergeTwoSortedList() {
    if (!this.head || !this.head1) return null;
    let current1 = this.head;
    let current2 = this.head1;
    let newList = new SinglyLinkedList();
    while (current1 && current2) {
      if (current1.data < current2.data) {
        newList.push(current1.data);
        current1 = current1.next;
      } else {
        newList.push(current2.data);
        current2 = current2.next;
      }
    }

    while (current1) {
      newList.push(current1.data);
      current1 = current1.next;
    }

    // Add remaining nodes from current2
    while (current2) {
      newList.push(current2.data);
      current2 = current2.next;
    }
    return newList;
  }

  addTwoNumber() {
    let s1 = "";
    let s2 = "";
    let current1 = this.head;
    let current2 = this.head1;
    while (current1 && current2) {
      s1 += current1.data;
      current1 = current1.next;
      s2 += current2.data;
      current2 = current2.next;
    }
    s1 = `${parseInt(s1) + parseInt(s2)}`.split("");
    let newList = new SinglyLinkedList();
    let i = 0;
    while (i < s1.length) {
      newList.push(parseInt(s1[i]));
      i++;
    }
    console.log(newList);
    // return newList;

    // here is the code to add two numbers represented by linked lists in reverse order
    // let current1 = this.head;
    // let current2 = this.head1;
    // let carry = 0;

    // let newList = new SinglyLinkedList();

    // while (current1 || current2 || carry) {
    //   let val1 = current1 ? current1.data : 0;
    //   let val2 = current2 ? current2.data : 0;

    //   let sum = val1 + val2 + carry;
    //   carry = Math.floor(sum / 10);
    //   newList.push(sum % 10);

    //   if (current1) current1 = current1.next;
    //   if (current2) current2 = current2.next;
    // }

    return newList;
  }

  findIntersection() {
    if (!this.head || !this.head1) return null;
    if (!this.head1) return null;
    if (!this.head) return null;
    let current1 = this.head;
    let current2 = this.head1;
    while (current1.data && current2.data) {
      if (current1 === current2) {
        return current1;
      } else if (current1.data < current2.data) {
        current1 = current1?.next;
      } else {
        current2 = current2?.next;
      }
    }
  }

  swapNodes(head) {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current && current.next) {
      next = current.next;
      current.next = next.next;
      next.next = current;
      if (prev) {
        prev.next = next;
        console.log(prev.data, next.data);
      }
      if (!prev) {
        this.head = next;
      }
      prev = current;
      current = current.next;
    }

    return this.getlist();
  }

  detectcycle() {
    if (!this.head) return false;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  removedups() {
    if (!this.head) return null;
    let current = this.head;
    let seen = new Set();
    while (current) {
      if (seen.has(current.next.data)) {
        current = current.next.next; // Remove duplicate
      } else {
        seen.add(current.data);
        current = current.next;
      }
    }
    let newList = new SinglyLinkedList();
    seen.forEach((data) => {
      newList.push(data);
    });
    return newList.getlist();
  }

  partitionaroundX(x) {
    if (!this.head) return null;

    let current = this.head;
    let lessThanX = new SinglyLinkedList();
    let greaterThanX = new SinglyLinkedList();
    while (current) {
      if (current.data < x) {
        lessThanX.push(current.data);
      } else {
        greaterThanX.push(current.data);
      }
      current = current.next;
    }

    lessThanX.tail.next = greaterThanX.head;
    return lessThanX.getlist();
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(4);
list.push(3);
list.push(2);
list.push(5);
list.push(2);

console.log(list.partitionaroundX(3));
