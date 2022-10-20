package it.infsud.elettra.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.infsud.elettra.model.TestataMovimentiRegistro;
import it.infsud.elettra.repository.MovimentiRegistroRepository;
import lombok.Getter;
import lombok.Setter;

@Service
public class MovimentiRegistroServiceImpl implements MovimentiRegistroService {
	
	@Autowired
	@Getter @Setter MovimentiRegistroRepository repository;

	@Override
	public List<TestataMovimentiRegistro> getAllMovimentiRegistro() {
		
		return repository.findAll();
	}

	@Override
	public TestataMovimentiRegistro getOneMovimentiRegistro(Long id) {
				
		return repository.getOne(id);
	}

	@Override
	public TestataMovimentiRegistro createMovimentiRegistro(TestataMovimentiRegistro movimentiRegistro) {
		
		return repository.save(movimentiRegistro);
	}

	@Override
	public boolean deleteMovimentiRegistro(Long id) {
		repository.deleteById(id);
		return true;
	}
	
	
	public List <TestataMovimentiRegistro> findByTipoRegistroAndDataImmissione( String tipo_registro , Date data_ini , Date data_fine ){
		return repository.findByTipoRegistroAndDataImmissione(tipo_registro, data_ini, data_fine);
	};
	
	public List <TestataMovimentiRegistro> findByTipoRegistro( String tipo_registro ){
		return repository.findByTipoRegistro(tipo_registro);
	};

	public Long findNextN_Operazione(){
		return repository.findNextN_Operazione() + 1 ;
	};

}
