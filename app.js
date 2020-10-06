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
