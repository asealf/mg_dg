package it.infsud.elettra.services;

import java.util.List;

import it.infsud.elettra.model.TabellaValute;

public interface TabellaValuteService {
		
	public List<TabellaValute> getAllTabellaValute();
	public TabellaValute getOneTabellaValute( String codice);
	public TabellaValute createTabellaValute(TabellaValute tabellaValute);
	public boolean deleteTabellaValute(String codice);
	

}
