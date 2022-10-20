package it.infsud.elettra.model;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ttp")
public class TipoRegistro implements Serializable {

	private static final long serialVersionUID = -7972360734128318948L;

	@Id
	public String codice;
	
	public String descrizione;

}
