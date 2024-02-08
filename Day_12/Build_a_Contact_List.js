// //
// const readline = require("readline");
// const contacts = {};
// // Create the readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function addContact() {
//     // Prompt for name, indicating allowed characters
//     rl.question("enter the name: ", (name) => {
//     if (/[^a-zA-Z ]/.test(name)) {
//       console.error("Name most only contain charachter.");   
//       return;
//     }
//     // Prompt for phone number, explaining the length requirement
//     rl.question("enter the phone number: ", (phoneNumber) => {
//       if (phoneNumber.length !== 10) {
//         console.error("phoneNumber most be 10 digit.");
//         // addContact();
//         return;
//       }
//       contacts[name] = phoneNumber; // store contact information
//       // Log a confirmation message
//       console.log(`Contact ${name} added with phone number ${phoneNumber}`);
//       // Close the readline interfac
//       rl.close();
//     });
//   });

//   function displayContacts() {
//     if (Object.keys(contacts).length === 0) {
//       console.log("No contacts added yet.");
//       return;
//     }
  
//     console.log("\nContacts:\n");
//     for (const name in contacts) {
//         console.log(`- ${name}: ${contacts[name]}`);
//       }
//     }
//   }
//     // Start the process of adding contacts
//     // addContact();
  
  
 

// function mainMenu() {
//   console.log("\nMain Menu:");
//   console.log("1. Add contact");
//   console.log("2. Display all contacts");
//   console.log("3. Search for a contact");
//   console.log("0. Exit");

//   rl.question("Enter your choice: ", (choice) => {
//     choice = parseInt(choice); // Convert to number for easier comparison
//     if (choice < 0 || choice > 3) {
//       console.error("Invalid choice. Please enter a number between 0 and 3.");
//       mainMenu(); // Recursively call for valid input
//     } else {
//       handleChoice(choice); // Call appropriate function based on choice
//     }
//   });
// }

const prompt = require('prompt');

// Contact structure
const Contact = {
  name: "",
  phone: "",
};

// Contact list (initially empty)
let contacts = [];

// Prompt functions
function promptName() {
  return new Promise((resolve, reject) => {
    prompt({
      name: 'name',
      message: 'Enter name:',
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.name);
      }
    });
  });
}

function promptPhone() {
  return new Promise((resolve, reject) => {
    prompt({
      name: 'phone',
      message: 'Enter phone number:',
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.phone);
      }
    });
  });
}

// Main function
async function main() {
  while (true) {
    console.log('\nContact List Menu');
    console.log('1. Add Contact');
    console.log('2. View All Contacts');
    console.log('3. Search for Contact');
    console.log('4. Exit');

    const choice = await prompt({
      name: 'choice',
      message: 'Enter your choice:',
    }).then(result => result.choice);

    switch (choice) {
      case '1':
        const name = await promptName();
        const phone = await promptPhone();
        const newContact = new Contact({ name, phone });
        contacts.push(newContact);
        console.log('Contact added successfully.');
        break;
      case '2':
        if (contacts.length === 0) {
          console.log('There are no contacts in the list.');
        } else {
          console.log('\n**Contacts:**');
          for (const contact of contacts) {
            console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
          }
        }
        break;
      case '3':
        const searchName = await promptName();
        const foundContact = contacts.find(contact => contact.name === searchName);
        if (foundContact) {
          console.log(`Name: ${foundContact.name}, Phone: ${foundContact.phone}`);
        } else {
          console.log('Contact not found.');
        }
        break;
      case '4':
        console.log('Exiting application...');
        return;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

// Start the application
main();

