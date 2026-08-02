const handler = require('./index');
module.exports = (req, res) => { const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''; req.url = '/api/uploads' + query; return handler(req, res); };
