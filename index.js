const express = require("express");
const app = express();
const path = require('path');

app.get("/data", (req, res) => {
  res.send({ data: "Hello world" });
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
    
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

app.listen(5000, () => console.log("Started Listening"));
