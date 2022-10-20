package it.infsud.elettra.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.infsud.elettra.model.UnitaMisura;
import it.infsud.elettra.repository.UnitaMisuraRepository;
import lombok.Getter;
import lombok.Setter;

@Service
public class UnitaMisuraServiceImpl implements UnitaMisuraService {

	@Autowired
	@Getter @Setter UnitaMisuraRepository repository ;
	
	@Override
	public List<UnitaMisura> getAllUnitaMisura() {
		
		return repository.findAll();
		
	}

	@Override
	public UnitaMisura getOneUnitaMisura(String codice) {

		return repository.findById(codice).get();
		
	}

	@Override
	public UnitaMisura createUnitaMisura(UnitaMisura unitaMisura) {
		
		return repository.save(unitaMisura);
	}

	@Override
	public boolean deleteUnitaMisura(String codice) {
		
		repository.deleteById(codice);
		
		return true;
		
	}

}
