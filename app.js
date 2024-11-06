const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("checking");
});

app.listen(PORT, () => {
  console.log(`Your server is loggin in ${PORT}`);
});
