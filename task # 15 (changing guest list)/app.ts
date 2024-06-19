/*15.Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/
let guest_list: string[] = ["ali", "ahmed", "saad"];

for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}:\nYou are invited to dinner!\n`);
}

let unable_to_attend = guest_list[0];
console.log(`Unfortunately, ${unable_to_attend} cannot come to dinner.`);

guest_list[1] = "rafay"
console.log("\nNew list of invitations:\n");

for (let j = 0; j < guest_list.length; j++) {
    console.log(`Dear ${guest_list[j]}:\nYou are invited to dinner!\n`);
}