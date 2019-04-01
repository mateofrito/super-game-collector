package io.mattfry.gamecollector.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Company {
	
	@Id
	@GeneratedValue
	private Long id;
	private String companyName;
	private String imagePath;
	
	@ManyToMany(mappedBy="company")
	@JsonIgnore
	private Collection<GameConsole> gameConsole;
	
	@ManyToMany(mappedBy="company")
	@JsonIgnore
	private Collection<Game> games;
	
	
	
	public Company() {
		
	}
	
	public Company(String companyName, String imagePath) {
		this.companyName = companyName;
		this.imagePath = imagePath;
		
		
		
		
		
	}
	
	
	
	
	public Long getId() {
		return id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public String getImagePath() {
		return imagePath;
	}
	
	public Collection<GameConsole> getGameConsole(){
		return gameConsole;
	}
	
	public Collection<Game> getGames(){
		return games;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", companyName=" + companyName + ", imagePath=" + imagePath + "]";
	}
	
	


}
