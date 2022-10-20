package it.infsud.elettra.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Table(name = "tum")
@Data
public class UnitaMisura implements Serializable {

	private static final long serialVersionUID = 5074132176212453738L;

	@Id
	private String codice;
	private String descrizione;	
}
