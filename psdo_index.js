const {prompt} = require('inquirer');
const db = require('./db/psdo_index.js');
require('console.table');
const logo = require('asciiart-logo');

// const db = require("./db");

require("console.table");

initApp();

function initApp() {
  const logoText = logo({name: "Employee Manager"}).render();

  console.log(logoText);

  promptExampleQuestions();
}

function promptExampleQuestions() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees in store",
          value: "VIEW_EMPLOYEE_CLASS"
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES"
        },
        {
          name: "Add Role",
          value: "ADD_ROLE"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    // Call the appropriate function depending on what the user chose
    switch (choice) {
      case "VIEW_EMPLOYEE_CLASS":
        viewAllEmployeeClass();
        break;
      case "VIEW_ROLES":
        viewROLES();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      default:
        quit();
    }
  }
  )
};

function viewAllEmployeeClass() {
  db.findAllEmployeeClasses()
    .then((dbResults) => {
      console.log("db results: ", dbResults);
      const [rows] = dbResults;
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => promptExampleQuestions());
};

function viewRoles() {
  db.findAllRoles()
    .then(([rows]) => {
      let courses = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => promptExampleQuestions());
};

function addRole() {
  prompt([
    {
      name: "name",
      message: "What is the name of the Role?"
    }
  ])
    .then(res => {
      let name = res;
      db.createCourse(name)
        .then(() => console.log(`Added ${name.name} to the database`))
        .then(() => promptExampleQuestions())
    })
};

function quit() {
  console.log("Goodbye!");
  process.exit();
}

