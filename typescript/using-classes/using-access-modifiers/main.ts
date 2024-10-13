export function add(a: number, b: number): number {
  return a + b;
}

export class Product {
  // private name;
  // private price;

  constructor(protected name: string, protected price: number) {

  }

  //setters
  setName(name: string): void {
    this.name = name;
  }
  setPrice(p: number): void {
    this.price = p;
  }
  // getters
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }

  copy(name: string) {
    return new Product(name, this.price);
  }

  equal(p1: Product, p2: Product) {
    return p1.name == p2.name && p1.price == p2.price;
  }
}

let table1: Product = new Product('myTable', 15);
table1.setName('helloTable');
console.log(table1);

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }
