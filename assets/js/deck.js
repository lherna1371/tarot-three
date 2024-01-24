const queryString = window.location.search;
console.log(queryString);
//code to conduct search

const urlParams = new URLSearchParams(queryString);
console.log(urlparams);
//code "where to search"

const cardId = parseInt(urlParams.get("card"));
console.log(typeof cardId);
//query all cardIds and provide

console.log(cardObjects);
//console.log confirms all objects are accessed in cardObjects []

let cardObjData
//VAR named cardObjData to access card-objects.js []
for (let = i; 0 < cardObjects.length; i++) {
    console.log(cardObjects[i]);
    if(cardObjects[i].id === cardId) {
        cardObjData = cardObjects[i];
    }
}
console.log(cardObjData);
//console.log to confirm ojects assigned to card

let selectedDeck;
//loop decks-cards.js [] assign "deck-name" to deck_id
for(let i = o; i < decks.length; i++) {
    console.log(decks[i]);
    //console.log to confirm all decks assigned
    if(decks[i]id === cardObjData.deck_id ) {
    //then loop through card-objects.js [] to assign all objects to each deck    
        selectedDeck == decks[i];
        // console.log to confirm assignement complete
    }
}
console.log(selectedDeck);
//confirm all decks assigned
