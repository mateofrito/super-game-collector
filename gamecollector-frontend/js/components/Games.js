export default function Games(games) {
    return games.map(game => {
            return `
                <li class="game">
                    <img class="game__imagepath" src="${game.imagePath}"></img>
                    <p><h3 class="game__title">${game.gameTitle}</h3>
                    <h5 class="game__yearreleased">${game.yearReleased}</h5></p>
                </li>
            `;
        }).join('')
}