const { User, Contact } = require('../models');

exports.getContactDetails = async (contactId, userId) => {
    const contact = await Contact.findByPk(contactId);
    if (!contact) {
        throw new Error('Contact not found');
    }

    const userDetails = {
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        spamLikelihood: contact.spamLikelihood
    };

    if (contact.userId) {
        const user = await User.findByPk(contact.userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.contacts.includes(userId)) {
            userDetails.email = user.email;
        }
    }

    return userDetails;
};