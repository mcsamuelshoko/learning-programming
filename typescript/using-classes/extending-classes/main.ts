abstract class Product {
  constructor(public name: string, public price: number) { }
  log() {
    console.log(this.name, this.price);
  }
}

class Table extends Product {
  constructor(public name: string, public price: number, public legs: number) {
      super(name,price);
  }

  log(){
    console.log(this.name, this.price, this.legs);
  }
}

const table = new Table("Table", 400, 4);
table.log();

// const product = new Product("Chair",100);