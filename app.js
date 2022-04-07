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

//add department

function addDept() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "deptName",
                message: "Enter department name"
            }
        ]).then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    dept_name: answer.deptName,
                },
                function (err) {
                    if (err) throw err;
                    console.log("The department was added successfully!")
                    innit()
                }
            )
        })
}

//view all departments

function viewAllDept() {
    const query = `
        SELECT dept_name as department FROM department`
            connection.query(query, function (err, res) {
                if (err) throw err;
        console.table(res)
        start()
    })
}
//add role
function addRole() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "roleTitle",
                    message: "Enter Role Title"
                },
                {
                    type: "input",
                    name: "roleSalary",
                    message: "Enter Role Salary"
                },
                {
                    type: "list",
                    name: "roleDeptName",
                    message: "Enter Role Department",
                    choices: function () {
                        let deptArray = [];
                        for (let i = 0; i < res.length; i++) {
                            deptArray.push(res[i].dept_name);
                        }
                        return deptArray;
                    }
                }
            ]).then(function (answer) {
                var chosenDept = res.find(item => item.dept_name === answer.roleDeptName)
                connection.query(
                    "INSERT INTO roles SET ?",
                    {
                        title: answer.roleTitle,
                        salary: parseInt(answer.roleSalary),
                        dept_id: parseInt(chosenDept.id)
                    },
                    function (err) {
                        if (err) throw err;
                        console.log(`The ${answer.roleTitle} role was added successfully!`)
                        start()
                    }
                )
            })
    })
}

//delete role
function removeRole() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "list",
                name: "removeRole",
                message: "Select Role To Remove",
                choices: function () {
                    let roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                }
            }
        ]).then((answer) => {
            var chosenRole = res.find(item => item.title === answer.removeRole)
            connection.query("DELETE FROM roles WHERE ?",
                {
                    id: chosenRole.id
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(`${answer.removeRole} role removed!`)
                    start()
                }
            )
        })
})
}
//view all roles
function viewAllRoles() {
    const query = `
    SELECT r.title, r.salary, d.dept_name AS department 
    FROM roles r 
    LEFT JOIN department d 
    ON r.dept_id = d.id`
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    })
}


//add employee

//delete employee

//view all employees

//view employee by department

//view employee by manager

//update employee role

//update employee manager