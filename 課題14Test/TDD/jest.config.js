module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**.ts'],
  testMatch: ['**/__tests__/**.ts'],
};
