package io.mattfry.gamecollector.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.albumapp.models.Artist;

import io.mattfry.gamecollector.models.Company;
import io.mattfry.gamecollector.models.Game;
import io.mattfry.gamecollector.models.GameConsole;
import io.mattfry.gamecollector.repositories.CompanyRepository;
import io.mattfry.gamecollector.repositories.ConsoleRepository;
import io.mattfry.gamecollector.repositories.GameRepository;
@CrossOrigin
@RestController
@RequestMapping("/games")
public class GameController {
	
	@Resource
	GameRepository gameRepo;
	
	@Resource 
	CompanyRepository companyRepo;
	
	@Resource
	ConsoleRepository consoleRepo;
	
	@GetMapping("")
	public Collection<Game> getGames(){
		return (Collection<Game>) gameRepo.findAll();
		
	}
	
	@PostMapping("/add")
	public Collection<Game> addGame(@RequestBody String body) throws JSONException{
		
		JSONObject json = new JSONObject(body);
		String gameTitle = json.getString("gameTitle");
		String yearReleased = json.getString("yearReleased");
		String imagePath = json.getString("imagePath");
		String companyNameString = json.getString("company");
		//String gameConsoleString = json.getString("gameConsole");
		
		Company company = companyRepo.findByCompanyName(companyNameString);
		//GameConsole gameConsole = consoleRepo.findByConsoleName(gameConsoleString);
		GameConsole gameConsole = consoleRepo.findById(Long.parseLong(json.getString("gameConsole"))).get();
		
		if (imagePath.isEmpty()) {
			imagePath = "http://mattfry.io/consoleicons/consolegeneric.png";
		
		}
		
		if (companyNameString.isEmpty()) {
			companyNameString ="unknown";
		}
		
		
		
		
		
		
		
		
		gameRepo.save(new Game(gameTitle, yearReleased, imagePath, gameConsole, company));
		
		return(Collection<Game>) gameRepo.findAll();
		
		
		
	}
	 //remove games
	
//	@DeleteMapping("/delete")
//		public Collection<Game> deleteGame(@PathVariable Long id){
//		
//		Game gameToDelete = gameRepo.findById(id).get();
//		
//		gameRepo.delete(gameToDelete);
//		return(Collection<Game>) gameRepo.findAll();
//	}
	
	@PostMapping("/delete")
		public Collection<Game> removeGame(@RequestBody String body) throws JSONException{
			JSONObject gameDelete = new JSONObject(body);
			String gameId = gameDelete.getString("gameId");
			Game game = gameRepo.findById(Long.parseLong(gameDelete.getString("gameId"))).get();
			game.removePublisher();
			gameRepo.delete(game);
			return (Collection<Game>) gameRepo.findAll();
			
		
	
		
		
	}
	
	

}
