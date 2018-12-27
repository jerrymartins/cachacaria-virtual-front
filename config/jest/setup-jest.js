import 'jest-preset-angular';
import './jestGlobalMocks';

module.exports = {
    preset: 'jest-preset-angular',
    setupTestFrameworkScriptFile: '<rootDir>/config/jest/setup-jest.ts',
    moduleNameMapper: {
        '@core/(.*)': '<rootDir>/config/app/core/$1',
        '@state/(.*)': '<rootDir>/config/app/state/$1'
    }
};