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
    return true
  }

  shift(){
    if(!this.head) return null;
    const current = this.head;
    this.head = current.next;
    this.size--
    return this
  }
  unshift(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
  }
  get(index){
    if(index < 0 || index >= this.size) return null;
    let current = this.head;
    for(let i = 0; i < index; i++){
      current = current.next;
    }
    return current;
  }
  set(index, data){
    const node = this.get(index);
    if(node){
      node.data = data;
      return true;
    }
    return false;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// list.pop();
console.log(list.shift());
