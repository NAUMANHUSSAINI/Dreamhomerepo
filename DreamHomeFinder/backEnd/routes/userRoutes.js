const { createUser, getAllUser, loginUser } = require('../controller/userController');
const router = require('express').Router();

// Creating user
router.post('/createUser', createUser);

// Getting all users
router.get('/getAllUser', getAllUser);

// User login
router.post('/loginUser', loginUser);



module.exports = router;










module.exports = router