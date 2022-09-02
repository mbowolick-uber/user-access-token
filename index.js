const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello there :)");
});

app.get("/redirect_uri", (req, res) => {
  const code = req.query.code;
  console.log(`Capturing code -->>> ${code}`);
  res.send(`Captured the redirect code: ${code}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`\nhttp://localhost:${port}\n`);
  console.log(
    `You should see "Hello there" if working correctly :) \nCtrl + c to STOP`
  );
});
