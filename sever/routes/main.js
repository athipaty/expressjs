const express = require("express")
const router = express.Router();

router.get("", (req, res) => {
    const locals = {
        title: "Athipat",
        description: "First app about me"
    }
    res.render("index", {locals})
})

router.get("/about", (req, res) => {
    res.render("about")
})


module.exports = router;
