package it.infsud.elettra.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Table(name = "tmt")
@Data
public class MezziTrasporto implements Serializable  {

	private static final long serialVersionUID = 5530105066928508983L;

	@Id
	private String codice;
	
	@Basic
	private String descrizione;
		
	
}
