package io.mattfry.gamecollector;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import io.mattfry.gamecollector.models.Company;
import io.mattfry.gamecollector.models.Game;
import io.mattfry.gamecollector.models.GameConsole;
import io.mattfry.gamecollector.repositories.ConsoleRepository;
import io.mattfry.gamecollector.repositories.GameRepository;
import io.mattfry.gamecollector.repositories.CompanyRepository;
@Service
public class Initializer implements CommandLineRunner {
	
	@Resource
	ConsoleRepository consoleRepo;
	
	@Resource
	GameRepository gameRepo;
	
	@Resource
	CompanyRepository companyRepo;
	

	@Override
	public void run(String... args) throws Exception {
		Company company1 = companyRepo.save(new Company("Nintendo", "http://mattfry.io/consoleicons/nes.png" ));
		Company company2 = companyRepo.save(new Company("unknown", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company3 = companyRepo.save(new Company("Atari", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company4 = companyRepo.save(new Company("Sega", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company5 = companyRepo.save(new Company("Sony", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company6 = companyRepo.save(new Company("Microsoft", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company7 = companyRepo.save(new Company("Rare", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company8 = companyRepo.save(new Company("Activision", "http://mattfry.io/consoleicons/consolegeneric.png"));
		Company company9 = companyRepo.save(new Company("Namco", "http://mattfry.io/consoleicons/consolegeneric.png"));
		
		
		
		GameConsole console1 = consoleRepo.save(new GameConsole("Nintendo Entertainment System", "NES","http://mattfry.io/consoleicons/nes.png", company1));
		GameConsole console2 = consoleRepo.save(new GameConsole("Super Nintendo Entertainment System", "SNES","http://mattfry.io/consoleicons/snes.png" , company1));
		GameConsole console3 = consoleRepo.save(new GameConsole("Nintendo 64", "N64","http://mattfry.io/consoleicons/n64.png" , company1));
		GameConsole console4 = consoleRepo.save(new GameConsole("Nintendo GameCube", "GCN","http://mattfry.io/consoleicons/gcn.png" , company1));
		GameConsole console5 = consoleRepo.save(new GameConsole("Nintendo Wii", "Wii","http://mattfry.io/consoleicons/wii.png" , company1));
		GameConsole console7 = consoleRepo.save(new GameConsole("Nintendo Wii U", "Wii U" ,"http://mattfry.io/consoleicons/wiiu.png" , company1));
		GameConsole console8 = consoleRepo.save(new GameConsole("unknownconsole", "unknown", "http://mattfry.io/consoleicons/consolegeneric.png", company2));
		GameConsole console9 = consoleRepo.save(new GameConsole("Atari 2600", "2600", "http://mattfry.io/consoleicons/atari2600.png", company3));
		GameConsole console10 = consoleRepo.save(new GameConsole("Atari 5200", "5200", "http://mattfry.io/consoleicons/atari5200.png", company3));
		GameConsole console11 = consoleRepo.save(new GameConsole("Game Boy", "GB", "http://mattfry.io/consoleicons/gameboy.png", company1));
		GameConsole console12 = consoleRepo.save(new GameConsole("Playstation", "PS1", "http://mattfry.io/consoleicons/ps1.png", company5));
		GameConsole console13 = consoleRepo.save(new GameConsole("Sega Genesis", "Genesis", "http://mattfry.io/consoleicons/segagensis.png", company4));
		GameConsole console14 = consoleRepo.save(new GameConsole("Atari 7800", "7800", "http://mattfry.io/consoleicons/atari7800.png", company3));
		GameConsole console15 = consoleRepo.save(new GameConsole("Sega Master System", "Master System","http://mattfry.io/consoleicons/mastersystem.png", company4));
		GameConsole console16 = consoleRepo.save(new GameConsole("Sega Game Gear", "Game Gear","http://mattfry.io/consoleicons/gamegear.png", company4));
		
		
		
		
		Game game4 = gameRepo.save(new Game("Super Mario Bros", "1985", "http://mattfry.io/gameimages/smb.jpg", console1 , company1));
		Game game5 = gameRepo.save(new Game("Super Mario Bros 2", "1987", "http://mattfry.io/gameimages/smb2.jpg", console1, company1));
		Game game1 = gameRepo.save(new Game("Super Mario Bros 3", "1989", "http://mattfry.io/gameimages/smb3.jpg", console1, company1));
		Game game2 = gameRepo.save(new Game("Super Mario World", "1992", "http://mattfry.io/gameimages/smw.jpg", console2, company1));
		Game game6 = gameRepo.save(new Game("Super Mario World 2: Yoshi's Island", "1994", "http://mattfry.io/gameimages/smw2.jpg" ,console2, company1));
		Game game3 = gameRepo.save(new Game("Super Mario 64", "1996", "http://mattfry.io/gameimages/sm64.jpg" , console3, company1));
		Game game7 = gameRepo.save(new Game("Super Mario Sunshine", "2001", "http://mattfry.io/gameimages/sms.jpg", console4, company1));
		Game game8 = gameRepo.save(new Game("Paper Mario: And the Thousand Year Door", "2003", "http://mattfry.io/gameimages/papermario1000.jpg", console4, company1));
		Game game9 = gameRepo.save(new Game("Super Mario Galaxy", "2008", "http://mattfry.io/gameimages/smg1.jpg", console5, company1));
		Game game10 = gameRepo.save(new Game("Super Mario Galaxy 2", "2010", "http://mattfry.io/gameimages/smg2.jpg", console5, company1));
		Game game11 = gameRepo.save(new Game("New Super Mario Bros. Wii", "2009", "http://mattfry.io/gameimages/nsmwii.jpg", console5, company1));
		Game game12 = gameRepo.save(new Game("New Super Mario Bros. U", "2012", "http://mattfry.io/gameimages/nsmbu.jpg", console7, company1));
		Game game13 = gameRepo.save(new Game("Super Mario 3D World", "2014", "http://mattfry.io/gameimages/sm3Dw.jpg", console7, company1));
		Game game14 = gameRepo.save(new Game("Paper Mario", "1997", "http://mattfry.io/gameimages/papermario64.jpg", console3, company1));
		Game game15 = gameRepo.save(new Game("The Legend of Zelda", "1986", "http://mattfry.io/gameimages/zelda1.png", console1, company1));
		Game game16 = gameRepo.save(new Game("The Adventure of Link", "1988", "http://mattfry.io/gameimages/zelda2nes.jpg", console1, company1));
		Game game17 = gameRepo.save(new Game("The Legend of Zelda: A Link to the Past", "1992", "http://mattfry.io/gameimages/zeldalttpsnses.jpg", console2, company1));
		Game game18 = gameRepo.save(new Game("The Legend of Zelda: Ocarina of Time", "1997", "http://mattfry.io/gameimages/zeldaocarina64.jpg", console3, company1));
		Game game19 = gameRepo.save(new Game("The Legend of Zelda: Majora's Mask", "1999", "http://mattfry.io/gameimages/zeldamajora64.jpg", console3, company1));
		Game game20 = gameRepo.save(new Game("Sonic the Hedgehog", "1988", "http://mattfry.io/gameimages/sonic1segagen.jpg", console13, company4));
		Game game21 = gameRepo.save(new Game("Sonic the Hedgehog", "1988", "http://mattfry.io/gameimages/sonic1sms.jpg", console15, company4));
		Game game22 = gameRepo.save(new Game("Sonic the Hedgehog", "1988", "http://mattfry.io/gameimages/sonic1gamegear.jpg", console16, company4));
		Game game23 = gameRepo.save(new Game("Super Mario Land", "1989", "http://mattfry.io/gameimages/sml.png", console11, company1));
	}

}
