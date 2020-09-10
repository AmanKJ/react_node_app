const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  res.send({ data: "Hello world" });
});

app.listen(5000, () => console.log("Started Listening"));
