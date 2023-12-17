const isPositive = (val) => {
  return val >= 0 ? true : false;
};

const twoPositiveValues = () => {
  let x = parseInt(prompt("Podaj x"));
  let y = parseInt(prompt("Podaj y"));
  posX = isPositive(x);
  posY = isPositive(y);
  if (posX == false && posY == false) {
    console.log("Obydwie ujemne");
  } else if (posX == false) {
    console.log("x ujemny");
  } else if (posY == false) {
    console.log("y ujemny");
  } else if (posX == true && posY == true) {
    console.log(`Srednia arytmetyczna: ${(x + y) / 2}`);
  }
};

twoPositiveValues();
