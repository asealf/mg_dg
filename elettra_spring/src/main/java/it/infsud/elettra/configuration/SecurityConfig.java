package it.infsud.elettra.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
	
	@Override
	public void configure( HttpSecurity http ) throws Exception
	{
		http.csrf().disable()
			.authorizeRequests().antMatchers(HttpMethod.OPTIONS,
					"/**").permitAll().anyRequest().authenticated()
			.and().httpBasic();
		
	}
	
	@Autowired
	public void configureGlobal( AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("asesw").password("{noop}1234").roles("USER");
	}
	
}