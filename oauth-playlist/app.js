const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup')

const app = express();

//Set up view Engine
app.set('view engine', 'ejs');

// SET UP ROUTES
app.use('/auth', authRoutes);

//Create home route
app.get('/', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for request on port 3000');
});