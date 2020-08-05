module.exports = {
  "setupFiles": [`<rootDir>/jest.setup.js`],
  "transform": {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(\.|/)(test|spec))\.(jsx?|tsx?)$`,
  "transformIgnorePatterns": [`/node_modules/`],
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "moduleNameMapper": {
    "^@components(.*)$": `<rootDir>/src/components/$1`,
    "^@consts(.*)$": `<rootDir>/src/consts/index`,
    "^@adapters(.*)$": `<rootDir>/src/adapters/$1`,
    "^@hocs(.*)$": `<rootDir>/src/hocs/$1`,
    "^@utils(.*)$": `<rootDir>/src/utils/$1`,
    "^@src(.*)$": `<rootDir>/src/$1`,
    "^@reducer(.*)$": `<rootDir>/src/reducer/$1`,
    "^@api(.*)$": `<rootDir>/src/api/$1`,
    "^@history(.*)$": `<rootDir>/src/history/$1`,
  },
  "coveragePathIgnorePatterns": [`/test-setup.js`]
};
