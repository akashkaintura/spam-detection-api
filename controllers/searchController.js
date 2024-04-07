const searchService = require('../services/searchService');

exports.searchByName = async (req, res, next) => {
    try {
        const results = await searchService.searchByName(req.query.name);
        res.json({ success: true, data: results });
    } catch (err) {
        next(err);
    }
};

exports.searchByPhone = async (req, res, next) => {
    try {
        const results = await searchService.searchByPhone(req.query.phoneNumber);
        res.json({ success: true, data: results });
    } catch (err) {
        next(err);
    }
};
