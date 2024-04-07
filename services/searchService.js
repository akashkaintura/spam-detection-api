const { User, Contact } = require('../models');

exports.searchByName = async (name) => {
    return await User.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
};

exports.searchByPhone = async (phoneNumber) => {
    return await Contact.findAll({ where: { phoneNumber } });
};
