
const express = require('express');
const app = express();

// handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",
             "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// route for handling requests
app.get('api/message', (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
})
