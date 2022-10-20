package it.infsud.elettra.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.infsud.elettra.model.TabellaValute;
import it.infsud.elettra.repository.TabellaValuteRepository;
import lombok.Getter;
import lombok.Setter;

@Service
public class TabellaValuteServiceImpl implements TabellaValuteService {

	@Autowired
	@Getter @Setter private TabellaValuteRepository repository ;
	
	@Override
	public List<TabellaValute> getAllTabellaValute() {
		
		return repository.findAll(); 
	}

	@Override
	public TabellaValute getOneTabellaValute(String codice) {
		
		return repository.findById(codice).get();
	}

	@Override
	public TabellaValute createTabellaValute(TabellaValute tabellaValute) {
 
		return repository.save(tabellaValute);
	}

	@Override
	public boolean deleteTabellaValute(String codice) {
		repository.deleteById(codice);
		return true;
	}

}
