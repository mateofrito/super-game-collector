import Games from "./Games";
import CompanyOptions from "./CompanyOptions";
import apiActions from "../utils/api/api-actions";

export default function GameConsoles(gameconsoles) {
  return `
    <div class="nav--buttons">
        <span class="console-trigger">Add Console</span>
        <span class="game-trigger">Add Game</span>
        <span class="company-trigger">Add Publisher/Manufacture</span>
        <span class="remove-game">Delete Games</span>
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
                        <h2 class="modal__header">Add Game</h2>
                         <input type="text" class="add-game__name" placeholder="Game Title">
                         <input type="text" class="add-game__yearreleased" placeholder="Year Released">
                         <select type="text" class="add-game_publisher" placeholder="Publisher">
                                
                         </select>
                         <select type="select" class="add-console__forgames" placeholder="Select Console">
                           ${gameconsoles
                             .map(gameconsole => {
                               return `
                            
                           <option value=${gameconsole.id}>${
                                 gameconsole.consoleName
                               }</option>
                           `;
                             })
                             .join(" ")}
                           </select>
                         <input type="text" class="add-game__image-path" placeholder="Image URL">
                         <button class="add-game__submit">Add Game</button>
                 </div>
   </div>
   <div class ="modal-company">
   <div class="companymodal-content">
           <span class="close-button3">X</span>
           <input type="text" class="add-company__name" placeholder="Company Name">
           <input type="text" class="add-company__image-path" placeholder="Company Logo">
           
           
           <button class="add-company__submit">Add Company</button>
   </div>
</div>
   
      <ul class="consoles">
        ${gameconsoles
          .map(gameconsole => {
            return `
           <li class="console">
            <section class="console__header">
                <img class="console__imagepath" src="${
                  gameconsole.imagePath
                }"></img>
                <h3 class="console__name">${gameconsole.consoleName}</h3>
            </section>
            <ul class="games">
            ${Games(gameconsole.games)}
            </ul>
            </li>
            `;
          })
          .join("")}
         
          `;
}
