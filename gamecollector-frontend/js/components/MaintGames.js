export default function EditGames(games) {
  return games
    .map(game => {
      return `
        <div class="editgame__content">    
            <li class="editgame">
                    <img class="editgame__imagepath" src="${
                      game.imagePath
                    }"></img>
                    <h3 class="editgame__title">${game.gameTitle}
                    <button class="delete-game__btn" id="${
                      game.id
                    }">Delete Game</button></h3>
            </li>

                `;
    })
    .join("");
}
