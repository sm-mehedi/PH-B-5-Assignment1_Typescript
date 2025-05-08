import { Constructor } from './../node_modules/make-error/index.d';
{
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper || toUpper == undefined) {
            return input.toUpperCase()
            
        }
        else{
            return input.toLowerCase()
        }
    }
    console.log(formatString("Hello"));
    console.log(formatString("Hello",true));
    console.log(formatString("Hello",false));

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];

      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
      }
      
      console.log(filterByRating(books));

      function concatenateArrays<T>(...arrays: T[][]): T[]{
              return ([] as T[]).concat(...arrays);
      }
      console.log(concatenateArrays(["a", "b"], ["c"]));   
      console.log(concatenateArrays([1, 2], [3, 4], [5]));    


      class Vehicle {
        private make: string;
        private year: number;
      
        constructor(make: string, year: number) {
          this.make = make;
          this.year = year;
        }
      
        get Make(): string {
          return this.make;
        }
      
        set Make(value: string) {
          this.make = value;
        }
      
        get Year(): number {
          return this.year;
        }
      
        set Year(value: number) {
          this.year = value;
        }
      
        getInfo(): void {
          console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
      }
      
      class Car extends Vehicle {
        private model: string;
      
        constructor(make: string, year: number, model: string) {
          super(make, year);
          this.model = model;
        }
      
        get Model(): string {
          return this.model;
        }
      
        set Model(value: string) {
          this.model = value;
        }
      
        getModel(): void {
          console.log(`Model: ${this.model}`);
        }
      }
      const myCar = new Car("Toyota", 2020, "Corolla");
       myCar.getInfo();  
       myCar.getModel(); 


       function processValue(value: string | number): number{
        if(typeof value=="string"){
            return value.length;
        }
        else if(typeof value == 'number'){
            return value*2;

        }
        else{
            return 0;
        }
       }
    console.log(processValue("hello")); 
    console.log(processValue(10));



    interface Product {
        name: string;
        price: number;
      }
      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      function getMostExpensiveProduct(products: Product[]): Product | null{
        if(products.length  == 0){
            return null;
        }
        else{
            return products.reduce((maxProduct, currentProduct) => {
                return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
              });
        }
      }
      console.log(getMostExpensiveProduct(products));

      















}