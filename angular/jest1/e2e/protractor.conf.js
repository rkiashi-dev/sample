// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const jasmineReporters = require('jasmine-reporters');
const HTMLReport = require('protractor-html-reporter-2');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
//  capabilities: {
//    'browserName': 'firefox'
//  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
	    consolidateAll: true,
	    savePath: 'testresults',
	    filePrefix: 'reportXMLoutput'
    }));
  },
  onComplete: function() {
  let browserName, browserVersion, platform;
   const capsPromise = browser.getCapabilities();

   capsPromise.then(function (caps) {
     browserName = caps.get('browserName');
     browserVersion = caps.get('version');
     platform = caps.get('platform');

     const testConfig = {
       reportTitle: 'Protractor Test Report',
       outputPath: './e2e/_report',
       outputFilename: 'ProtractorTestReport',
       screenshotPath: '.',
       testBrowser: browserName,
       browserVersion: browserVersion,
       modifiedSuiteName: false,
       screenshotsOnlyOnFailure: true,
       testPlatform: platform
     };
     new HTMLReport().from('testresults/reportXMLoutput.xml', testConfig);
  } ) ;
 }
};
