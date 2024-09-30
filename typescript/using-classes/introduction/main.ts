export function add(a: number, b: number): number {
  return a + b;
}

export class Product {
  name;
  price;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  copy(name: string) {
    const copiedProduct = new Product(name, this.price);

    return copiedProduct;
  }

  static equal(product1: Product, product2: Product) {
    return product1.name == product2.name && product1.price == product2.price;
  }
}

// instantiate Product variable
const table1 = new Product('coffee', 5);

// copy Product variable
const table2 = table1.copy('table');

// check if equal
const equality = Product.equal(table1, table2);
console.log(equality)


// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

