const _ = require('lodash');
const sfdx = require('sfdx-node');
const sfdxParallel = require('sfdx-node/parallel');

const configList = async () => {
  const orgList = await sfdx.config.list({
    _quiet: false,
    _rejectOnError: true,
  });
  return orgList;
};

const orgList = async () => {
  const orgList = await sfdxParallel.org.list({
    _quiet: false,
    _rejectOnError: true,
  });
  if (orgList && Array.isArray(orgList.nonScratchOrgs)) {
    const { nonScratchOrgs } = orgList;
    for (let i = 0; i < nonScratchOrgs.length; i += 1) {
      const currOrg = nonScratchOrgs[i];
      if (!_.has(currOrg, 'isDevHub')) {
        try {
          const orgObj = await Org.create({ aliasOrUsername: currOrg.username });
          const isDevHub = await orgObj.determineIfDevHubOrg();
          currOrg.isDevHub = isDevHub;
        } catch (e) {
          // Ignore error
          currOrg.isDevHub = false;
        }
      }
    }
  }
  return orgList;
};

module.exports = {
  configList,
  orgList,
};
