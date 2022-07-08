const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/redirect_uri", (req, res) => {
  const code = req.query.code;
  console.log(`Capturing code -->>> ${code}`);
  res.send(`Captured the redirect code: ${code}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
