const express = require("express");

const router = express.Router();

const {registerUser} = require("../controllers/userControllers")
const {authUser} = require("../controllers/loginController")


router.post('/', registerUser);
router.post('/login', authUser);


module.exports = router;