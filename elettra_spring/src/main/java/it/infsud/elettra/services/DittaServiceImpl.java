package it.infsud.elettra.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.infsud.elettra.model.Ditta;
import it.infsud.elettra.repository.DittaRepository;

import lombok.Getter;
import lombok.Setter;

@Service
public class DittaServiceImpl implements DittaService {
	
	@Autowired
	@Getter @Setter private DittaRepository repository ;


	@Override
	public Ditta createDitta(Ditta ditta) {
		
		return repository.save(ditta);
		
 	}

	@Override
	public Ditta getDitta(Integer id) {
		
		return repository.findById(id).get();
		
	}

}
