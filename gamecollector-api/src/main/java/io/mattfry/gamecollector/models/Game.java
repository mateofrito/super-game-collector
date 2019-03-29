package io.mattfry.gamecollector.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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
	
	@ManyToOne
	@JsonIgnore
	private GameConsole gameConsole;
	
	@ManyToOne
	@JsonIgnore
	private Company company;

	

	
    public Game() {}
    
    
	
	




	public Game(String gameTitle, String yearReleased, String imagePath, GameConsole gameConsole, Company testCompany) {
			this.gameTitle = gameTitle;
			this.yearReleased = yearReleased;
			this.imagePath = imagePath;
			this.gameConsole = gameConsole;

	}
	
	public GameConsole getGameConsole(){
		return gameConsole;
		
	}
	
	public Company getCompany() {
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








	@Override
	public String toString() {
		return "Game [id=" + id + ", gameTitle=" + gameTitle + ", yearReleased=" + yearReleased + ", imagePath="
				+ imagePath + "]";
	}
	
	

	
}
