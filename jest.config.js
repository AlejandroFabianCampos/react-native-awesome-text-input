module.exports = {
  preset: '@testing-library/react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  },
  rootDir: 'awesomeStorybook/src'
};