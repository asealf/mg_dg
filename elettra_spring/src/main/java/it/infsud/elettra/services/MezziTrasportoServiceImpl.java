package it.infsud.elettra.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.infsud.elettra.model.MezziTrasporto;
import it.infsud.elettra.repository.MezziTrasportoRepository;
import lombok.Getter;
import lombok.Setter;

@Service
public class MezziTrasportoServiceImpl implements MezziTrasportoService {

	@Autowired
	@Getter @Setter private MezziTrasportoRepository repository ;
	
	@Override
	public List<MezziTrasporto> getAllMezziTrasporto() {
		
		return repository.findAll() ;
	}

	@Override
	public MezziTrasporto getOneMezziTrasporto(String codice) {
		
		return repository.findById(codice).get(); 
		
	}

	@Override
	public MezziTrasporto createMezziTrasporto(MezziTrasporto mezziTrasporto) {
		
		return repository.save(mezziTrasporto);
	}

	@Override
	public boolean deleteMezziTrasporto(String codice) {
				
		repository.deleteById(codice);
		return true;
	}

}
