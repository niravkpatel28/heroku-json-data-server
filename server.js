// use this for deploying app on heroku
// deloying to heroku https://github.com/jesperorb/json-server-heroku
const jsonServer = require("json-server");
const server = jsonServer.create();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const dataBase = require("./data/populateDatabase");
const router = jsonServer.router(dataBase);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
