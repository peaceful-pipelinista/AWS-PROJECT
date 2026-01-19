const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  const name = req.body.name;

  const response = await fetch(process.env.BACKEND_URL + "/submit", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `name=${name}`
  });

  const data = await response.json();
  res.send(`<h2>${data.message}</h2>`);
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Frontend running on http://localhost:3000");
});
