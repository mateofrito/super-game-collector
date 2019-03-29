import Games from './Games'

export default function GameConsoles(gameconsoles) {
    return `
    <div class="buttons">
        <button class="console-trigger">Add Console</button>
        <button class="game-trigger">Add Game</button>
    </div>
    <div class ="modal-console">
        <div class="consolemodal-content">
                <span class="close-button">X</span>
                <input type="text" class="add-console__full-name" placeholder="Console Name">
                <input type="text" class="add-console__short-name" placeholder="Console Short Name">
                <input type="text" class="add-console__image-path" placeholder="image URL">
                <button class="add-console__submit">Add Console</button>
        </div>
   </div>
   <div class ="modal-game">
               <div class="gamemodal-content">
                       <span class="close-button2">X</span>
                         <input type="text" class="add-game__name" placeholder="Name">
                         <input type="text" class="add-game__yearreleased" placeholder="Year Released">
                     
                         <button class="add-game__submit">Add Game</button>
                 </div>
   </div>
      <ul class="consoles">
        ${gameconsoles.map(gameconsole => {
            return `
           <li class="console">
            <section class="console__header">
                <img class="console__imagepath" src="${gameconsole.imagePath}"></img>
                <h3 class="console__name">${gameconsole.consoleName}</h3>
            </section>
            <ul class="games">
            ${Games(gameconsole.game)}
            </ul>
            </li>
            `;
          }).join('')}
         
          `;
        }

        // var consolemodal = document.querySelector(".modal-console");
        // var consoletrigger = document.querySelector(".console-trigger")
        // var closeButton = document.querySelector(".close-button");

        // function toggleConsoleModal() {
        //   consolemodal.classList.toggle("show-consolemodal");
        // }

        // function windowOnClick(event) {
        //   if (event.target === consolemodal) {
        //       toggleConsoleModal();
        //   }
        // }

        // consoletrigger.addEventListener("click", toggleConsoleModal);
        // closeButton.addEventListener("click", toggleConsoleModal);
        // window.addEventListener("click", windowOnClick);
        //     <li class="console">
        //     <button class="console-trigger">Add Console</button>
        // <button class="game-trigger">Add Console</button>
        //    <div class ="modal-console">
        //         <div class="consolemodal-content">
        //                 <span class="close-button">X</span>
        //                 <input type="text" class="add-console__full-name" placeholder="Console Name">
        //                 <input type="text" class="add-console__short-name" placeholder="Console Short Name">
        //                 <button class="add-console__submit">Add Console</button>
        //         </div>
        //   </div>
        //   <div class ="modal-game">
        //        <div class="gamemodal-content">
        //                <span class="close-button">X</span>
        //                  <input type="text" class="add-game__name" placeholder="Name">
        //                  <input type="text" class="add-game__yearreleased" placeholder="Year Released">
        //                  <select class="add-game__console" placeholder="Console">${gameconsole.consoleName}</select>
        //                  <button class="add-game__submit">Add Game</button>
        //          </div>
        //    </div>

    //     <!--  <select class="add-game__console" placeholder="Console">
    //     <option value="0">Select Console</option>
    //     <option value="${gameconsole.consoleName}"
    //             text="${gameconsole.consoleName}">
    //     </option>
    //  </select> --!>