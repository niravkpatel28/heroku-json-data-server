// this file will read the the config for all routes.
// once the routes are read it will automatically read the corresponding
// json file

// the exported object will also auto populate the filenames with routes
// Exports the object as a JavaScript object
const fs = require("fs");
const path = require("path");

//Empty Database object
const dataBase = {};
const filenames = process.env.DATABASE_ROUTES.split(" ");

// Read file and return the data
const readFile = (filePath) => {
  const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Returning an object with JSON data. JavaScript object
  return fileData;
};

//For each filename read data and populate database object
filenames.forEach((fileName) => {
  const filePath = path.join(__dirname, "..", "jsonFiles", fileName + ".json");
  dataBase[`${fileName}`] = readFile(filePath);
});

// console.log(dataBase.employees);
module.exports = dataBase;
