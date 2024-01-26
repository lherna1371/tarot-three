const queryString = window.location.search;
console.log(queryString);
//code to conduct search

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
//code "where to search"

const deckId = parseInt(urlParams.get("deck"));
console.log(decks);
//console.log confirms three decks.
//console.log results in an error as "deck" made plural for positive return.

console.log(typeof deckId);
//console.log results "number" decks VARs are not yet assigned therefore correct.

// ** decks-cards.js [] & cardOjects.js [] deck ids were changed to coincide accordingly. decks-cards.js was changed within existing file. cardObjects.js was copied, appropreiate edits and renamed "two-card-objects.js"

console.log(cardObjects);
//console.log confirms all objects are accessed in cardObjects []

let deckCardsData;
//VAR named deckCardsData for loop of card-objects.js []
for (let i = 0; i < cardObjects.length; i++) {
    console.log(cardObjects[i]); 
    //console.log confirms all elements were accessed within the cardObjects.js [].
    if (cardObjects[i].id === deckId) {
        deckCardsData = cardObjects[i];
    }
}
console.log(deckCardsData);
//console.log confirms all elements assigned to each cardObjects.js [].id 
// ** deck_id edit to new "two-card-objects.js" are correct.

let deckSelected;
//VAR named deckData for loop of decks-cards.js []
for (let i = 0; i < decks.length; i++) {
    console.log(decks[i]);
    //console.log returns correct result
    if(decks[i].id === deckCardsData.deck_id) {
        // *** FINALLY! My consistent error was using cardObjects "instead" of the assigned VAR name of deckCardsData --
        deckSelected = decks[i];
    }
}
console.log(deckSelected);
//console.log returns correct result

let cardSelected;
for(let i = 0; i < cards.length; i++){
    console.log(cards[i]);
    if(cards[i].id === deckCardsData.card_id){
        cardSelected = cards[i];
    }
}
console.log(cardSelected);
