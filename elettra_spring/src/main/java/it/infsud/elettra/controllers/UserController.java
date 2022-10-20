package it.infsud.elettra.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.infsud.elettra.model.User;

@RestController
@RequestMapping("/validateLogin")
public class UserController {
	
	@GetMapping( produces = "application/json"  )
	public User validateLogin() {
		return new User("Utente autenticato");
	}

}
