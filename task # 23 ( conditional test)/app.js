var car = "subaru";
console.log("\n ------> 5 tests are true : ");
//1st test
console.log("is car == `subaru`? is predicted true. ");
console.log(car == "subaru");
//2nd test
console.log("is car != `honda`? is predicted true.");
console.log(car != "honda");
//3rd test
console.log("the length of car <= 6? is predicted true.");
console.log(car.length <= 6);
//4th test
console.log("length of the car > 4? is predicted true.");
console.log(car.length > 4);
//5th test
console.log("name of car starts with `s`? is predicted true.");
console.log(car.startsWith("s"));
console.log("\n -----> tests are false :");
//1st test
console.log("car == `tesla`? will be false ");
console.log(car == "tesla");
//2nd test 
console.log("car is in uppercase? is false");
console.log(car.toUpperCase() == car);
//3rd test
console.log("car is Subaru? will be false");
console.log(car == "Subaru");
//4th test
console.log("car is == `honda`? will be false ");
console.log(car == "honda");
//5th test
console.log("lenght of car == 7 will be false");
console.log(car.length == 7);
