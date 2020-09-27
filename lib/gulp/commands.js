const configList = {
  command: 'sfdx:config:list',
  desc: 'List Salesforce config for the project/machine',
  builder: {},
};

const orgList = {
  command: 'sfdx:org:list',
  desc: 'List Salesforce Orgs Authorized on this machine',
  builder: {},
};

module.exports = [configList, orgList];
