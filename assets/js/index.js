// VAR assigned to the parent div class ".deck-container" & Confirmed with console.log.
let deckContainer = document.querySelector(".deck-container");
console.log(deckContainer);

//invoke function to access deck.js []
loadDeckElements(decks);

function loadDeckElements(deckDataArray) {

    //loop through deckDataArray array = deck.js
    for (let i = 0; i < deckDataArray.length; i++) {
            console.log(deckDataArray[i]);
            
        //loop [deckDataArray] to create <div> confirmed w/ console.log "container" = parent <div>/
        let deckDiv = document.createElement("div");
        console.log(deckDiv);
        deckDiv.setAttribute("class", "deck-div");

        //loop to add text content for h3
        let deckHeader = document.createElement("h3");
        deckHeader.setAttribute("class", "deck-name");
        deckHeader.textContent = deckDataArray[i].name;
        console.log(deckHeader);

        //loop to image from [deckDataArray]
        let img = document.createElement("img");
        img.setAttribute("class", "card-back");
        img.setAttribute("src", deckDataArray[i].card_back);
        img.setAttribute("alt", "card back");
        console.log(img);
            
        //loop to create an anchor - each deck index.html to pass to deck.html.
        let deckLink = document.createElement("a");
        deckLink.setAttribute("href", `./deck.html?deck=${deckDataArray[i].id}`);
        deckLink.textContent = "View Here";
        console.log(deckLink);

        //append elements to deckDiv
        deckDiv.append(deckHeader);
        deckDiv.append(img);
        deckDiv.append(deckLink);
        console.log(deckDiv);

        //append deckDiv to deckContainer "parent" <div>
        deckContainer.append(deckDiv);
        console.log(deckContainer);
        }
    }




