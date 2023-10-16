require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./sever/routes/main"))

app.listen(PORT, () => {
    console.log(`app listening on popt ${PORT}`)
})
