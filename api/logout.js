const handler = require('./index');
module.exports = (req, res) => { req.url = '/api/logout'; return handler(req, res); };
