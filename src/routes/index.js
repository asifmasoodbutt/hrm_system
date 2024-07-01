const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// router.get('/users', UserController.getAllUsers);

module.exports = router;