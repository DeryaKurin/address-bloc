const inquirer = require('inquirer');
const ContactController = require("../controllers/ContactController");
let date = require('date-and-time');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit",
          "Get date and time"
        ]
      }
    ];
    this.book = new ContactController();
}

  main() {
    console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Exit":
           this.exit();
           break;
         case "Get date and time":
           this.getDate();
           break;
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
  }

  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getDate() {
    let now = new Date();
    console.log(date.format(now, 'ddd MMM DD YYYY HH:mm'));
  }

  getContactCount() {
    return this.contacts.length;
  }

  remindMe() {
    return "Learning is a life-long pursuit";
  }

};
