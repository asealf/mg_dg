package it.infsud.elettra.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "tmr")
public class TestataMovimentiRegistro implements Serializable {
	

	private static final long serialVersionUID = -6612376240570761847L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Basic(optional = false)
	private String tipo_registro;
	
	@Basic(optional = false)
	private Integer n_operazione;
	
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern="yyyy-MM-dd")
	@Basic(optional = false)
	private Date data_immissione;
	
	@Basic(optional = false)
	private String descrizione_operazione;
	
	private String c_tipo_operazione;
	
	private String c_n_memorandum;
	
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date c_dt_memorandum;
	
	private String c_mezzo_trasporto;
	private String c_doc_dogane;	

	
	private String s_tipo_operazione;
	private String s_n_memorandum;
	
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date s_dt_memorandum;
	
	private String s_mezzo_trasporto;
	private String s_doc_dogane;	
	
	private String definitivo;
	
	
	@OneToMany(fetch = FetchType.EAGER , cascade = CascadeType.ALL , mappedBy = "testata" , orphanRemoval=true )
	@JsonManagedReference
	private Set<RigheMovimentiRegistro> righeMovimentiRegistro = new HashSet<>() ;
	
}
