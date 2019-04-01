import Games from './Games'

export default function GameConsoles(gameconsoles) {
    return `
    <div class="buttons">
        <button class="console-trigger">Add Console</button>
        <button class="game-trigger">Add Game</button>
        <button class="company-trigger">Add Publisher/Manufacture</button>
    </div>
    <div class ="modal-console">
        <div class="consolemodal-content">
                <span class="close-button">X</span>
                <input type="text" class="add-console__full-name" placeholder="Console Name">
                <input type="text" class="add-console__short-name" placeholder="Console Short Name">
                <input type="text" class="add-console__image-path" placeholder="image URL">
                <input type="text" class="add-game_manufacture" placeholder="Manufacturer">
                <button class="add-console__submit">Add Console</button>
        </div>
   </div>
   <div class ="modal-game">
               <div class="gamemodal-content">
                       <span class="close-button2">X</span>
                         <input type="text" class="add-game__name" placeholder="Game Title">
                         <input type="text" class="add-game__yearreleased" placeholder="Year Released">
                         <input type="text" class="add-game_publisher" placeholder="Publisher">
                         <input type="text" class="add-console__forgames" placeholder="Console">
                         <input type="text" class="add-game__image-path" placeholder="Image URL">
                         <button class="add-game__submit">Add Game</button>
                 </div>
   </div>
   <div class ="modal-company">
   <div class="companymodal-content">
           <span class="close-button3">X</span>
           <input type="text" class="add-company__name" placeholder="Console Name">
           <input type="text" class="add-company__image-path" placeholder="Company Logo">
           
           
           <button class="add-company__submit">Add Company</button>
   </div>
</div>
   
      <ul class="consoles">
        ${gameconsoles.map(gameconsole => {
          console.log(gameconsole)
          console.log(gameconsole.games)
            return `
           <li class="console">
            <section class="console__header">
                <img class="console__imagepath" src="${gameconsole.imagePath}"></img>
                <h3 class="console__name">${gameconsole.consoleName}</h3>
            </section>
            <ul class="games">
            ${Games(gameconsole.games)}
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