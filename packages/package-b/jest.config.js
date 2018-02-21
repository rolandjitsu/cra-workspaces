const {resolve} = require('path');
const common = require('../../jest.config.base');

module.exports = {
    ...common,
    moduleNameMapper: {
        'package-a': resolve(__dirname, '..', 'package-a/src')
    }   
};
