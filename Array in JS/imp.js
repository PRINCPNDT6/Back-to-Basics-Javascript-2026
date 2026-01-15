// | Method        | Kaam                                                 |
// | ------------- | ---------------------------------------------------- |
// | `forEach()`   | Array ke har element pe function run                 |
// | `map()`       | New array return karta hai, value transform karke    |
// | `filter()`    | New array return karta hai, condition true elements  |
// | `reduce()`    | Single value calculate karta hai (sum, product, etc) |
// | `find()`      | First element match return karta hai                 |
// | `findIndex()` | First matching element ka index                      |


// | Method            | Kaam                                         |
// | ----------------- | -------------------------------------------- |
// | `Array.isArray()` | Check karta hai array hai ya nahi            |
// | `flat()`          | Nested array ko flatten karta hai [1,2,[3,5,[5,3],7,5]]   LIKE [1,2,3,5,5,3,7,5]      
// | `fill()`          | Array ko ek value se fill karta hai          |
// | `copyWithin()`    | Array ke elements ko shift ya copy karta hai |
// | `from()`          |("PRINCE") Array me convert krta hai  line ['P', 'R', 'I', 'N', 'C', 'E']
// | Array.of

// .from() or object ko nahi krta
  console.log(Array.from({name: "PRINCE"})); // []

//   Array.of
let myName = "Prince Sharma"
let crushName = 'Riya Dubay'
let Course = 'BCA'

let Combine = Array.of(myName,crushName,Course)
console.log(Combine);
