var alien_color = "green";
{
    if (alien_color == "green") {
        console.log("playes just earned 5 point for shooting the alien");
    }
    if (alien_color == "red") {
        console.log("player just earned 5 point");
    }
    else {
        console.log("playes just earned 10 point for shooting the alien");
    }
}
//ans 3
function alien_colour1(color) {
    if (color == "Green") {
        console.log("congratulations! Player just earned 5 points for shooting the alien");
    }
    else {
        console.log("congratulations! Player just earned 10 points for shooting the alien");
    }
}
alien_colour1("red");
