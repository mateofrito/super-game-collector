package io.mattfry.gamecollector.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.mattfry.gamecollector.models.Company;
import io.mattfry.gamecollector.models.GameConsole;
import io.mattfry.gamecollector.repositories.CompanyRepository;
import io.mattfry.gamecollector.repositories.ConsoleRepository;

@RestController
@RequestMapping("/consoles")

public class GameConsoleController {
	
	@Resource
	ConsoleRepository consoleRepo;
	
	@Resource
	CompanyRepository companyRepo;
	
	@GetMapping("")
	public Collection<GameConsole> getConsoles(){
		return (Collection<GameConsole>) consoleRepo.findAll();
		
	}
	
	@PostMapping("/add")
	public Collection<GameConsole> addGameConsole(@RequestBody String body) throws JSONException{
		
		JSONObject json = new JSONObject(body);
		String consoleName = json.getString("consoleName");
		String shortName = json.getString("shortName");
		String imagePath = json.getString("imagePath");
		String companyNameString = json.getString("companyName");
		
		Company companyName = companyRepo.findByCompanyName(companyNameString);
		
		if (imagePath.isEmpty()) {
			imagePath = "http://mattfry.io/consoleicons/consolegeneric.png";
		
		}
		
		if (companyNameString.isEmpty()) {
			companyNameString ="unknown";
		}
		
		
		consoleRepo.save(new GameConsole(consoleName, shortName, imagePath, companyName));
		
		return(Collection<GameConsole>) consoleRepo.findAll();
		
		
		
	}
	

}
