const queryString = window.location.search;
console.log(queryString);
//code to conduct search

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
//code "where to search"

const cardId = parseInt(urlParams.get("card"));
console.log(typeof cardId);
//console.log displays "number" as loop not created.

console.log(cardObjects);
//console.log confirms all objects are accessed in cardObjects []

let deckCardsData;
//VAR named deckCardsData for loop of card-objects.js []
for (let i = 0; i < cardObjects.length; i++) {
    console.log(cardObjects[i]); 
    if (cardObjects[i].id === cardId) {
        deckCardsData = cardObjects[i];
    }
}
console.log(deckCardsData);
//console.log returns as undefined?

let deckData;
//VAR named deckData for loop of decks-cards.js []
for (let i = 0; i < decks.length; i++) {
    console.log(decks[i]);
    if(decks[i].id === cardObjects.deck_id) {
        deckData = decks[i];
    }
}
console.log(deckData);
//console.log returns as undefined?

let cardData;
for (let i = 0; 0 < cards.length; i++) {
    console.log(cards[i]);
    if(cards[i].id === cardObjects.card_id) {
        cardData = cards[i];
    }
}
console.log(cardData);
//console.log returns as undefined?