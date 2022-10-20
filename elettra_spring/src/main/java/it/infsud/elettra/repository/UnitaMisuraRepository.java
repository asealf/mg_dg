package it.infsud.elettra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.infsud.elettra.model.UnitaMisura;

@Repository
public interface UnitaMisuraRepository extends JpaRepository<UnitaMisura, String>{

}
