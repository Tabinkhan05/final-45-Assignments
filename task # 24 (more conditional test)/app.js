var first_name = "ali";
var second_name = "khan";
var num1 = 4;
var num2 = 6;
var array = [1, 2, 3, 4, 5];
//Tests for equality and inequality with strings
console.log("tests for equality and inequality with strings");
console.log(first_name == "ali");
console.log(second_name == first_name);
//Tests using the lower case function
console.log("\n tests using lower case function");
console.log(first_name.toLowerCase() == "ali");
console.log(second_name.toLowerCase() != "khan");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n numerical tests : ");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 == 5);
console.log(num2 != 10);
//Tests using "and" and "or" operators
console.log("\n tests using `and` and `or` operators");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 20));
//Test whether an item is in a array
console.log("\n Test whether an item is in a array :");
console.log(array.includes(2));
console.log(array.includes(10));
//Test whether an item is not in a array
console.log("\n Test whether an item is not in a array:");
console.log(!array.includes(6));
console.log(!array.includes(1));
