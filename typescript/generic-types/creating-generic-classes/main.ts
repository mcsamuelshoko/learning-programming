// Generic class syntax

class ClassName<T1, T2> {
  //...
}


// Generic class example

class List<T> {
  private items: T[] = [];

  add(a: T) {
    this.items.push(a);
  }
}

const numberList = new List<number>;

numberList.add(1);

// numberList.add('30'); //Q: 🤔 Do we receive a type error?
