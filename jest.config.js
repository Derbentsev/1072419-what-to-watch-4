module.exports = {
  "setupFiles": [`<rootDir>/jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(\.|/)(test|spec))\.(jsx?|tsx?)$`,
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "moduleNameMapper": {
    "^@components(.)$": `/src/components$1`,
  },
  "coveragePathIgnorePatterns": [`/test-setup.js`]
};
