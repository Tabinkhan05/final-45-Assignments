"use strict";
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
console.log("since new dinner table would not arrive on time, so therefore we can invite two people for dinner. \n ");
while (guest_list.length > 2) {
    let notinvited = guest_list.pop();
    console.log('sorry,unfortunately due to limited space we cannot invite you to dinner', (notinvited));
}
console.log(guest_list);
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}:\n You are still invited to dinner!\n`);
}
guest_list.pop();
guest_list.pop();
console.log(guest_list);
