const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateUniqueID(length) {
  const characters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";

  // Generate 3 random characters
  const randomChars = Array.from({ length: 3 }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }).join("");

  // Generate 4 random digits
  const randomDigits = Array.from({ length: 4 }, () => {
    const randomIndex = Math.floor(Math.random() * digits.length);
    return digits.charAt(randomIndex);
  }).join("");

  // Concatenate characters and digits
  const uniqueID = randomChars + randomDigits;

  return uniqueID;
}

function generatePin() {
  const randomPin = Math.floor(Math.random() * 10000);
  return randomPin.toString().padStart(4, "0");
}

function getCurrentDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  return formattedDate;
}

rl.question("Do you want to create account:", (res) => {
  if (res == "yes") {
    rl.question("Enter your name: ", (name) => {
        const uniqueID = generateUniqueID(10);
        const uniquePin = generatePin();
      
        const userData = {
          accountID: uniqueID,
          name: name,
          pin: uniquePin,
          balance: 0,
          transactions: [],
        };
      
        //   // Read existing JSON file
        const existingData = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
      
        // Append the new user data to the existing data
        existingData.push(userData);
        console.log(existingData);
      
        //   Write the updated data back to the file
        fs.writeFileSync("./users.json", JSON.stringify(existingData, null, 2));
      
        console.log(
          `Hello, ${name}! Your account ID is: ${uniqueID}, and your pin is ${uniquePin}`
        );
    });
  }


  //   Function to handle deposit
  function deposit(amount) {
    userData.balance += amount;
    const depositTransaction = {
      type: "deposit",
      amount: amount,
      date: getCurrentDate(),
    };
    userData.transactions.push(depositTransaction);
  }

  //   Function to handle withdrawal
  function withdraw(amount) {
    if (userData.balance >= amount) {
      userData.balance -= amount;
      const withdrawTransaction = {
        type: "withdraw",
        amount: amount,
        date: getCurrentDate(),
      };
      userData.transactions.push(withdrawTransaction);
    } else {
      console.log("Insufficient funds!");
    }
  }

  console.log("Updated user data with transactions:");
//   console.log(userData);

  // Example deposit of 100
  deposit(300);

  // Example withdrawal of 50
  withdraw(100);

  //    fs.writeFileSync("./users.json", JSON.stringify(existingData, null, 2));

  console.log("Updated user data with transactions:");
  console.log(userData);

  //   let newArr = existingData.filter((item) => {
  //     return item.name.toLowerCase() !== "hassan".toLowerCase();
  //   });
  //   console.log(newArr);
  //   fs.writeFileSync("./users.json", JSON.stringify(newArr, null, 2));

  rl.close();
});
