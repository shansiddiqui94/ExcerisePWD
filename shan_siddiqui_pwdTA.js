// // 1.
// //  Using the filter method, filter out the sedans.
// // output =>
// //  { brand: 'Toyota', model: 'camry', type: 'sedan' },
// //   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
// const carBrands = [
//   { brand: "Ford", model: "mustang", type: "convertible" },
//   { brand: "Toyota", model: "camry", type: "sedan" },
//   { brand: "Ram", model: "1500", type: "pickup" },
//   { brand: "Hyundai", model: "Sonata", type: "sedan" },
//   { brand: "Jeep", model: "wrangler", type: "suv" },
//   { brand: "Nissan", model: "frontier", type: "pickup" },
// ];
let removeType = carBrands.filter((car) => {
  return car.type !== "sedan";
});
console.log(removeType);
// /* 2.
//  * reverseString takes a string
//  * and should return the reverse of the string, you cannot use .reverse method
//  * e.g., reverseString('cat') => 'tac'
//  */
function reverseString(str) {
  newRevStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newRevStr += str[i];
  }
  return newRevStr;
}
console.log(reverseString("cat"));
console.log(reverseString("Mouse"));
console.log(reverseString("Hello World How is your day"));
// // 3.
// // Using Reduce,
// // Given an array of all your wishlist items, figure out
// // how much it would cost to just buy everything at once
// // In other words, the total of all the prices in the array
// // of objects
// // The output should eqaute to 227005
// let wishlist = [
//   { title: "tesla", price: 90000 },
//   { title: "tesla", price: 45000 },
//   { title: "tesla", price: 5 },
//   { title: "tesla", price: 2000 },
//   { title: "tesla", price: 90000 },
// ];
const totalWishlist = wishlist.reduce((a, b) => {
  return a + b.price;
}, 0);
console.log(totalWishlist);
// // 4.
// //Explain recursion in your own words,
// // give an example of a recursive algorithm, and explain how it works
// //Make sure to detail the steps that make up a recursive algorithm
// // A detailed explanation.
//What is Recusrion?
// Recursion is a function that continues to call on its self until the Base Case returns true. Recursive problems solve smaller problems in order to work towards solving the bigger problem.
//We can think of Recusion in two parts the Base Case and the Recursive Case, It works like this the Base case returns an answer non-recursively, it stops the process of making even more recursive calls. While the Recursive case is smaller sub problems of the orginal problem, it get broken down simpler and simpler versions of the original problem.
//Example:
//   function rec(x, y) // Function rec takes two param
// {
//      if (x == 0)
//         return y // this is the base case
//     else
//         return rec(x - 1, x + y) // this is recursive case
// }
// So the rec function takes two parameters x and y
// the next line introduces the base case in which we say that if x == 0 the return y and this will end the problem.
//In the else block we have the recursive statement which simiplifies the whole problem altogether
//returning function rec x - 1, x + y which will return whatever y is.
