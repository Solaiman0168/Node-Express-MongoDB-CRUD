const express = require('express');
const verifyToken = require('../middlewares/authMiddleware.js');
const router = express.Router();


//Only admin can access this router
router.get('/admin', verifyToken, (req, res) => {
    res.json({ message: "Welcome admin" });
})

//Both admin and manager can access this router
router.get('/manager', verifyToken, (req, res) => {
    res.json({ message: "Welcome manager" });
})

//All user can access this router
router.get('/user', verifyToken, (req, res) => {
    res.json({ message: "Welcome user" });
})

module.exports = router;