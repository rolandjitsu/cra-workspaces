const common = require('../../jest.config.base');

module.exports = {
    ...common,
    globals: {
        'ts-jest': {
            tsConfigFile: './tsconfig.spec.json',
            enableTsDiagnostics: true
        }
    }
};
