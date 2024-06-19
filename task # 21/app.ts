/* 21.They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items. 
*/

interface Person {
    Name: string;
    age: number;
    profession: string;
}

let obj: Person = { Name: 'ali', age: 19, profession: 'student' };

console.log('\nObject containing information about me:\n');
console.log(`My name is: ${obj.Name}`);
console.log(`I am: ${obj.age} years old`);
console.log(`I am a: ${obj.profession}`);
