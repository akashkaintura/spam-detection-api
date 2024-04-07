const contactService = require('../services/contactService');

exports.getContactDetails = async (req, res, next) => {
    try {
        const contact = await contactService.getContactDetails(req.params.id, req.user.id);
        res.json({ success: true, data: contact });
    } catch (err) {
        next(err);
    }
};