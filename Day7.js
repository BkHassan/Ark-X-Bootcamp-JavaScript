function operation(Fnum, Snum) {
  let sum = Fnum + Snum;
  let diff = Fnum - Snum;
  let pro = Fnum * Snum;
  let quo = Fnum / Snum;
  return [sum, diff, pro, quo];
}
// console.log(operation(7, 5));
let result = operation(10, 11);
console.log("sum:", result[0]);
console.log("diff:", result[1]);
console.log("pro:", result[2]);
console.log("quo:", result[3]);

//
function calculates(length, Width) {
  let areaOfrectangle = length * Width;
  let areaOftriangle = length / 2;
  let perimeterOfrectangle = (length + Width) * 2;
  let perimeterOftriangle = length * 2;
  return [
    areaOfrectangle,
    areaOftriangle,
    perimeterOfrectangle,
    perimeterOftriangle,
  ];
}
let resultat = calculates(14, 9);
console.log("areaOfrectangle:", resultat[0]);
console.log("areaOftriangle:", resultat[1]);
console.log("perimeterOfrectangle:", resultat[2]);
console.log("perimeterOftriangle:", resultat[3]);
//
function converts(Cels, Fahr) {
  let Celsius = Cels * 1.8 + 32;
  let Fahrenheit = (Fahr - 32) / 1.8;
  return [Celsius, Fahrenheit];
}
let resu = converts(50, 28);
console.log("Celsius degre:", resu[0]);
console.log("Farhenheit degre:", resu[1]);

//
function palindrome(word) {
  let array = word.split("");
  let palindArray = array.reverse();
  let plaindStr = palindArray.join("");
  if (word === plaindStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("madam"));

//
function occurrences(word, character) {
  let count = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === character) {
      count++;
    }
  }
  return count;
}
console.log(occurrences("hassan", "s"));

//
function reverseWord(words) {
  for (let i = words.length - 1; i >= 0; i--) {
    console.log(words[i]);
  }
}
reverseWord(["hassan", "oussam", "issam"]);

//

function compare(number) {
  let max = number[0];
  let min = number[0];
  for (i = 0; i <= number.length - 1; i++) {
    if (number[i] >= max) {
      max = number[i];
    }
    if (number[i] <= min) {
      min = number[i];
    }
  }
  console.log(max, min);
}
let number = [5, 7, 3, 57, 1, 9];
compare(number);

//
function filterArray(objectsArray) {
  let name = "";
  let age;
  let job = "";
  let filterKey = "";
  let objectsArray = [{ o1, o2, o3 }];
  o1 = { name: "hassan", age: 20, job: "student" };
  o1 = { name: "ossama", age: 22, job: "student" };
  o1 = { name: "ayoub", age: 29, job: "student" };

  //
}

//
function summarizeAge(totalAge) {}
