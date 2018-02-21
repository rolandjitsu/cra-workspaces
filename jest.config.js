const common = require('./jest.config.base');

module.exports = {
    ...common,
    projects: [
        '<rootDir>/packages/*'
    ]
};
