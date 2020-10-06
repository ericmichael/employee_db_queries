// import the library as a class
const Sequelize = require('sequelize');
// instantiate the library for use, connecting to the sqlite database file
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'employees.sqlite'
})
// authenticate to see if the modules are properly installed
// if they are you can comment this out
const Employee = sequelize.import("./models/employees.js");

//Q1: Display every employee in JSON format

//Q2: Display every male in JSON format

//Q3: Display every female that works at Babblestorm in JSON format

//Q4: Display the full name of everyone who is 26 years old (just their full name, not JSON)

//Q5: Display the employee with id=170 in JSON format

//Q6: Display the email address of employee with id=24

//Q7: "Katherina Davenall" is mispelled.
//    Update the employee with id=22
//    Change first name to "Katherine"

//Q8: Delete the employee with id=180 from the DB

//Q9: Try to find the employee with id=1928
//    if the employee exists, output their name
//    if the employee does not exist (is null)
//    then output: Error cannot find employee

//Q10: Add an employee to the databse
//     Here is their info
//     Elon Musk
//     elon@tesla.com
//     49 years old
//     Male
//     Works at Tesla