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
		
		GameConsole console1 = consoleRepo.save(new GameConsole("Nintendo Entertainment System", "NES","http://mattfry.io/consoleicons/nes.png", company1));
		GameConsole console2 = consoleRepo.save(new GameConsole("Super Nintendo Entertainment System", "SNES","http://mattfry.io/consoleicons/snes.png" , company1));
		GameConsole console3 = consoleRepo.save(new GameConsole("Nintendo 64", "N64","http://mattfry.io/consoleicons/n64.png" , company1));
		GameConsole console4 = consoleRepo.save(new GameConsole("Nintendo GameCube", "GCN","http://mattfry.io/consoleicons/gcn.png" , company1));
		GameConsole console5 = consoleRepo.save(new GameConsole("Nintendo Wii", "Wii","http://mattfry.io/consoleicons/wii.png" , company1));
		GameConsole console7 = consoleRepo.save(new GameConsole("Nintendo Wii U", "Wii U" ,"http://mattfry.io/consoleicons/wiiu.png" , company1));
		GameConsole console8 = consoleRepo.save(new GameConsole("unknownconsole", "unknown", "http://mattfry.io/consoleicons/consolegeneric.png", company2));
		
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
	
	}

}
