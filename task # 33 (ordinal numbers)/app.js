var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_numbers_1 = ordinal_numbers; _i < ordinal_numbers_1.length; _i++) {
    var number = ordinal_numbers_1[_i];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
