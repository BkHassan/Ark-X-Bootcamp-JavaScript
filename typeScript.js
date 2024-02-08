const { EventEmitter } = require("events"); // Import EventEmitter

// Data storage (replace with preferred mechanism)
const contacts = [];

// Main interface loop
const emitter = new EventEmitter();

function mainLoop() {
  console.log("\nContact List Menu");
  console.log("1. Add Contact");
  console.log("2. View All Contacts");
  console.log("3. Search for Contact");
  console.log("4. Exit");

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter your choice: ", (choice) => {
    emitter.emit("choiceSelected", choice); // Emit event based on choice
    readline.close(); // Close readline after prompt
  });
}

// Event handlers
emitter.on("choiceSelected", (choice) => {
  switch (choice) {
    case "1":
      addContact();
      break;
    case "2":
      viewAllContacts();
      break;
    case "3":
      searchContact();
      break;
    case "4":
      exitApplication();
      break;
    default:
      console.log("Invalid choice. Please try again.");
      mainLoop(); // Recursive call for repeated input
  }
});

// Function implementations
async function addContact() {
  const name = await promptName();
  const phone = await promptPhone();

  // Validate input
  if (!validateName(name)) {
    console.error("Invalid name");
    return;
  }
  if (!validatePhone(phone)) {
    console.error("Invalid phone number");
    return;
  }

  const newContact = { name, phone };
  contacts.push(newContact);
  console.log("Contact added successfully!");
  mainLoop(); // Continue after successful addition
}

function viewAllContacts() {
  if (contacts.length === 0) {
    console.log("There are no contacts in the list.");
    return;
  }

  console.log("\n**Contacts:**");
  for (const contact of contacts) {
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
  }
  mainLoop(); // Continue after display
}

async function searchContact() {
  const searchTerm = await promptName("Enter name or phone number: ");

  const foundContact = contacts.find(
    (contact) => contact.name === searchTerm || contact.phone === searchTerm
  );

  if (foundContact) {
    console.log("\n**Contact Found:**");
    console.log(`Name: ${foundContact.name}, Phone: ${foundContact.phone}`);
  } else {
    console.log("Contact not found.");
  }
  mainLoop(); // Continue after search
}

function exitApplication() {
  console.log("Exiting application...");
  // Add any necessary cleanup (e.g., database connections)
  process.exit(0); // Ensure clean exit
}

// Input validation functions (modify as needed)
function validateName(name) {
  // Implement checks for name validity
  // ...
  return true; // Replace with appropriate logic
}

function validatePhone(phone) {
  // Implement checks for phone number validity
  // ...
  return true; // Replace with appropriate logic
}

// Prompt functions
function promptName(message = "Enter name: ") {
  return new Promise((resolve, reject) => {
    const readline = require("readline").create;
  });
}
