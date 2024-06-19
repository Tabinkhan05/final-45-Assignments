var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favoriteplaces = ["Mecca", "Paris", "sydney", "New york", "london"];
console.log("original order       " + favoriteplaces + " \n");
console.log("alphabetical order   " + __spreadArray([], favoriteplaces, true).sort() + "\n");
console.log("original order      " + favoriteplaces + "\n");
console.log("reverse alphabetical order      " + __spreadArray([], favoriteplaces, true).sort().reverse() + "\n");
console.log("original order      " + favoriteplaces + "\n");
console.log("reverse the order of list        " + favoriteplaces.reverse() + "\n");
console.log("reverse the order of list        " + favoriteplaces.reverse() + "\n");
console.log("alphabetical order   " + favoriteplaces.sort() + "\n");
console.log("alphabetical order    " + favoriteplaces.sort().reverse() + "\n");
