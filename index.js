class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.sizeOfLL = 0;
  }

  // add element to LinkedList
  addElementToLL(data) {
    let node = new Node(data);
    let currentNode;
    if (this.head === null) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.sizeOfLL += 1;
  }

  // print LinkedList
  getElementsFromLL() {
    if (this.head === null) {
      console.log("there are no elements in LL");
    } else {
      let arr = [];
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.data);
        arr.push(currentNode.data);
        currentNode = currentNode.next;
      }
      console.log(arr);
      return arr;
    }
  }

  // getLength of Linked LinkedList
  getLength() {
    if (this.head === null) {
      console.log("there are no elements in LL");
      return null;
    } else {
      console.log(this.sizeOfLL);
      return this.sizeOfLL;
    }
  }

  // get data from nth position
  getElementAtNthPositionLL(position) {
    if (this.head === null) {
      console.log("there are no elements in LL");
    }
    if (this.sizeOfLL < position) {
      console.log("Yu have entered invalid position");
    } else {
      let count = 1;
      let currentNode = this.head;
      while (currentNode) {
        if (count === position) {
          console.log(currentNode.data);
          return currentNode.data;
        }
        currentNode = currentNode.next;
        count += 1;
      }
    }
  }

  // get data from nth position from  last
  getElementFromNthLastFromLL(position) {
    if (this.head === null) {
      console.log("there are no elements in LL");
    }
    if (this.sizeOfLL < position) {
      console.log("Yu have entered invalid position");
    } else {
      let currentNode = this.head;
      let count = this.sizeOfLL;
      while (currentNode) {
        if (count === position) {
          console.log(currentNode.data);
          return currentNode.data;
        }
        currentNode = currentNode.next;
        count -= 1;
      }
    }
  }

  newApproachForLastNthode(position){
    if (this.head === null) {
      console.log("there are no elements in LL");
    }
    if (this.sizeOfLL < position) {
      console.log("Yu have entered invalid position");
    }
    else{
      let first = this.head
      let second = this.head
      for (let i = 1; i <= position; i++) {
        second = second.next
      }
      while(second){
        first = first.next;
        second = second.next;
      }
      console.log(first.data)
      return first.data
    }
  }
}

const LL = new LinkedList();

LL.addElementToLL(10);
LL.addElementToLL(20);
LL.addElementToLL(30);
LL.addElementToLL(40);
LL.addElementToLL(50);
LL.addElementToLL(60);
LL.addElementToLL(70);
// LL.getElementAtNthPositionLL(7);
// LL.getElementFromNthLastFromLL(1);
// LL.getElementsFromLL();
// LL.getLength();
// LL.newApproach(5)

module.exports = LinkedList;
