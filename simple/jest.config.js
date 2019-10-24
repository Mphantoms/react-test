module.exports = {
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        // '^.+\\.css$': '<rootDir>/__test__/css-transform.js',
      },
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], 
}