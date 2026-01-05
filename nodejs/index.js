const express = require("express");
const app = express();
const PORT = 3000;

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
