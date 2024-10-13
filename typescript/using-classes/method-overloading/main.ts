class Product {
  constructor(public name: string, public price: number) { }
}

class Products {
  private products: Product[] = [];
  add(product: Product) {
    this.products.push(product);
  }
}

const products = new Products();
products.add(new Product("Table", 400));
products.add(new Product("Chair", 100));
products.add(new Product("Lamp", 30));


let table1 = new Product('myTable', 15);
console.log(table1);