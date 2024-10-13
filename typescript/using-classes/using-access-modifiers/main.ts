export function add(a: number, b: number): number {
  return a + b;
}

export class Product {
  private name;
  private price;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  copy(name: string) {
    return new Product(name, this.price);
  }

  equal(p1: Product, p2: Product) {
    return p1.name == p2.name && p1.price == p2.price;
  }
}

let table1:Product = new  Product('table',15);

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }
