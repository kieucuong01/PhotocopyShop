// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const options = {};

options.ip = process.env.HOST || '0.0.0.0';
options.port = process.env.PORT || 8000
options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
// require('total.js').https('release', options);
// require('total.js').cluster.http(5, 'release', options);
