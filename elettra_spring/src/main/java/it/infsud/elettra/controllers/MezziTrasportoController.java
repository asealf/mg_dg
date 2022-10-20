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

import it.infsud.elettra.model.MezziTrasporto;
import it.infsud.elettra.services.MezziTrasportoServiceImpl;

@RestController
@RequestMapping("/mezzitrasporto")
public class MezziTrasportoController {
	
	@Autowired
    private MezziTrasportoServiceImpl service;
 
	@GetMapping("/list")
	public List<MezziTrasporto> getAllMezziTrasporto(){
		
	    return service.getAllMezziTrasporto();
	    
	}
		
   @PostMapping("/add")
    public MezziTrasporto createMezziTrasporto(@RequestBody MezziTrasporto mezziTrasporto) {
        return service.createMezziTrasporto(mezziTrasporto);
    }

    @PutMapping("/update")
    public MezziTrasporto updateMezziTrasporto(@RequestBody MezziTrasporto mezziTrasporto){
        return service.createMezziTrasporto(mezziTrasporto);
    }

    @DeleteMapping("/delete/{codice}")
    public void deleteMezziTrasporto(@PathVariable String codice){
        service.deleteMezziTrasporto(codice);
    }

}
