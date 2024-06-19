var usernames = ["admin", "babar", "rizwan", "shaheen", "amir"];
usernames = [];
if (usernames.length == 0) {
    console.log("we need to find some users");
}
else {
    usernames.forEach(function (oneuser) {
        if (oneuser == "admin") {
            console.log("hello ".concat(oneuser, ", would you like to see status reports?."));
        }
        else {
            console.log("hello ".concat(oneuser, ", thankyou for logging in again."));
        }
    });
}
