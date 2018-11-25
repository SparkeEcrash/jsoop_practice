

class Account{
	constructor(sum){
		if(typeof sum === 'undefined') {
			this.amount = 0;
		} else {
			this.amount = sum;
		}
		//store the amount of money in the account
	}
	add(deposit){
		this.amount += deposit;
		return this.amount;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( withdrawal ){
		if(withdrawal > this.amount) {
			withdrawal = this.amount;
			this.amount = 0;
		} else {
			this.amount-= withdrawal;
		}
		return withdrawal;

		this.amount -= withdrawal;
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amount;
		//returns the amount in the account
	}
}