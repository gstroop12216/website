const handler = require('./index');
module.exports = (req, res) => { req.url = '/api/uploads'; return handler(req, res); };
