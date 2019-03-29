import events from './utils/events/event-actions'
import api from './utils/api/api-actions'


import GameConsoles from './components/GameConsoles'

main()

function main() {
  api.getRequest('/consoles', gameconsoles => {
    getAppContext().innerHTML = GameConsoles(gameconsoles);
  })

  events.on(getAppContext(), 'click', () => {
          //console submit
          if (event.target.classList.contains('add-console__submit')) {
            const consoleName = document.querySelector('.add-console__full-name').value
            const shortName = document.querySelector('.add-console__short-name').value
            const imagePath = document.querySelector('.add-console__image-path').value
            
              api.postRequest('/consoles/add', {
              consoleName: consoleName,
              shortName: shortName,
              imagePath: imagePath
            }, (gameconsoles) => getAppContext().innerHTML = GameConsoles(gameconsoles))
          }

          //add console modal
          if (event.target.classList.contains('console-trigger')){
                var consolemodal = document.querySelector(".modal-console");
                var consoletrigger = document.querySelector(".console-trigger")
                var closeButton = document.querySelector(".close-button");

                function toggleConsoleModal() {
                  consolemodal.classList.toggle("show-consolemodal");
                }
                
                function windowOnConsoleClick(event) {
                        if (event.target === consolemodal) {
                          toggleConsoleModal();
                        }
                }


                consoletrigger.addEventListener("click", toggleConsoleModal);
                closeButton.addEventListener("click", toggleConsoleModal);
                window.addEventListener("click", windowOnConsoleClick);


}
          //close button
          if (event.target.classList.contains('close-button')){
              var closeButton = document.querySelector(".close-button");
              var consolemodal = document.querySelector(".modal-console");

              function closeTheGoddamnModal(){
                consolemodal.classList.toggle("show-consolemodal");

              }

              closeButton.addEventListener("click", closeTheGoddamnModal);


          }
           
             
            
            
        //add game modal
        if (event.target.classList.contains('game-trigger')){
          var gamemodal = document.querySelector(".modal-game");
          var gametrigger = document.querySelector(".game-trigger")
          var closeButton2 = document.querySelector(".close-button2");
          
          function toggleGameModal() {
            gamemodal.classList.toggle("show-gamemodal");
          }
          
          function windowOnGameClick(event) {
            if (event.target === gamemodal) {
                toggleGameModal();
            }
          }
          gametrigger.addEventListener("click", toggleGameModal);
          closeButton2.addEventListener("click", toggleGameModal);
          window.addEventListener("click", windowOnGameClick);

        }

        //close button
        if (event.target.classList.contains('close-button2')){
          var closeButton = document.querySelector(".close-button2");
          var gamemodal = document.querySelector(".modal-game");

          function closeTheGoddamnModal(){
            gamemodal.classList.toggle("show-gamemodal");

          }

          closeButton.addEventListener("click", closeTheGoddamnModal);


      }
      //console accordions
      if (event.target.classList.contains('console__header')){
          var accordion = document.getElementsByClassName("console__header");
          var i;
                for (i = 0; i < accordion.length; i++) {
                  accordion[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                      panel.style.display = "none";
                    } else {
                      panel.style.display = "block";
                    }
                  });
                }
           






      }



  })

 
}
function getAppContext() {
  return document.querySelector("#app")
}
// if (event.target.classList.contains('console-trigger')){
//   var consolemodal = document.querySelector(".modal-console");
//   var consoletrigger = document.querySelector(".console-trigger")
//   var closeButton = document.querySelector(".close-button");

//   function toggleConsoleModal() {
//     consolemodal.classList.toggle("show-consolemodal");
//   }
  
//   function windowOnConsoleClick(event) {
//           if (event.target === consolemodal) {
//             toggleConsoleModal();
//           }
//   }


//   consoletrigger.addEventListener("click", toggleConsoleModal);
//   closeButton.addEventListener("click", toggleConsoleModal);
//   window.addEventListener("click", windowOnConsoleClick);


// }

      



 // if (event.target.classList.contains('add-game__submit')) {
  //   const gameName = document.querySelector('.add-game__name').value
  //   const yearReleased = document.querySelection('.add-game__yearreleased').value
  //   const consoleName = document.querySelection('.add-game__console').value
  //   const imagePath = document.querySelection('.add-image__path').value
    
 // }