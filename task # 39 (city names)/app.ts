/*39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/



function city_names(city : string , country : string): void{
    console.log(`${city} , ${country}`);

}

city_names("karachi","pakistan");
city_names("riyadh","saudia arabia");
city_names("paris","france")