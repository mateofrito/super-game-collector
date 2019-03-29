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
import io.mattfry.gamecollector.repositories.GameRepository;

@RestController
@RequestMapping("/company")

public class CompanyController {
	
	@Resource
	CompanyRepository companyRepo;
	@Resource
	GameRepository gameRepo;
	@Resource
	ConsoleRepository consoleRepo;
	
	@GetMapping("")
	public Collection<Company> getCompany(){
		return (Collection<Company>)companyRepo.findAll();
		
		
	}
	
	@PostMapping("/add")
	public Collection<GameConsole> addCompany(@RequestBody String body) throws JSONException {
		
		JSONObject newCompany = new JSONObject(body);
		String companyName = newCompany.getString("company");
		String imagePath = newCompany.getString("imagePath");
		
		if (imagePath.isEmpty()) {
			imagePath = "http://mattfry.io/consoleicons/consolegeneric.png";
		}
		
		if (companyName.isEmpty()) {
			companyName = "Unknown";
		}
		
		
		companyRepo.save(new Company(companyName, imagePath));
		return (Collection<GameConsole>) consoleRepo.findAll();
		
		
		
		
	}
	
	

}
