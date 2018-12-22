module.exports = {
  "roots": [
    "<rootDir>/src/app"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|\\.test)\\.ts$",
  "moduleDirectories": [
    "node_modules",
    "src/app"
  ],
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "reporters" : [
    "default",
    "jest-junit"
  ] ,
  "coverageReporters" : [
    "text",
    "cobertura"
  ],
  testEnvironment: 'node',
};
