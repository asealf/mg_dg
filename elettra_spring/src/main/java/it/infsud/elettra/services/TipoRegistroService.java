package it.infsud.elettra.services;

import java.util.List;

import it.infsud.elettra.model.TipoRegistro;

public interface TipoRegistroService {
		
	public List<TipoRegistro> getAllTipoRegistro();
	public TipoRegistro getOneTipoRegistro( String codice);
	public TipoRegistro createTipoRegistro(TipoRegistro tipoRegistro);
	public boolean deleteTipoRegistro(String codice);

}
