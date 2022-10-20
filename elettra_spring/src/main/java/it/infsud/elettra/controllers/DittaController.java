package it.infsud.elettra.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.infsud.elettra.model.Ditta;
import it.infsud.elettra.services.DittaServiceImpl;

@RestController
@RequestMapping("/ditta")
public class DittaController {

    @Autowired
    private DittaServiceImpl service;
    
    @GetMapping("/get")
    public Ditta getDitta( ) {
    	
    	final Integer id;
    	
    	id = 1;
    	
    	return service.getDitta(id);
    	
    }
    
    @PutMapping("/update")
    public Ditta updateDitta( @RequestBody Ditta ditta) {
    	
    	return service.createDitta(ditta);
    	
    }
    
    
}
