const handler = require('./index');
module.exports = (req, res) => { req.url = '/api/events/' + req.query.id; return handler(req, res); };
