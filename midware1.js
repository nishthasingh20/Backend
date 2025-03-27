const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;  //in header
    const password = req.headers.password;  //in header
    const kidneyId = req.query.kidneyId;  //as a query parameter

    if(!(username === "nishtha" && password === "pass")) { //same as username != "nishtha" || password != "pass"  
        res.status(400).json({
            "msg": "Invalid inputs"
        })
        return 
    }

    if(kidneyId != 1 || kidneyId != 2) {
        res.status(400).json({
            "msg": "Invalid inputs"
        })
        return 
    }
    res.json({
        msg:"Your kidney is fine"
    })
    
    app.listen(3001);
});