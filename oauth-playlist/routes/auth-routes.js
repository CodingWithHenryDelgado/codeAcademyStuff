const router = require('express').Router();
const passport = require('passport');

// AUTH LOGIN

router.get('/login', (req, res) => {
    res.render('login');
});

// AUTH LOGOUT
router.get('/logout', (req, res) => {
    // HANDLE WITH PASSPORT
    res.send('logging out');
});

// AUTH WITH GOOGLE 
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//Callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
    res.send('You reached the callback URI')
})

module.exports = router;