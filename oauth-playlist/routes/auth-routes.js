const router = require('express').Router();

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
router.get('/google', (req, res) => {
    // HANDLE WITH PASSPORT
    res.send('logging in with google');
});

module.exports = router;