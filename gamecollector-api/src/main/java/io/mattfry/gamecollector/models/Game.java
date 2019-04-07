package io.mattfry.gamecollector.models;

import java.util.Collection;
import java.util.ArrayList;
import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Game {
	
	@Id
	@GeneratedValue
	private Long id;
	private String gameTitle;
	private String yearReleased;
	private String imagePath;
	private String screenShot;
	
	@ManyToOne
	@JsonIgnore
	private GameConsole gameConsole;
	
	@ManyToMany
	private Collection<Company> company;

	

	
    public Game() {}
    
    
	
	




	public Game(String gameTitle, String yearReleased, String imagePath, String screenShot, GameConsole gameConsole, Company ...company) {
			this.gameTitle = gameTitle;
			this.yearReleased = yearReleased;
			this.imagePath = imagePath;
			this.screenShot = screenShot;
			this.gameConsole = gameConsole;
			this.company = Arrays.asList(company);

	}
	//remove game, anthony says I need to break it's links from the console and publisher
	public void removePublisher() {
		for (Company company: company) {
			company.removeGamefromCompany(this);
		}
		 
			gameConsole.deleteGameFromConsole();
		
	}
	
	
	public GameConsole getGameConsole(){
		return gameConsole;
		
	}
	
	public Collection<Company> getCompany() {
		return company;
	}


	public Long getId() {
		return id;
	}

	public String getGameTitle() {
		return gameTitle;
	}
	public String getYearReleased() {
		return yearReleased;
	}
	public String getImagePath() {
		return imagePath;
	}
	
	public String getScreenShot() {
		return screenShot;
	}








	@Override
	public String toString() {
		return "Game [id=" + id + ", gameTitle=" + gameTitle + ", yearReleased=" + yearReleased + ", imagePath="
				+ imagePath + ", screenShot=" + screenShot + ", gameConsole=" + gameConsole + ", company=" + company
				+ "]";
	}
	
	
	








	








	








	
	

	
}
