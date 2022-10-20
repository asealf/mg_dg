package it.infsud.elettra.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "rmr")
public class RigheMovimentiRegistro implements Serializable {

	private static final long serialVersionUID = 5424195137004744185L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Basic(optional = false)
	private String tipo_registro;
	
	@Basic(optional = false)
	private Integer n_operazione;
	
	@Basic(optional = false)
	private String tipo_riga;
	
	@Basic(optional = false)
	private String descrizione_prodotto;
		
	private String unita_misura;
	private Integer quantita;
	private Double peso_kg;
	private String valuta;
	private Double valore;
	
	// private long id_testata;
	
	
	@ManyToOne
	@JoinColumn( name="id_testata" , referencedColumnName="id")
	@JsonBackReference
	private TestataMovimentiRegistro testata ;
	
}
