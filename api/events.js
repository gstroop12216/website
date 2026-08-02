const handler = require('./index');
module.exports = (req, res) => { req.url = '/api/events'; return handler(req, res); };
