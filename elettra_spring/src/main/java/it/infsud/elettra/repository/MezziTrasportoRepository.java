package it.infsud.elettra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.infsud.elettra.model.MezziTrasporto;

@Repository
public interface MezziTrasportoRepository extends JpaRepository<MezziTrasporto , String>{

}
