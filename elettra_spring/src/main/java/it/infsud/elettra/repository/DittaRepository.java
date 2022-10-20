package it.infsud.elettra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.infsud.elettra.model.Ditta;

@Repository
public interface DittaRepository extends JpaRepository<Ditta,Integer>{

}
