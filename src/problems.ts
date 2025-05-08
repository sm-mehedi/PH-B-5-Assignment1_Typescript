import { Constructor } from './../node_modules/make-error/index.d';

    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper || toUpper == undefined) {
            return input.toUpperCase()
            
        }
        else{
            return input.toLowerCase()
        }
    }
   

    
   

      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
      }
      

     

      function concatenateArrays<T>(...arrays: T[][]): T[]{
              return ([] as T[]).concat(...arrays);
      }
       



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
   



    interface Product {
        name: string;
        price: number;
      }
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
      



      enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        if (day === Day.Sunday) {
          return "Weekend";
        }
        else{
            return "Weekday";
        }
      }
      



      async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Negative number not allowed"));
            } else {
              resolve(n * n);
            }
          }, 1000); 
        });
      }
      
      
      




