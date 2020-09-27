const { gulp, yargs: y } = require('@appirio/appirio/singleton');

/**
 * TASK: sfdx:org:list
 *
 * List Salesforce Orgs Authorized on the user machine
 *
 */
gulp.task('sfdx:org:list', () => {
  const sfdxUtils = require('../lib/sfdx/sfdxUtils');
  return sfdxUtils.orgList();
});

/**
 * TASK: sfdx:config:list
 *
 * List Salesforce config (default username/devhubusername)
 *
 */
gulp.task('sfdx:config:list', () => {
  const sfdxUtils = require('../lib/sfdx/sfdxUtils');
  return sfdxUtils.configList();
});
