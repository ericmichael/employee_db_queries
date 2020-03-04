// import the library as a class
const Sequelize = require('sequelize');
// instantiate the library for use, connecting to the sqlite database file
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'employees.sqlite'
})
// authenticate to see if the modules are properly installed
sequelize.authenticate()
    .then(() => {
        console.log("Good");
    })
    .catch(err => {
        console.log("Bad: " + err);
    })

const Employee = sequelize.import("./models/employees.js");

//Display every employees name
Employee.findAll().then(users => {
    users.forEach((u) => {
        console.log(u.first_name + " " + u.last_name);
    });
})

//Display every employee in JSON format
Employee.findAll().then(users => {
    console.log("All the users: ", JSON.stringify(users, null, 4));
})