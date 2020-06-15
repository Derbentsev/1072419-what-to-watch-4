module.exports = {
  "setupFiles": [`jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(\.|/)(test|spec))\.(jsx?|tsx?)$`,
  "moduleNameMapper": {
    "^@components(.)$": `/src/components$1`
  },
  "coveragePathIgnorePatterns": [`/test-setup.js`]
};
