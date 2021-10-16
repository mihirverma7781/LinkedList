const LinkedList = require("./index");

describe("#insert", () => {
  test("checks for insertion", () => {
    const x = new LinkedList();
    x.addElementToLL(10);
    x.addElementToLL(20);
    expect(x.head.data).toBe(10);
    expect(x.head.next.data).toBe(20);
  });
});

describe("#get length", () => {
  test("getLength", () => {
    const y = new LinkedList();
    y.addElementToLL(10);
    y.addElementToLL(20);
    expect(y.getLength()).toBe(2);
  });
});

describe("#get nth element from first", () => {
  test("getElementAtNthPositionLL", () => {
    const y = new LinkedList();
    y.addElementToLL(10);
    y.addElementToLL(20);
    y.addElementToLL(30);
    y.addElementToLL(40);
    expect(y.getElementAtNthPositionLL(3)).toBe(30);
  });
});


describe("#get nth element from first", () => {
  test("getElementFromNthLastFromLL", () => {
    const y = new LinkedList();
    y.addElementToLL(10);
    y.addElementToLL(20);
    y.addElementToLL(30);
    y.addElementToLL(40);
    expect(y.getElementFromNthLastFromLL(3)).toBe(20);
  });
});

describe("#get all elements", () => {
  test("getElementsFromLL", () => {
    const y = new LinkedList();
    y.addElementToLL(10);
    y.addElementToLL(20);
    y.addElementToLL(30);
    y.addElementToLL(40);
   const arr = y.getElementsFromLL()
   expect(arr).toContain(10);
   expect(arr).toContain(20);
   expect(arr).toContain(30);
   expect(arr).toContain(40);
  });
});

describe("#sum of all elements", () => {
  test("sunofallelements", () => {
    const y = new LinkedList();
    y.addElementToLL(10);
    y.addElementToLL(20);
    y.addElementToLL(30);
    y.addElementToLL(40);
    expect(y.head.data+y.head.next.data+y.head.next.next.data+y.head.next.next.next.data).toBe(100);
  });
});
