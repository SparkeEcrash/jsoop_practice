class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = {};
    //takes in the name of the bank.
    //makes an object to store all accounts into
  }
  makeAccount(accountNum) {
    //makes an account
    //takes in the account number of an account
    //checks if the account number already exists in the account storage object in the constructor
    //if already exists, returns false
    //otherwise makes an new Account object
    //returns the Account object that was constructed
    for (var acctNum in this.accounts) {
      if (acctNum === accountNum) {
        return false;
      }
    }
	const account = new Account();
	this.accounts[accountNum] = account;
    return account;
  }
  checkForAccount(accountNum) {
    //checks if an account exists or not
    //takes in the account number of an account
    //returns false if the account does not exist in the accounts object from the constructor
    //returns true if the account does exist
    console.log(this.accounts);
    for (var acctNum in this.accounts) {
      if (acctNum === accountNum) {
        return true;
      }
    }
    return false;
  }
  removeAccount(accountNum) {
    //removes an account
    //takes in an account number
    //if the account doesn't exist, returns
    //"account <accountNumber> does not exist" where accountNumber is the account number
    //if the account is not empty, returns
    //'account is not empty'
    //otherwise deletes the account from the constructor storage
    //returns
    // 'account <accountNumber> deleted'
    if (!this.checkForAccount(accountNum)) {
      return `account ${accountNum} does not exist`;
    } else if (this.accounts[accountNum].amount !== 0) {
      return `account is not empty`;
    } else {
      delete this.accounts.accountNum;
      return `account ${accountNum} deleted`;
    }
  }
  deposit(accountNum, amount) {
    //deposits money into an account
    //takes in an account number and a numeric amount
    //if the account doesn't exist, returns
    //'account does not exist'
    //otherwise uses the account's add method and adds to the account
    //returns
    //"account <accountNumber> now has <new account amount>
    if (!this.checkForAccount(accountNum)) {
      return "account does not exist";
    } else {
      this.accounts[accountNum].add(amount);
      return `account ${accountNum} now has ${
        this.accounts[accountNum].amount
      }`;
    }
  }
  withdraw(accountNum, amount) {
    //removes money from an account
    //takes in an account number and an amount
    //checks if the account exists, if not
    //return 'account does not exist'
    //uses the Account's remove method to withdraw funds from the account
    //returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
    if (!this.checkForAccount(accountNum)) {
      return "account does not exist";
    } else {
      var withdrawal = this.accounts[accountNum].remove(amount);
      return `removed ${withdrawal} from account ${accountNum}. It now has ${
        this.accounts[accountNum].amount
      }`;
    }
  }
}
