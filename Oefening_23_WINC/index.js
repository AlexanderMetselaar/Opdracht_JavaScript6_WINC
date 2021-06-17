// const paint =  function(color) {
//     console.log("The wall has been painted red")
// };

// paint();

// const paint =  function(color) {
//     console.log("The wall has been painted " + color)
// };

// paint("red");
// paint("green");
// paint(); // undefined


const paint = function (whichWall, color) {
    console.log("The " + whichWall + " has been painted " + color)
};

paint("North Wall", "red");
paint("South-East", "orange");
paint(); // undefined

// if you switch de function definiton, the Wall becomes the color and the color becomes the Wall.

