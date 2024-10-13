class Product {
  constructor(public name: string, public price: number) { }
}

class Products {

  private products: Product[] = [];

  add(product: Product) {
    this.products.push(product);
  }

  filter(name: string): Product[]
  filter(name: string, price: number): Product[]
  filter(name: string, price?: number): Product[] {
    if (price === undefined) {
      return this.products.filter((product) => product.name === name);
    }
    else {
      return this.products.filter((product) => product.name === name && product.price === price);
    }
  }


}

const products = new Products();
products.add(new Product("Table", 400));
products.add(new Product("Chair", 100));
products.add(new Product("Lamp", 30));


let table1 = new Product('Table', 400);
products.add(table1);

// console.log(table1);

// console.log('[i]checking for item(s): ', products.filter(table1.name, table1.price))
console.log('[🔍] Product search results: ', products.filter('Chair',100));