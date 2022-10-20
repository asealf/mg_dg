package it.infsud.elettra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.infsud.elettra.model.TipoRegistro;

@Repository
public interface TipoRegistroRepository extends JpaRepository<TipoRegistro, String> {

}
