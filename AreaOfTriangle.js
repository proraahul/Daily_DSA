// find the area of triangle

// when base and height given
function AreaOfTriangle(baseValue, heightValue){

    const areaValue = (baseValue * heightValue) / 2;

    console.log(
        `The area of the triangle is ${areaValue}`);

}

AreaOfTriangle(4,6);



// when all side are given
function areaOfTriangle(side1, side2, side3){

    // calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`);

}


areaOfTriangle(3,4,5)