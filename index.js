const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://singhnishtha206:nish_mongo20S@cluster0.76iht.mongodb.net/user_app")

const User = mongoose.model('users', { name: String, email: String, password: String });

const user = new User({ 
    name: 'Nishtha', 
    email: 'abcd@example.com', 
    password: '123456'
});

async function saveUser() {
    try {
        const savedUser = await user.save();
        console.log('User saved successfully:', savedUser);
    } catch (err) {
        console.error('Error saving user:', err);
    }
}

saveUser();