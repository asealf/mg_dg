package it.infsud.elettra.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.infsud.elettra.model.TipoRegistro;
import it.infsud.elettra.repository.TipoRegistroRepository;
import lombok.Getter;
import lombok.Setter;

@Service
public class TipoRegistroServiceImpl implements TipoRegistroService{

	@Autowired
	@Getter @Setter private TipoRegistroRepository repository ;
	
	@Override
	public List<TipoRegistro> getAllTipoRegistro() {
		
		return repository.findAll();
	}

	@Override
	public TipoRegistro getOneTipoRegistro(String codice) {
		
		// return repository.getOne(codice);
		return repository.findById(codice).get();
	}

	@Override
	public TipoRegistro createTipoRegistro(TipoRegistro tipoRegistro) {
		
		return repository.save(tipoRegistro);
	}

	@Override
	public boolean deleteTipoRegistro(String codice) {
		repository.deleteById(codice); 
		
		return true;
	}

}
