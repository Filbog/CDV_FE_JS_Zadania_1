let word = prompt("5literowe slowo");
console.log(word);

reversedWord = word.split("").reverse().join("");
if (word == reversedWord) {
  console.log(`Slowo '${word} jest palindromem`);
} else {
  console.log(`Slowo '${word}' nie jest palindromem`);
}
console.log(word == reversedWord);
