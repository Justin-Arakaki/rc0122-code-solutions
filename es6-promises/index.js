const takeAChance = require('./take-a-chance');

const lucky = takeAChance('Justin');
lucky.then(luckers => {
  console.log(luckers);
}, unluckers => {
  console.log(unluckers.message);
});
