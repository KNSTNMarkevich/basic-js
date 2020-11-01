const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === true) {
    let team = '';
    let member;
    let name;
    for (index1 = 0; index1 < members.length; index1 += 1) {
      member = members[index1];
      if (typeof member === 'string') {
        for (index2 = 0; index2 < member.length; index2 += 1) {
        name = member[index2];
        if (name !== ' ') {
          team += name;
          break;
        };
        }
      }
    }
    return team.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};