const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    res.status(200).json({
        status: 'success',
        token: createSendToken(user, res),
    });

}


module.exports = {
    register, 
    login
}
