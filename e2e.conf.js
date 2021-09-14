let htmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['src/e2e/*.spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new htmlReporter({
      baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
    by.addLocator('css_sr', (cssSelector, opt_parentElement, opt_rootSelector) => {
      let selectors = cssSelector.split('::sr');
      if (selectors.length === 0) {
          return [];
      }
  
      let shadowDomInUse = (document.head.createShadowRoot || document.head.attachShadow);
      let getShadowRoot  = (el) => ((el && shadowDomInUse) ? el.shadowRoot : el);
      let findAllMatches = (selector, targets, firstTry) => {
          let using, i, matches = [];
          for (i = 0; i < targets.length; ++i) {
              using = (firstTry) ? targets[i] : getShadowRoot(targets[i]);
              if (using) {
                  if (selector === '') {
                      matches.push(using);
                  } else {
                      Array.prototype.push.apply(matches, using.querySelectorAll(selector));
                  }
              }
          }
          return matches;
      };
  
      let matches = findAllMatches(selectors.shift().trim(), [opt_parentElement || document], true);
      while (selectors.length > 0 && matches.length > 0) {
          matches = findAllMatches(selectors.shift().trim(), matches, false);
      }
      return matches;
  });
  }
}
