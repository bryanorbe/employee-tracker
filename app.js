const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'semper',
    password: 'Skeleton!',
    database: 'tracker_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    start()
})

function start() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "start",
                message: "What would you like to do?",
                choices: ["Add a department", "View all departments", "Add a role", "Remove a role", "View all roles", "Add an employee", "Remove an employee",
                    "View all employees", "View all employees by department", "View all employees by manager", "Update employee role", "Update employee manager", "EXIT"]
            }
        ]).then((response) => {
            if (response.whatToDo === "Add a department") {
                addDept()
            } else if (response.whatToDo === "View all departments") {
                viewAllDept()
            } else if (response.whatToDo === "Add a role") {
                addRole()
            } else if (response.whatToDo === "View all roles") {
                viewAllRoles()
            } else if (response.whatToDo === "Add an employee") {
                addEmp()
            } else if (response.whatToDo === "Remove an employee") {
                removeEmp()
            } else if (response.whatToDo === "View all employees") {
                viewAllEmp()
            } else if (response.whatToDo === "Update employee role") {
                updateEmpRole()
            } else if (response.whatToDo === "Update employee manager") {
                updateEmpManager()
            } else if (response.whatToDo === "View all employees by department") {
                viewAllEmpDept()
            } else if (response.whatToDo === "View all employees by manager") {
                viewAllEmpByManager()
            } else if (response.whatToDo === "Remove a role") {
                removeRole()
            } else {
                connection.end()
            }
        })
}
}