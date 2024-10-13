export class Product {
  constructor(public name: string, public price: number) {}
  log() {
    console.log(this.name, this.price);
  }
}
