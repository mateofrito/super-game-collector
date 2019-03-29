package io.mattfry.gamecollector.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class GameConsole {
	
	@Id
	@GeneratedValue
	private Long id;
	private String consoleName;
	private String shortName;
	private String imagePath;
	
	//@JsonIgnore
	@OneToMany(mappedBy="gameConsole")
	private Collection<Game> games;
	@ManyToOne
	@JsonIgnore
	private Company company;
	
	
	
	public GameConsole() {
		
	}
	


	
	
	
	public GameConsole(String consoleName, String shortName, String imagePath, Company company) {
		
		this.consoleName = consoleName;
		this.shortName = shortName;
		this.imagePath = imagePath;
		this.games  = new ArrayList<Game>();
	}
	
	public String getConsoleName() {
		return consoleName;
	}
	
	
	
	
	public String getShortName() {
		return shortName;
	}
	
	public String getImagePath() {
		return imagePath;
	}

	public Collection<Game> getGames() {
		return games;
	}
	
	
	public Company getCompany() {
		return company;
	}



	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}


	@Override
	public String toString() {
		return "GameConsole [id=" + id + ", consoleName=" + consoleName + ", shortName=" + shortName + ", imagePath="
				+ imagePath + ", games=" + games + ", company=" + company + "]";
	}

	


	
	
	
	
}
