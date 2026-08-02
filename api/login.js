const handler = require('./index');
module.exports = (req, res) => { req.url = '/api/login'; return handler(req, res); };
