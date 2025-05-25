const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://singhnishtha206:nish_mongo20S@cluster0.76iht.mongodb.net/user_app")

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
        name: 'Nishtha', 
        email: 'abcd@example.com', 
        password: '123456'
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