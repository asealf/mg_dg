package it.infsud.elettra.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "ditta")
@Data
public class Ditta implements Serializable {
 
	private static final long serialVersionUID = 5245006639100485857L;
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String ragione_sociale;
	private String via;
	private String cap;
	private String citta;
	private String provincia;
	private String partita_iva;
	private String codice_fiscale;
	
	
}
