package it.infsud.elettra.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.infsud.elettra.model.TipoRegistro;
import it.infsud.elettra.services.TipoRegistroServiceImpl;

@RestController
@RequestMapping("/tiporegistro")
public class TipoRegistroController {
	
	@Autowired
    private TipoRegistroServiceImpl service;
 
	@GetMapping("/list")
	public List<TipoRegistro> getAllTipoRegistro(){
		
	    return service.getAllTipoRegistro();
	    
	}
	
	@GetMapping("/get/{codice}")
	public TipoRegistro getOneTipoRegistro(@PathVariable String codice){
				
	    return service.getOneTipoRegistro(codice);
	    
	}
	
   @PostMapping("/add")
    public TipoRegistro createTipoRegistro(@RequestBody TipoRegistro tipoRegistro) {
        return service.createTipoRegistro(tipoRegistro);
    }

    @PutMapping("/update")
    public TipoRegistro updateTipoRegistro(@RequestBody TipoRegistro tipoRegistro){
        return service.createTipoRegistro(tipoRegistro);
    }

    @DeleteMapping("/delete/{codice}")
    public void deleteTipoRegistro(@PathVariable String codice){
        service.deleteTipoRegistro(codice);
    }
	
}
