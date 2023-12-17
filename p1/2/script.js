let first = prompt(
  "Jestes w drodze na studia. Stoisz na czerwonym i widzisz, ze ucieka Ci autobus. Co robisz? (biegne/czekam)"
);

if (first == "biegne") {
  alert("zdazyles na autobus, ale jakis kierowca cie strąbił 😈");
} else if (first == "czekam") {
  alert(
    "Uciekl ci autobus, ale wykladowca spoznil sie jeszcze bardziej niz ty 👼"
  );
}

first();
