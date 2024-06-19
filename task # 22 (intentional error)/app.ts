/* 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.
*/
let sports : string[] = ["cricket", "soccer", "tennis", "basketball", "swimming", "boxing"];

console.log("sports at index 10:");
console.log(sports[10]); // This will give an index error

console.log("Corrected index access:");
console.log(sports[2]); // this a valid index