/* 3.Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/ 

const personName = "muhammad ali";

console.log('name in uppercase: ' + personName.toUpperCase());
console.log('name in lowercase: ' + personName.toLowerCase());

let titleCaseName = personName.replace(/\b\w/g, c => c.toUpperCase());

console.log('name in titlecase: ' + titleCaseName);