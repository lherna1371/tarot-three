// VAR assigned to the parent div class ".container" & Confirmed with console.log.
let container = document.querySelector(".container");
// console.log(container);

//invoke function what array to access
loadElements(cardObjects);
function loadElements(array) {
    //VAR named elements to reference array
    let elements = array;
    // console.log(elements);

    //loop through elements array which is actually cardObjects.js array.
    for (let i = 0; i < elements.length; i++){
        //if index references the deck_id (located in cardObjects []) console.log to confirm access to all objects contained within the cardObjects [].
        if (elements[i].deck_id === 1) {
            // console.log(elements[i]);
            // console.log(elements[i].image);
            // console.log(elements[i].image_2);

            //loop [elements] to create <div> confirmed w/ console.log "container" = parent <div>/
            let container = document.createElement("div");
            // console.log(container);
            //set attribute to assign html class name of parent <div> "container"
            container.setAttribute("class", "container");

            //loop [elements] to create <div> confirmed w/ console.log "deckDivCbd" = children <div>
            let deckDivCbd = document.createElement("div");
            // console.log(deckDivCbd);
            //set attribute to assign html class name of child <div> "deck-div-cbd"
            deckDivCbd.setAttribute("class", "deck-div-cbd");
            // console.log(deckDivCbd);

            //loop [elements] to create <div> confirmed w/ console.log "deckDivRw" = children <div>
            let deckDivRw = document.createElement("div");
            // console.log(deckDivRw);
            //set attribute to assign html class name of child <div> "deck-div-rw"
            deckDivCbd.setAttribute("class", "deck-div-rw");
            // console.log(deckDivRw);

            //loop [elements] to create <div> confirmed w/ console.log "deckDivWs" = children <div>
            let deckDivWs = document.createElement("div");
            // console.log(deckDivWs);
            //set attribute to assign html class name of child <div> "deck-div-ws"
            deckDivCbd.setAttribute("class", "deck-div-Ws");
            // console.log(deckDivWs);

            //loop to add text content for H3 - 
            let cardHeader = document.createElement("h3");
            cardHeader.setAttribute("class", "deck-name");
            // console.log(cardHeader);

            //loop [elements] to create "img" (image_2 added to cardObjects = back of card)
            //set attribute to assign class name in html "card-back"
            //set attribute to index src located in elements (cardObjects[]) as image_2
            let img2 = document.createElement("img");
            img2.setAttribute("class", "card-back");
            img2.setAttribute("src", elements[i].image_2);
            // console.log(img2);
            
            //loop to create an anchor for each deck located on homepage to pass to individual deck page.
            let clickView = document.createElement("a");
            clickView.setAttribute("class", "click-view");
            clickView.setAttribute("href", `./deck.html?deck=${elements[i].id}`);
            clickView.textContent = "Click to view";
            // console.log(clickView);

            //append elements to each child <div>. (cbd,rw,ws - decks)
            //confirmed in console.log
            deckDivCbd.append(cardHeader);
            deckDivCbd.append(img2);
            deckDivCbd.append(clickView);
            // console.log(deckDivCbd);
            
            deckDivRw.append(cardHeader);
            deckDivRw.append(img2);
            deckDivRw.append(clickView);
            // console.log(deckDivRw);

            deckDivWs.append(cardHeader);
            deckDivWs.append(img2);
            deckDivWs.append(clickView);
            // console.log(deckDivWs);

            //append deckDiv "children" <div> to Container "parent" <div>
            container.append(deckDivCbd);
            container.append(deckDivRw);
            container.append(deckDivWs);
            // console.log(container);
        }
    }
    let allDecks = document.querySelectorAll(".container");
    console.log(allDecks);
    console.log(allDecks[0]);
}



