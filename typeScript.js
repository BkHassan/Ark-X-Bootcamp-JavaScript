const readline = require("readline").createInterface({
     input: process.stdin,
     output: process.stdout,
   });
   
   // Create an empty array to store contacts
   const contacts = [];
   
   // Function to prompt for and create a new contact
   async function addContact() {
     const name = await promptName();
     const phone = await promptPhone();
     const newContact = { name, phone };
     contacts.push(newContact);
     console.log("Contact added successfully.");
   }
   
   // Function to display all contacts
   function displayContacts() {
     if (contacts.length === 0) {
       console.log("There are no contacts in the list.");
     } else {
       console.log("\n**Contacts:**");
       for (const contact of contacts) {
         console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
       }
     }
   }
   
   // Function to search for a contact by name or phone number
   async function searchContact() {
     const searchTerm = await promptName(); // Use same prompt for both name and number
     const foundContact = contacts.find((contact) =>
       contact.name === searchTerm || contact.phone === searchTerm
     );
     if (foundContact) {
       console.log("\n**Contact Found:**");
       console.log(`Name: ${foundContact.name}, Phone: ${foundContact.phone}`);
     } else {
       console.log("Contact not found.");
     }
   }
   
   // Main function to handle user interaction
   async function main() {
     while (true) {
       console.log("\nContact List Menu");
       console.log("1. Add Contact");
       console.log("2. View All Contacts");
       console.log("3. Search for Contact");
       console.log("4. Exit");
   
       const choice = await promptChoice();
   
       switch (choice) {
         case "1":
           await addContact();
           break;
         case "2":
           displayContacts();
           break;
         case "3":
           searchContact();
           break;
         case "4":
           console.log("Exiting application...");
           return; // Exit the main function
         default:
           console.log("Invalid choice. Please try again.");
       }
     }
   }
   
   // Start the application
   main();
   
   // Close readline interface after main completes
   readline.close();
   