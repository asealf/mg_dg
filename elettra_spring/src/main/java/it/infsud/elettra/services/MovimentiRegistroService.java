package it.infsud.elettra.services;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import it.infsud.elettra.model.TestataMovimentiRegistro;


public interface MovimentiRegistroService {
	
	public List<TestataMovimentiRegistro> getAllMovimentiRegistro();
	
	public TestataMovimentiRegistro getOneMovimentiRegistro( Long id);
	public TestataMovimentiRegistro createMovimentiRegistro(TestataMovimentiRegistro movimentiRegistro);
	public boolean deleteMovimentiRegistro(Long id);
	
	
	
	public List <TestataMovimentiRegistro> findByTipoRegistroAndDataImmissione( String tipo_registro , Date data_ini , Date data_fine );
	public List <TestataMovimentiRegistro> findByTipoRegistro( String tipo_registro );
	
	public Long findNextN_Operazione();
	
}
