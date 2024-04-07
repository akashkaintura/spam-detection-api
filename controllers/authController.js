const authService = require('../services/authService');

exports.register = async (req, res, next) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { phoneNumber, password } = req.body;
        const token = await authService.login(phoneNumber, password);
        res.json({ success: true, token });
    } catch (err) {
        next(err);
    }
};