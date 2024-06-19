var guest_list = ["ali", "ahmed", "saad"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], ":\nYou are invited to dinner!\n"));
}
var unable_to_attend = guest_list[0];
console.log("Unfortunately, ".concat(unable_to_attend, " cannot come to dinner."));
guest_list[1] = "rafay";
console.log("\nNew list of invitations:\n");
for (var j = 0; j < guest_list.length; j++) {
    console.log("Dear ".concat(guest_list[j], ":\nYou are invited to dinner!\n"));
}
console.log("good news! we have found a bigger dinner table ,so more space is available ,so our new guests are : \n ");
guest_list.unshift("babar");
guest_list.splice(2, 0, "shaheen");
guest_list.push("rizwan");
for (var i = 0; i < guest_list.length; i++) {
    console.log('dear ${guest_list[i]} : \n you are invited to dinner ! \n');
}
