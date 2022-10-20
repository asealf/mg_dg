package it.infsud.elettra.services;

import it.infsud.elettra.model.Ditta;

public interface DittaService {
	
/*
public List<Product> getAllProduct();
public Product getOneProduct(Long id);
public Product createProduct(Product product);
public boolean deleteProduct(Long id);
 */

	public Ditta getDitta(Integer id);
	public Ditta createDitta(Ditta ditta);
	

}
