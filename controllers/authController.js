const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const checkUsername = await User.findOne({ username });
        if (checkUsername) {
            return res.status(404).json({
                status: "fail",
                message: `Username ${username} already exist!`
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({
            status: 'success',
            message: `User registered with username ${username}`,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: `User with username ${username} not found`
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: 'fail',
                message: `Invalid credential`
            });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.status(200).json({ 
            status: "success",
            message: "Successfully loged in",
            token : token,
            data: user
        });
    } catch (err) {
        res.status(500).json({
            status: "success",
            message: "Something went wrong"
        });
    }

    // const user = await User.findOne({ email }).select('+password');

    // if (!user || !(await user.correctPassword(password, user.password))) {
    //     return next(new AppError('Incorrect email or password', 401));
    // }

    // res.status(200).json({
    //     status: 'success',
    //     token: createSendToken(user, res),
    // });



}


module.exports = {
    register,
    login
}
