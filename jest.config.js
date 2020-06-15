module.exports = {
  "setupFiles": [`<rootDir>/jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(\.|/)(test|spec))\.(jsx?|tsx?)$`,
  "moduleNameMapper": {
    "^@components(.)$": `/src/components$1`,
    "^@consts(.)$": `/src/consts$1`,
  },
  "coveragePathIgnorePatterns": [`/test-setup.js`]
};
