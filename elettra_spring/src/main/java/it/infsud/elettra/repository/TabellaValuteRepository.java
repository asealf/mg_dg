package it.infsud.elettra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.infsud.elettra.model.TabellaValute;

@Repository
public interface TabellaValuteRepository extends JpaRepository<TabellaValute,String>{

}
