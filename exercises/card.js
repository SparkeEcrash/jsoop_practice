class Card {
  constructor(suite, faceValue) {
    this.suite = suite;
    this.faceValue = faceValue;
  }
  getSuite() {
    return this.suite;
  }
  getFaceValue() {
    return this.faceValue;
  }
}

class Deck {
  constructor() {
    this.deck = [];
    //takes in nothing
    //make storage for your card objects
  }
  addCard(suite, faceValue) {
    //adds a card to the deck
    //takes in a string suite and faceValue
    //makes a new card Object from the Card template
    var card = new Card(suite, faceValue);

    //adds the card object to the storage in the constructor
    this.deck.push(card);

    //returns the amount of cards currently stored
    return this.deck.length;
  }
  shuffle() {
    var unshuffledDeck = this.deck;
    var shuffledDeck = [];

    //reorders the cards in the storage array in a random order
    //takes in nothing
    //returns nothing
    unshuffledDeck.forEach(function(card) {
      var randomIndex = Math.floor(Math.random() * (shuffledDeck.length + 1));
      shuffledDeck.splice(randomIndex, 0, card);
	});
	this.deck = shuffledDeck;
  }
  getCardCount() {
	  var count = this.deck.length;
	  return count;
    //gets the current amount of cards stored
    //takes in nothing
    //returns the amount of cards stored in the array in the constructor
  }
  dealCards(num) {
	  var cardsDealt = [];
	  if(num <= this.deck.length) {
	  for(var i=0; i<num; i++) {
		var card = this.deck.pop();
		cardsDealt.push(card);
	  }
	} else {
		for(var i=0; i<this.deck.length; i++) {
			var card = this.deck.pop();
			cardsDealt.push(card);
		}
	}

	  return cardsDealt;
    //deals out a number of cards
    //takes in the number of cards to deal
    //removes that many cards from the deck
    //returns an array with that many cards in it
    //cannot return more cards than the deck has
  }
}
