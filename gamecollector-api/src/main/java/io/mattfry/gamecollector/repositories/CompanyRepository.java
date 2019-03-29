package io.mattfry.gamecollector.repositories;

import org.springframework.data.repository.CrudRepository;

import io.mattfry.gamecollector.models.Company;

public interface CompanyRepository extends CrudRepository<Company, Long>{

	Company findByCompanyName(String string);

}