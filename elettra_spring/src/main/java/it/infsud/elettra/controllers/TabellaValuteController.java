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

import it.infsud.elettra.model.TabellaValute;
import it.infsud.elettra.services.TabellaValuteServiceImpl;

@RestController
@RequestMapping("/valute")
public class TabellaValuteController {

	
	@Autowired
    private TabellaValuteServiceImpl service;
 
	@GetMapping("/list")
	public List<TabellaValute> getAllTabellaValute(){
		
	    return service.getAllTabellaValute();
	    
	}
	
   @PostMapping("/add")
    public TabellaValute createTabellaValute(@RequestBody TabellaValute tabellaValute) {
        return service.createTabellaValute(tabellaValute);
    }

    @PutMapping("/update")
    public TabellaValute updateTabellaValute(@RequestBody TabellaValute tabellaValute){
        return service.createTabellaValute(tabellaValute);
    }

    @DeleteMapping("/delete/{codice}")
    public void deleteTabellaValute(@PathVariable String codice){
        service.deleteTabellaValute(codice);
    }
	
}
