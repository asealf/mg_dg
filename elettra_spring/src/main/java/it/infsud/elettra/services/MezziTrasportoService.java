package it.infsud.elettra.services;

import java.util.List;

import it.infsud.elettra.model.MezziTrasporto;

public interface MezziTrasportoService {
	
	public List<MezziTrasporto> getAllMezziTrasporto();
	public MezziTrasporto getOneMezziTrasporto( String codice);
	public MezziTrasporto createMezziTrasporto(MezziTrasporto mezziTrasporto);
	public boolean deleteMezziTrasporto(String codice);

}
