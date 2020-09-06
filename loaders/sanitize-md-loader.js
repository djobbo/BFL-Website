const sanitize = require('sanitize-html');

const options = {
    allowedTags: ['table', 'details', 'summary', 'br'],
    allowedAttributes: [],
};

module.exports = (source) => sanitize(source, options);
