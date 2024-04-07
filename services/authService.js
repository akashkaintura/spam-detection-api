const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const { User } = require('../models');

exports.register = async ({ name, phoneNumber, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ name, phoneNumber, email, password: hashedPassword });
};

exports.login = async (phoneNumber, password) => {
    const user = await User.findOne({ where: { phoneNumber } });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.generateToken({ userId: user.id });
    return token;
};