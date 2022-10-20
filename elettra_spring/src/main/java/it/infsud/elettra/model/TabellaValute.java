package it.infsud.elettra.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Table(name = "tvl")
@Data
public class TabellaValute implements Serializable {
	
	
	private static final long serialVersionUID = -2050967466611465578L;
	
	@Id
	private String codice;
	private String descrizione;	
	

}
