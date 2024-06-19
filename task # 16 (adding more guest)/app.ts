/* 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


*/

let guest_list = ["ali", "ahmed", "saad"];


for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}:\nYou are invited to dinner!\n`);
}


let unable_to_attend = guest_list[1];
console.log(`Unfortunately, ${unable_to_attend} cannot come to dinner.`);


guest_list[1] = "rafay";
console.log("\nNew list of invitations:\n");


for (let j = 0; j < guest_list.length; j++) {
    console.log(`Dear ${guest_list[j]}:\nYou are invited to dinner!\n`);
}


console.log("Good news! We have found a bigger dinner table, so more space is available. Our new guests are:\n");


guest_list.unshift("babar");
guest_list.splice(2, 0, "shaheen");
guest_list.push("rizwan");

for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}:\nYou are invited to dinner!\n`);
}

