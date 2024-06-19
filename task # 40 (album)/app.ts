/* 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks,
 add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/


function make_album(artist : string, album : string){
    return{artist,album}

}

let album1 = make_album("weekend","starboy");
let album2 = make_album("taylor swift","1989");
let album3 = make_album("BTS","love yourself");

console.log(album1);
console.log(album2);
console.log(album3);

//number of tracks

function make_album2(artist : string , album :string , numberoftracks : number){
    return {artist , album , numberoftracks}
}

let album4 = make_album2("weekend","starboy", 16);
let album5 = make_album2("taylor swift","1989", 11);
let album6 = make_album2("BTS","love yourself", 18);


console.log(album4);
console.log(album5);
console.log(album6);

