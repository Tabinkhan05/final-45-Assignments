var usernames = ["admin", "babar", "rizwan", "shaheen", "amir"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == 'admin') {
        console.log("hello admin, would you like to see the status of report");
    }
    else {
        console.log("hello ".concat(usernames[i], ", thankyou for logging in"));
    }
}
