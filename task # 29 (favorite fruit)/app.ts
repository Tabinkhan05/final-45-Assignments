/* 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

const favorite_fruits : string[] =["banana","mango","apple"]

if( favorite_fruits.includes("apple")){
    console.log("you really like apples");
}
if(favorite_fruits.includes("mango")){
    console.log("you really like mango");
}
if (favorite_fruits.includes("banana")){
    console.log("you really like banana")
}
if(favorite_fruits.includes("quava")){
    console.log("i do not like quava");
}
if (favorite_fruits.includes("grapes")){
    console.log("i do not like grapes");
}