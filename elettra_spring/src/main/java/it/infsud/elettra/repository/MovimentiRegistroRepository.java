package it.infsud.elettra.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import it.infsud.elettra.model.TestataMovimentiRegistro;

@Repository
public interface MovimentiRegistroRepository extends JpaRepository<TestataMovimentiRegistro, Long>{

	@Query("select t from TestataMovimentiRegistro t where t.tipo_registro = ?1 and t.data_immissione between ?2 and ?3 order by t.n_operazione ")
	List <TestataMovimentiRegistro> findByTipoRegistroAndDataImmissione( String tipo_registro , Date data_ini , Date data_fine );
	
	@Query("select t from TestataMovimentiRegistro t where t.tipo_registro = ?1 order by t.n_operazione ")
	List <TestataMovimentiRegistro> findByTipoRegistro( String tipo_registro );
	
	@Query("select max( t.n_operazione) as max_n_operazione  from TestataMovimentiRegistro t ")
	Long findNextN_Operazione();
	
}
