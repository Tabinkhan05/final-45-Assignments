/* 18.Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let favoriteplaces : string[] = ["Mecca","Paris","sydney","New york","london"]

console.log("original order       " + favoriteplaces + " \n");

console.log("alphabetical order   " + [...favoriteplaces].sort() + "\n");

console.log( "original order      " + favoriteplaces + "\n");

console.log( "reverse alphabetical order      " + [...favoriteplaces].sort().reverse() + "\n");

console.log( "original order      " + favoriteplaces + "\n");

console.log("reverse the order of list        " + favoriteplaces.reverse() + "\n");

console.log("reverse the order of list        " + favoriteplaces.reverse() + "\n");

console.log("alphabetical order   " + favoriteplaces.sort() + "\n");

console.log("alphabetical order    " + favoriteplaces.sort().reverse() + "\n");








