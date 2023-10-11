// Program to Convert Kilometers to Miles

let km = 5;
function kmToMiles(kilometers) {

    // 1km to 0.621371 miles
  const factor = 0.621371;

  // calculate miles
  const miles = kilometers * factor;

  console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
}

kmToMiles(km);
