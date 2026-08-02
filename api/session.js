const handler = require('./index');
module.exports = (req, res) => { req.url = '/api/session'; return handler(req, res); };
