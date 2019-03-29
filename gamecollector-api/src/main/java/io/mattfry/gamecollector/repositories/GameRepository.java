package io.mattfry.gamecollector.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.mattfry.gamecollector.models.Game;

@Repository
public interface GameRepository extends CrudRepository<Game, Long> {

	
	
	
}
