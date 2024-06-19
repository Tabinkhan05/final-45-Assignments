/* 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/



let first_name : string = `ali`;
let second_name : string = `khan`;
let num1 : number = 4;
let num2 : number = 6;
let array = [1,2,3,4,5];

//Tests for equality and inequality with strings

console.log("tests for equality and inequality with strings");
console.log(first_name == `ali`);
console.log(second_name == first_name);


//Tests using the lower case function

console.log("\n tests using lower case function");
console.log(first_name.toLowerCase() == `ali`);
console.log(second_name.toLowerCase() != `khan`);


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("\n numerical tests : ");
console.log(1 < 2);
console.log(num1 >= num2);
console.log( num1 == 5);
console.log( num2 != 10);


//Tests using "and" and "or" operators

console.log("\n tests using `and` and `or` operators");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3 ) || (num2 > 20));

//Test whether an item is in a array

console.log("\n Test whether an item is in a array :");
console.log(array.includes(2));
console.log(array.includes(10));

//Test whether an item is not in a array

console.log("\n Test whether an item is not in a array:");
console.log(!array.includes(6));
console.log(!array.includes(1));


