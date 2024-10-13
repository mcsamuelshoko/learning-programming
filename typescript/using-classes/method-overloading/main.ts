export class Product {
  constructor(private name: string, private price: number) { }
  
}


let table1 = new Product('myTable', 15);
console.log(table1);