module.exports = {
  "rootDir": `./src`,
  "transform": {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  "testRegex": `.test.(js?|jsx?|tsx?)$`,
  "transformIgnorePatterns": [`/node_modules/`],
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "verbose": true,
  "moduleNameMapper": {
    "^@components(.*)$": `<rootDir>/src/components/$1`,
    "^@consts(.*)$": `<rootDir>/src/consts/$1`,
    "^@adapters(.*)$": `<rootDir>/src/adapters/$1`,
    "^@hocs(.*)$": `<rootDir>/src/hocs/$1`,
    "^@utils(.*)$": `<rootDir>/src/utils/$1`,
    "^@src(.*)$": `<rootDir>/src/$1`,
    "^@reducer(.*)$": `<rootDir>/src/reducer/$1`,
    "^@api(.*)$": `<rootDir>/src/api/$1`,
    "^@history(.*)$": `<rootDir>/src/history/$1`,
  },
};
