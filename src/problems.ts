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











}