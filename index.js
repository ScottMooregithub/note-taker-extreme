const express = require("express");
const fs = require("fs/promises");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", async (request, response) => {
  // Use FSreadfile  on db.JSON
  const dbFileContents = await fs.readFile("db/db.json", "utf8");
  //response.send(dbFileContents);
  const newJsonData = JSON.parse(dbFileContents);
  response.render("home", { layout: false });
  //JSON Parse contents of db.JSON
  // Make handlebar template
  // Render HTML page with all notes
});

app.get("/notes", async (request, response) => {
  response.render("notes", { layout: false });
});

app.listen(port, () => {
  console.log(`You're now listening to port ${port} the juice`);
});

module.exports = app;

//capture user input

//push to db.json

//
