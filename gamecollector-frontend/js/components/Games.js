export default function Games(games) {
  return games
    .map(game => {
      return `
                <li class="game">
                    <img class="game__imagepath" src="${game.imagePath}"></img>
                </li>
                <div class ="game-info__modal">
                    <div class="game-infomodal-content">
                        <span class="close-button4">X</span>
                        <img class="game__infoimagepath" src="${
                          game.screenShot
                        }"></img>
                        <div class="game__desciption">
                            <h2 class ="game__title">${game.gameTitle}</h2>
                            <p class ="game__yearreleased">${
                              game.yearReleased
                            }</p>
                        </div>
                    </div>
                </div>
            `;
    })
    .join("");
}

{
  /* <p><h3 class="game__title">${game.gameTitle}</h3>
<h5 class="game__yearreleased">${game.yearReleased}</h5></p> */
}
