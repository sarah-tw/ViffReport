'use strict'

function size(width) {
  return function (driver) {
    return driver.setWindowSize(width, 600 /* any height*/);
  };
}

module.exports = {
  seleniumHost: 'http://localhost:4444/wd/hub',
  browsers: ['firefox'],
  envHosts: {
    build: 'http://localhost:8000/example/build',
    prod: 'http://localhost:8000/example/prod'
  },
  paths: [
    { 'Tiny CSS Difference': ['/tiny_css_difference.html', size(800)] },
    {
      'Chart Difference': ['/chart_difference.html', function (browser) {
        return size(800)(browser).sleep(2000);
      }]
    },
    { 'Content Difference': ['/content_difference.html', size(1000)] },
    {
      'Number Difference': ['/number_difference.html', size(800)]
    },
    {
      'Event Handling': ['/event_handling.html', function (browser) {
        return browser.elementByCss('#showContent').click();
      }]
    },
    {
      'Partial Difference': ['/content_difference.html', 'tr:nth-of-type(5)', size(800)]
    },
    {
      'Responsive': ['/responsive.html', size(480)]
    }
  ],
  reportFormat: 'file'
};
