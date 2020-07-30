// this file returns the database that will be used by json-server.
// Find entire documentation for all routes
//https://www.npmjs.com/package/json-server
// deloying to heroku https://github.com/jesperorb/json-server-heroku
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const database = require("./data/populateDatabase");

// exporting database for json-server
module.exports = () => {
  return database;
};
