const solveQuadratic = () => {
  let a = parseInt(prompt("Podaj liczbe a inna niz 0"));
  let b = parseInt(prompt("Podaj liczbe b"));
  let c = parseInt(prompt("Podaj liczbe c"));
  if (a == 0) {
    console.log("Niepoprawna wartosc a");
    return;
  }
  let delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    return `Dwa pierwiastki: ${x1} i ${x2}`;
  } else if (delta == 0) {
    let x = -b / (2 * a);
    return `Jeden pierwiastek: ${x}`;
  } else {
    return "brak pierwiastkow";
  }
};

console.log(solveQuadratic());
