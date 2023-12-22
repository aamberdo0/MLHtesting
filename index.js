// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container"); 
// create a function that adds all data from the games array to the page

function addGamesToPage(games) {
        for(let i = 0; i<games.length; i++){
            // create a new div element, which will become the game card
            const anotherDiv = document.createElement("div"); 
           // add the class game-card to the list
            anotherDiv.classList.add("game-card"); 

        // set the inner HTML using a template literal to display some info about each game
            anotherDiv.innerHTML=`
            <img class="game-img"
             src="${games[i].img}"/>
            <h3>${games[i].name}</h3>
            ${games[i].description}  
            <p>Backers: ${games[i].backers}</p> `;
             // append the game to the games-container
            gamesContainer.appendChild(anotherDiv); 
        }
}
