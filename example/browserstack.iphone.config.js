'use strict'

module.exports = {
  seleniumHost: 'http://hub.browserstack.com/wd/hub',
  browsers: [
    [{
      'browserName' : 'iPhone',
      'platform' : 'MAC',
      'device' : 'iPhone 5',
      'browserstack.user': 'your-name',
      'browserstack.key': 'your-key'
    },
    {
      'browserName' : 'iPhone',
      'platform' : 'MAC',
      'device' : 'iPhone 5S',
      'browserstack.user': 'your-name',
      'browserstack.key': 'your-key'
    }]
  ],
  envHosts: {
    google: 'http://www.google.com'
  },
  paths: [
    { 'Home Page': '/' }
  ],
  reportFormat: 'file'
};
