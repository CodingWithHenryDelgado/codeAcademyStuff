const express = require('express');

const app = express();

//Set up view Engine
app.set('view engine', 'ejs');

//Create home route
app.get('/', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for request on port 3000');
});