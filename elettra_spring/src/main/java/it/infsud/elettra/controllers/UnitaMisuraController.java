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

import it.infsud.elettra.model.UnitaMisura;
import it.infsud.elettra.services.UnitaMisuraServiceImpl;

@RestController
@RequestMapping("/unitamisura")
public class UnitaMisuraController {
	
	@Autowired
    private UnitaMisuraServiceImpl service;
 
	@GetMapping("/list")
	public List<UnitaMisura> getAllUnitaMisura(){
		
	    return service.getAllUnitaMisura();
	    
	}
	
   @PostMapping("/add")
    public UnitaMisura createUnitaMisura(@RequestBody UnitaMisura unitaMisura) {
        return service.createUnitaMisura(unitaMisura);
    }

    @PutMapping("/update")
    public UnitaMisura updateUnitaMisura(@RequestBody UnitaMisura unitaMisura){
        return service.createUnitaMisura(unitaMisura);
    }

    @DeleteMapping("/delete/{codice}")
    public void deleteUnitaMisura(@PathVariable String codice){
        service.deleteUnitaMisura(codice);
    }
	
}
