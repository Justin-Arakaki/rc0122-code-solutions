/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    const newAccount = new Account(this.nextAccountNumber++, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (const x in this.accounts) {
    if (this.accounts[x].number === number) {
      return this.accounts[x];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  let total = 0;
  for (const x of this.accounts) {
    total += x.getBalance();
  }
  return total;
};
