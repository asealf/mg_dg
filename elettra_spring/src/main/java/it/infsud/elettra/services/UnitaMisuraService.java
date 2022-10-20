package it.infsud.elettra.services;

import java.util.List;

import it.infsud.elettra.model.UnitaMisura;

public interface UnitaMisuraService {

	public List<UnitaMisura> getAllUnitaMisura();
	public UnitaMisura getOneUnitaMisura( String codice);
	public UnitaMisura createUnitaMisura(UnitaMisura unitaMisura);
	public boolean deleteUnitaMisura(String codice);

}
