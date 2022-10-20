package it.infsud.elettra.controllers;

import java.io.ByteArrayInputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import it.infsud.elettra.model.TestataMovimentiRegistro;
import it.infsud.elettra.model.TipoRegistro;
import it.infsud.elettra.services.MezziTrasportoServiceImpl;
import it.infsud.elettra.services.MovimentiRegistroServiceImpl;
import it.infsud.elettra.services.TabellaValuteServiceImpl;
import it.infsud.elettra.services.TipoRegistroServiceImpl;
import it.infsud.elettra.services.UnitaMisuraServiceImpl;
import it.infsud.elettra.util.GeneratePdfReport;

@RestController
@RequestMapping("/movimentiregistro")
public class MovimentiRegistroController {
	
	@Autowired
    private MovimentiRegistroServiceImpl service;
	
	
   	@Autowired
    private TipoRegistroServiceImpl trs;
   	
   	@Autowired
   	private MezziTrasportoServiceImpl mzt ;
   	
	@Autowired
	private UnitaMisuraServiceImpl um;
	
	@Autowired
	private TabellaValuteServiceImpl vlt ;
	
 
	@GetMapping("/list")
	public List<TestataMovimentiRegistro> getAllMovimentiRegistro(){
		
	    return service.getAllMovimentiRegistro();
	    
	}
	
	
	@GetMapping("/list_tp_dt/{tiporeg}/{dtini}/{dtfine}/{numPg}/{righePg}")
	public List<TestataMovimentiRegistro> getMovRegByTipoRegAndData(
			@PathVariable String tiporeg, @PathVariable String dtini, 
			@PathVariable String dtfine,
			@PathVariable Integer numPg , @PathVariable Integer righePg ) throws ParseException{
		
		// Convert data string in Date
		Date data_ini =new SimpleDateFormat("yyyy-MM-dd").parse(dtini); 
		Date data_fine =new SimpleDateFormat("yyyy-MM-dd").parse(dtfine); 
		
	    return service.findByTipoRegistroAndDataImmissione(tiporeg, data_ini, data_fine);
	    
	}
	
	@GetMapping("/list_tp/{tiporeg}")
	public List<TestataMovimentiRegistro> getMovRegByTipoReg(@PathVariable String tiporeg ) {
					
	    return service.findByTipoRegistro(tiporeg);
	    
	}
	
	@GetMapping("/next_nop")
	public Long findNexN_operazione() {
					
	    return service.findNextN_Operazione();
	    
	}
	
	
   @PostMapping("/add")
    public TestataMovimentiRegistro createMovimentiRegistro(@RequestBody TestataMovimentiRegistro movimentiRegistro) {
        return service.createMovimentiRegistro(movimentiRegistro);
    }

    @PutMapping("/update")
    public TestataMovimentiRegistro updateUnitaMisura(@RequestBody TestataMovimentiRegistro movimentiRegistro){
        return service.createMovimentiRegistro(movimentiRegistro);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMovimentiRegistro(@PathVariable Long id){
        service.deleteMovimentiRegistro(id);
    }
    
    
    @RequestMapping(value = "/pdfreport/{tiporeg}/{dtini}/{dtfine}/{definitivo}", method = RequestMethod.GET, produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> moveregReport(
    		@PathVariable String tiporeg, @PathVariable String dtini, 
			@PathVariable String dtfine,
			@PathVariable String definitivo
    		) throws ParseException {

    	TipoRegistro tr = trs.getOneTipoRegistro( tiporeg);
    	
    	// Convert data string in Date
		Date data_ini = new SimpleDateFormat("yyyy-MM-dd").parse(dtini); 
		Date data_fine =new SimpleDateFormat("yyyy-MM-dd").parse(dtfine); 
			
		List<TestataMovimentiRegistro> movreg = service.findByTipoRegistroAndDataImmissione(tiporeg, data_ini, data_fine);
    		    
        // List<TestataMovimentiRegistro> movreg = service.getAllMovimentiRegistro();

		GeneratePdfReport pdfRep = new GeneratePdfReport( );
		
		
        ByteArrayInputStream bis = pdfRep.movregReport(movreg , tr.getDescrizione() , mzt , um , vlt );

        HttpHeaders headers = new HttpHeaders();
        
        headers.add("Content-Disposition", "inline; filename=citiesreport.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }    
}
