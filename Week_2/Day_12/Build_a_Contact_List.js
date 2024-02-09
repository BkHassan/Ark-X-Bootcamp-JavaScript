const readline = require("readline");
const clearTerminal = () => {
  rl.output.write("\x1B[0;0H");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const processInput = async (qs) => {
  return new Promise((resolve, reject) => {
    rl.question(qs, (answer) => {
      resolve(answer);
      clearTerminal();
    });
  });
};

let contacts = [{ name: "oussama", number: "0645454544" }];

const createNewContact = async () => {
  let name = await processInput("Enter a name : ");
  let number = await processInput("Enter a number : ");
  contacts.push({ name, number });
  console.log(` New contact saved successfully!\n- Name : ${name}.\n- Phone : ${number}`
  );
};

const showContacts = () => {
  console.log(
    "--------------------> Here's your contacts <------------------\n"
  );
  let displayContacts = contacts
    .map((c) => `- Name : ${c.name} Phone : ${c.number}`)
    .join("\n");
  console.log(displayContacts, "\n");
};

const searchByName = async () => {
  const question = "Enter a name to search : ";
  const name = await processInput(question);
  let contact = contacts.find((c) => c.name === name);
  if (contact) {
    console.log("Contact found:");
    console.log(`- Name : ${contact.name} Phone : ${contact.number}`);
  } else {
    console.log(
      `The contact you're looking for with name ${name} doesn't exist!`
    );
  }
};

const program = async () => {
  let isFirstTime = true;
  while (true) {
    isFirstTime
      ? console.log("\nWelcome back! feel free to use your contacts app 😎\n")
      : console.log("\nReady for more? 😎");
    isFirstTime = false;
    const option = await processInput(
      "\nIf you want to show all contacts, type number 1\n\nIf you want to search for a specific contact, type number 2\n\nIf you want to create a new contact, type number 3\n\nTo leave the program, type number 0\n\nInput : "
    );
    if (option === "3") {
      clearTerminal();

      await createNewContact();
    } else if (option === "2") {
      clearTerminal();

      await searchByName();
    } else if (option === "1") {
      clearTerminal();

      showContacts(); // Wait for searchByName to finish
    } else if (option === "0") {
      clearTerminal();

      break;
    } else {
      console.log("Please type one of the choices and try again!");
    }
  }
};

(async () => {
  try {
    console.log("The start of our program");
    await program();
    rl.close();
  } catch (error) {
    console.log(error);
  }
})();