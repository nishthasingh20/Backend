const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!(username === "nishtha" && password === "pass")) {
        res.status(400).json({
            "msg": "Invalid inputs"
        })
        return 
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            "msg": "Invalid num"
        })
        return 
    }
    res.json({
        msg:"Your kidney is fine"
    })
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});