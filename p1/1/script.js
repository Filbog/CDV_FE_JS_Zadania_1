const validateLineValue = (val) => {
  val = parseInt(val);
  if (val != NaN) {
    if (val > 0) {
      return true;
    }
  }
  return false;
};

const correctLineValue = (s) => {
  let isCorrectValue = false;
  while (isCorrectValue == false) {
    val = prompt(`Enter ${s} length`);
    isCorrectValue = validateLineValue(val);
    if (!isCorrectValue) {
      console.log("Incorrect value");
    }
  }
  return val;
};

const height = correctLineValue("height");
const base = correctLineValue("base");

const calculateTriangleArea = (b, h) => (b * h) / 2;
console.log(calculateTriangleArea(height, base));
