export default function EditGames(games) {
    return games.map(game => {
        return `
        <div class="editgame__content">    
            <li class="editgame">
                    <img class="editgame__imagepath" src="${game.imagePath}"></img>
                    <p><h3 class="editgame__title">${game.gameTitle}</h3>
                    <button class="delete-game__btn" id="${game.id}">Delete Game</button>
                </li>

                `;
            }).join('')
            
}