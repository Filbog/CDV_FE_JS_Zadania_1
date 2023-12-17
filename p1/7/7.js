quantity = 3;
moreThan10 = [];
while (quantity > 0) {
  n = prompt("enter numberr");
  if (n > 10) {
    moreThan10.push(n);
  }
  quantity--;
}

console.log(moreThan10);
