//Sum of Digits

function digitalRoot(n) {
  let array = n.toString().split("").map(Number);

  while (array.length > 1) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    array = sum.toString().split("").map(Number);
  }

  return array[0];
}
console.log(digitalRoot(2003));

//

async function fetchUserData() {
  const data = await fetch("https://dummyjson.com/users");
  const users = await data.json();
  return users;
}
async function processUserData(gender) {
  const { users } = await fetchUserData();
  const filteredData = users.filter((item) => item.gender === gender);
  console.log("users :", filteredData);
}
// processUserData("female");
const formattedFemaleData = processUserData("female");  
const formatedData = filteredData.map((user) => {
  return `- Name : ${user.firstName} ${user.lastName}, Age :  ${user.age}`;
  const filteredData = { users }.filter((item) => item.gender === gender);
  return filteredData;
});

console.log(formatedData);
let filteredData = processUserData();
const formatedNData = filteredData.map((user) => {
  return `- Age :  ${user.age}`;
});
console.log(formatedNData);

const initialValue = 0;
const ageSum = formatedNData.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
  );

  // );

  console.log(ageSum);
