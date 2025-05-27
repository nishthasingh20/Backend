require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();

const User = mongoose.model('users', { name: String, email: String, password: String });

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });  //1:41
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({ 
        name: name,
        email: username,
        password: password,
    });

    try {
        const savedUser = await user.save();
        console.log('User saved successfully:', savedUser);
    } catch (err) {
        console.error('Error saving user:', err);
        return res.status(500).send("Error saving user");
    }

    res.json({
        "msg": "User created successfully"
    })
});