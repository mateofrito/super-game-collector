import events from './utils/events/event-actions'
import api from './utils/api/api-actions'
import Games from './components/Games'
import GameConsoles from './components/GameConsoles'
import Company from './components/Company'
import EditGames from './components/MaintGames'

main()

function main() {
  
  api.getRequest('http://localhost:8080/consoles', gameconsoles => {
    
    getAppContext().innerHTML = GameConsoles(gameconsoles);
})
//game edit menu



    events.on(getAppContext(), 'click', () =>{
        if(event.target.classList.contains('remove-game')){
          api.getRequest('http://localhost:8080/games',
          (games) => {
            getAppContext().innerHTML = EditGames(games);
          })

    }

  })

  events.on(getAppContext(), 'click', () =>{
        //delete game
        if(event.target.classList.contains('delete-game__btn')){
          
          var gameId = document.querySelector('.delete-game__btn').id
          console.log(gameId)
          
          api.deleteRequest((`http://localhost:8080/games/delete/` + gameId),
         
          (gameconsoles) =>{
          getAppContext().innerHTML = GameConsoles(gameconsoles);
        
        })
  
      } 

  })


  events.on(getAppContext(), 'click', () => {
            //game submit
            if (event.target.classList.contains('add-game__submit')) {
              const gameTitle = document.querySelector('.add-game__name').value
              const yearReleased = document.querySelector('.add-game__yearreleased').value
              const imagePath = document.querySelector('.add-game__image-path').value
              const gameConsole = document.querySelector('.add-console__forgames').value
              const company = document.querySelector('.add-game_publisher').value

              
                api.postRequest('http://localhost:8080/games/add', {
                gameTitle: gameTitle,
                yearReleased: yearReleased,
                imagePath: imagePath,
                company: company,
                gameConsole: gameConsole
               }, (games) => getAppContext().innerHTML = Games(games))
               location.reload()
            }
          })
  events.on(getAppContext(), 'click', () => {
          //console submit
          if (event.target.classList.contains('add-console__submit')) {
            const consoleName = document.querySelector('.add-console__full-name').value
            const shortName = document.querySelector('.add-console__short-name').value
            const imagePath = document.querySelector('.add-console__image-path').value
            const companyName = document.querySelector('.add-game_manufacture').value

              api.postRequest('http://localhost:8080/consoles/add', {
              consoleName: consoleName,
              shortName: shortName,
              imagePath: imagePath,
              companyName: companyName
            }, (gameconsoles) => getAppContext().innerHTML = GameConsoles(gameconsoles))
          }
        })
        events.on(getAppContext(), 'click', () => {
          //company submit
          if (event.target.classList.contains('add-company__submit')) {
            const company= document.querySelector('.add-company__name').value
            const imagePath = document.querySelector('.add-company__image-path').value
            
            
              api.postRequest('http://localhost:8080/company/add', {
              company: company,
              
              imagePath: imagePath
             
             }, (company) => getAppContext().innerHTML = Company(company))
             location.reload()
          }
        })     


         
          events.on(getAppContext(), 'click', () => {
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
      
 //add company modal
 if (event.target.classList.contains('company-trigger')){
  var companymodal = document.querySelector(".modal-company");
  var companytrigger = document.querySelector(".company-trigger")
  var closeButton3 = document.querySelector(".close-button3");
  
  function toggleCompanyModal() {
    companymodal.classList.toggle("show-companymodal");
  }
  
  function windowOnCompanyClick(event) {
    if (event.target === companymodal) {
        toggleCompanyModal();
    }
  }
  companytrigger.addEventListener("click", toggleCompanyModal);
  closeButton3.addEventListener("click", toggleCompanyModal);
  window.addEventListener("click", windowOnCompanyClick);

}

//company close button
if (event.target.classList.contains('close-button3')){
  var closeButton = document.querySelector(".close-button3");
  var companymodal = document.querySelector(".modal-company");

  function closeTheGoddamnModal(){
    companymodal.classList.toggle("show-companymodal");

  }

  closeButton.addEventListener("click", closeTheGoddamnModal);


}















  })

 
}

function getAppContext() {
  return document.querySelector("#app")
}

