function task1() {
  const rand_num = Math.ceil(Math.random() * 100);
  console.log(rand_num);
  do {
    user_num = prompt("Podaj numer od 1 do 100: ");
    if (user_num > rand_num) {
      alert("Za duzy nr!");
    } else if (user_num < rand_num) {
      alert("Za maly nr!");
    } else {
      alert("Trafiles!");
    }
  } while (user_num != rand_num);
}
// task1();

function task2() {
  let user_nums_sum = 0;
  let quantity;
  quantity = parseInt(prompt("Podaj ilosc liczb"));
  for (let i = 1; i <= quantity; i++) {
    new_num = parseInt(prompt(`Podaj liczbę numer ${i}`));
    user_nums_sum += new_num;
  }
  alert(`Średnia arytmetyczna podanych liczb to: ${user_nums_sum / quantity}`);
}
// task2();

function task3() {
  const my_list = [123, "asd", 3, 10, null, [45, 9], 15];
  const num_list = my_list.filter((number) => typeof number == "number");
  console.log(num_list);
}
// task3();

//   pol choinki
function task5a() {
  const height = parseInt(prompt("Podaj wysokosc: "));
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
  }
}
// task5a();

//cala choinka
function task5b() {
  const height = parseInt(prompt("Podaj wysokosc: "));
  for (let i = 1; i <= height; i++) {
    console.log(
      " ".repeat(height - i) + "*".repeat(i - 1) + "*" + "*".repeat(i - 1)
    );
  }
}
// task5b();

///////////// funkcje i obiekty ///////////

function task6(n1, n2) {
  if (n1 > n2) {
    return `${n1 - n2}`;
  } else if (n2 > n1) {
    return `${n2 - n1}`;
  } else {
    return `0`;
  }
}
// console.log(task1(10, 6));
// console.log(task1(10, 10));
// console.log(task1(1, 6));

function task7() {
  const prostokat = {
    bok1: 10,
    bok2: 6,
    obliczPole: function () {
      return this.bok1 * this.bok2;
    },
  };

  console.log("Pole: " + prostokat.obliczPole());
}
// task7();

function pow_recursion(num, pow) {
  if (pow === 0) {
    return 1;
  } else {
    return num * pow_recursion(num, pow - 1);
  }
}

console.log(pow_recursion(10, 5));
console.log(pow_recursion(3, 4));
console.log(pow_recursion(5, 0));
