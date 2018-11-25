
class Calculator{
	constructor(){
		this.numStorage=[];
		this.opStorage=[];
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator(operator){
		console.log('condition: ', operator==='*');
		switch(operator) {
			case '+': 
				this.opStorage.push(operator);
				return true;
				break;
			case '-': 
				this.opStorage.push(operator);
				return true;
				break;
			case '*': 
				this.opStorage.push(operator);
				return true;
				break;
			case '/': 
				this.opStorage.push(operator);
				return true;
				break;
			default: 
				return false;
			}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(num){
		if(typeof num === "number" && this.numStorage.length < 2) {
			this.numStorage.push(num);
			return this.numStorage.length;
		} else {
			return false;
		}
	
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		var answer = null;
		console.log(this.opStorage);
		console.log(this.numStorage);
		
		switch(this.opStorage[0]) {
			case '+':
			answer = this.numStorage[0]+this.numStorage[1];
			
			break;
			case '-':
			answer = this.numStorage[0]-this.numStorage[1];
			
			break;
			case '*':
			console.log(this.numStorage[0]);
			
			answer = this.numStorage[0]*this.numStorage[1];
			
			break;
			case '/':
			answer = this.numStorage[0]/this.numStorage[1];
			
			break;
		}

		this.numStorage = [];
		this.opStorage = [];
		return answer;
		
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}