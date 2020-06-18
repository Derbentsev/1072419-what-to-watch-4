module.exports = {
  "setupFiles": [`<rootDir>/jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(\.|/)(test|spec))\.(jsx?|tsx?)$`,
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "moduleNameMapper": {
    "^@components(.*)$": `<rootDir>/src/components/$1`,
    "^@consts(.*)$": `<rootDir>/src/consts/$1`,
    "^@mocks(.*)$": `<rootDir>/src/mocks/$1`,
  },
  "coveragePathIgnorePatterns": [`/test-setup.js`]
};
