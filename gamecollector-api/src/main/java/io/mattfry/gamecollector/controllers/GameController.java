package io.mattfry.gamecollector.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.mattfry.gamecollector.models.Game;
import io.mattfry.gamecollector.repositories.GameRepository;

@RestController
@RequestMapping("/games")
public class GameController {
	
	@Resource
	GameRepository gameRepo;
	
	@GetMapping("")
	public Collection<Game> getGames(){
		return (Collection<Game>) gameRepo.findAll();
		
	}
	
	

}
