
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
  const filteredData = users.filter((item) => item.gender !== gender);
  console.log("users :", filteredData);
  return filteredData;
}

const summarizeAge = (users) => {
  const totalAge = users.reduce((sum, user) => {
    return sum + user.age;
  }, 0);
  return totalAge;
};

async function main() {
  const filteredData = await processUserData("male");
  const formattedData = filteredData.map((user) => {
    return `- Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;
  });ty
  console.log(formattedData);
  const totalAge = summarizeAge(filteredData);
  console.log("Total age of male users:", totalAge);
}

main();

