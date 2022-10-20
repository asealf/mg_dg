package it.infsud.elettra.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPageEventHelper;
import com.itextpdf.text.pdf.PdfWriter;

import it.infsud.elettra.model.MezziTrasporto;
// import it.infsud.elettra.model.RigheMovimentiRegistro;
import it.infsud.elettra.model.TabellaValute;
import it.infsud.elettra.model.RigheMovimentiRegistro;
import it.infsud.elettra.model.TestataMovimentiRegistro;
import it.infsud.elettra.model.TipoRegistro;
import it.infsud.elettra.model.UnitaMisura;
import it.infsud.elettra.services.MezziTrasportoServiceImpl;
import it.infsud.elettra.services.MovimentiRegistroServiceImpl;
import it.infsud.elettra.services.TabellaValuteServiceImpl;
import it.infsud.elettra.services.TipoRegistroServiceImpl;
import it.infsud.elettra.services.UnitaMisuraServiceImpl;

public class GeneratePdfReport {
	
	
	
	class MyFooter extends PdfPageEventHelper {
		
		private Integer pagina = 0;
		
        Font ffont = new Font(Font.FontFamily.UNDEFINED, 6, Font.ITALIC);
            
        public void onEndPage(PdfWriter writer, Document document) {
            PdfContentByte cb = writer.getDirectContent();
//            Phrase header = new Phrase("this is a header", ffont);
            pagina ++;
            Phrase footer = new Phrase("--------- PerezSped -------    pag. "+pagina.toString() ,ffont);
            
//            ColumnText.showTextAligned(cb, Element.ALIGN_CENTER,
//                    header,
//                    (document.right() - document.left()) / 2 + document.leftMargin(),
//                    document.top() + 10, 0);
            ColumnText.showTextAligned(cb, Element.ALIGN_CENTER,
                    footer,
                    (document.right() - document.left()) / 2 + document.leftMargin(),
                    document.bottom() - 10, 0);
        }
    }

    private static final Logger logger = LoggerFactory.getLogger(GeneratePdfReport.class);
    

    public  
    ByteArrayInputStream movregReport(List<TestataMovimentiRegistro> movreg ,
    		String tiporeg ,
    		MezziTrasportoServiceImpl tmzt,
    		UnitaMisuraServiceImpl tum,
    		TabellaValuteServiceImpl tvlt ) {

 
    	
    	MezziTrasporto mz ;
    	UnitaMisura um ;
    	TabellaValute vl ;
    	

        Document document = new Document(PageSize.A4.rotate() );
        
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
        	
      
        	
        	Font tf = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        	tf.setSize(12);
        	
        	Font headFont = FontFactory.getFont(FontFactory.HELVETICA);
        	headFont.setSize(6);
        	
            Font lf = FontFactory.getFont(FontFactory.HELVETICA_BOLD );
            lf.setSize(6);
            
        	Font hfr = FontFactory.getFont(FontFactory.HELVETICA);
        	hfr.setSize(5);
            Font lfr = FontFactory.getFont(FontFactory.HELVETICA_BOLD );
            lfr.setSize(5);
        	
            PdfPTable table = new PdfPTable(13);
            table.setWidthPercentage(100);
            table.setWidths(new int[]{2, 5, 12, 4, 5, 8, 6, 10, 4, 5, 8, 6, 10});


            PdfPCell hcell;
            
            hcell = new PdfPCell(new Phrase("Registro movimenti dogana registro "+tiporeg, tf));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setColspan(13);
            table.addCell(hcell);
            
            hcell = new PdfPCell(new Phrase("", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setColspan(3);
            table.addCell(hcell);
            
            hcell = new PdfPCell(new Phrase("CARICO", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setColspan(5);
            table.addCell(hcell);

            hcell = new PdfPCell(new Phrase("SCARICO", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setColspan(5);
            table.addCell(hcell);
            
            
            
            hcell = new PdfPCell(new Phrase("n.", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);

            hcell = new PdfPCell(new Phrase("data imm.", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            hcell = new PdfPCell(new Phrase("descrizione", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // Carico
            
            // n. memo
            hcell = new PdfPCell(new Phrase("n.memo", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // data memo 
            hcell = new PdfPCell(new Phrase("dt. memo", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // tipo operazione
            hcell = new PdfPCell(new Phrase("operazione", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // messo trasporto
            hcell = new PdfPCell(new Phrase("mezzo trasp.", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // documento dogane
            hcell = new PdfPCell(new Phrase("doc.dogana", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            
            // Scarico
            
            // n. memo
            hcell = new PdfPCell(new Phrase("n.memo", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // data memo 
            hcell = new PdfPCell(new Phrase("dt. memo", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // tipo operazione
            hcell = new PdfPCell(new Phrase("operazione", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // messo trasporto
            hcell = new PdfPCell(new Phrase("mezzo trasp.", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            // documento dogane
            hcell = new PdfPCell(new Phrase("doc.dogana", headFont));
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            hcell.setBackgroundColor(BaseColor.LIGHT_GRAY);
            table.addCell(hcell);
            
            table.setHeaderRows(3);
            

            for (TestataMovimentiRegistro movr : movreg) {

                PdfPCell cell;

                cell = new PdfPCell(new Phrase(movr.getN_operazione().toString() , lf ) );
                cell.setPaddingLeft(5);
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
                table.addCell(cell);
                
                cell = new PdfPCell(new Phrase( ViewData(movr.getData_immissione().toString()) , lf ) );
                cell.setPaddingLeft(5);
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(cell);
                
                cell = new PdfPCell(new Phrase( movr.getDescrizione_operazione() , lf ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                              
                //  carico 
                
               
                if( movr.getC_n_memorandum() != null && !movr.getC_n_memorandum().isEmpty() ) {
                // n. memo
                cell = new PdfPCell(new Phrase( movr.getC_n_memorandum(), lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                
                // data memo
                cell = new PdfPCell(new Phrase( ViewData(movr.getC_dt_memorandum().toString()), lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                // tipo operazione
                cell = new PdfPCell(new Phrase( movr.getC_tipo_operazione() , lf ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                
                // mezzo trasporto
                mz = tmzt.getOneMezziTrasporto(movr.getC_mezzo_trasporto());
                cell = new PdfPCell(new Phrase( mz.getDescrizione() , lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                // Documento dogane
                cell = new PdfPCell(new Phrase( movr.getC_doc_dogane() , lf ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                
                }
                
                else {
                
                    cell = new PdfPCell(new Phrase( ""));
                    cell.setPaddingRight(5);
                    cell.setColspan(5);
                    table.addCell(cell);

                }
               
               

                
                // Scarico
                if( movr.getS_n_memorandum() != null && !movr.getS_n_memorandum().isEmpty() ) {
                // n. memo
                cell = new PdfPCell(new Phrase( movr.getS_n_memorandum() , lf ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                // data memo
                cell = new PdfPCell(new Phrase( ViewData(movr.getS_dt_memorandum().toString()), lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                // tipo operazione
                cell = new PdfPCell(new Phrase( movr.getS_tipo_operazione(), lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                
                // mezzo trasporto
                mz = tmzt.getOneMezziTrasporto(movr.getS_mezzo_trasporto());
                cell = new PdfPCell(new Phrase( mz.getDescrizione(), lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                // Documento dogane
                cell = new PdfPCell(new Phrase( movr.getS_doc_dogane(), lf  ));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                cell.setPaddingRight(5);
                table.addCell(cell);
                
                }
                else {
                	cell = new PdfPCell(new Phrase( ""));
                    cell.setPaddingRight(5);
                    cell.setColspan(5);
                    table.addCell(cell);
                }
                

                cell = new PdfPCell( new Phrase(""));
                cell.setPaddingRight(5);
                cell.setColspan(3);
                table.addCell(cell);	

                // Crea tabelle righe prodotti carico
                PdfPTable rgtable = new PdfPTable(6);
                rgtable.setWidthPercentage(100);
                rgtable.setWidths(new int[]{20, 4, 4, 4, 4, 6});
                
                             
                boolean primaRiga = true;
                
                
                for (RigheMovimentiRegistro riga : movr.getRigheMovimentiRegistro() ) {
                	
                	if( riga.getTipo_riga().equals("C") ) {

                		if( primaRiga ) {
                			primaRiga = false;
                			           
							// Descrizione prodotto
							cell = new PdfPCell(new Phrase( "descr.prodotto" ,hfr ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
							
							//Unita misura 
							cell = new PdfPCell(new Phrase( "u.m." ,hfr ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
							
			                // quantita'
							cell = new PdfPCell(new Phrase( "qta" ,hfr  ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
			
							// peso_kg 
							cell = new PdfPCell(new Phrase( "kg" ,hfr  ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);                
			                
			                // valuta
							cell = new PdfPCell(new Phrase( "valuta" ,hfr  ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
			                
			                // valore
							cell = new PdfPCell(new Phrase( "valore" ,hfr ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);           	
			
                			
                		}
                		
                		
                		
                		// Descrizione prodotto
						cell = new PdfPCell(new Phrase( riga.getDescrizione_prodotto() ,lfr ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_LEFT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
		                
		                // unita misura
						um = tum.getOneUnitaMisura(riga.getUnita_misura());
						cell = new PdfPCell(new Phrase( um.getDescrizione() ,lfr ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_LEFT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
						
		                
		                // quantita'
						cell = new PdfPCell(new Phrase( riga.getQuantita().toString(),lfr  ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);

						// peso_kg 
						cell = new PdfPCell(new Phrase( riga.getPeso_kg().toString(),lfr  ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
		
		                
		                // valuta
						vl = tvlt.getOneTabellaValute(riga.getValuta());
						cell = new PdfPCell(new Phrase( vl.getDescrizione() ,lfr  ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_LEFT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
		                
		                // valore
						cell = new PdfPCell(new Phrase( riga.getValore().toString() ,lfr ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
						
					
                	}
                }
                

    			
          
                
                // Righe prodotti carico
                cell = new PdfPCell();
                cell.addElement( rgtable );
                // cell.setPaddingRight(0);
                cell.setPadding(0);
                cell.setBorderColor(BaseColor.BLUE);
                cell.setColspan(5);
                table.addCell(cell);
                
                

                // Righe prodotti scarico
                rgtable = new PdfPTable(6);
                rgtable.setWidthPercentage(100);
                rgtable.setWidths(new int[]{20, 4, 4, 4, 4, 6});
                
                             
                primaRiga = true;
                
                
                for (RigheMovimentiRegistro riga : movr.getRigheMovimentiRegistro() ) {
                	
                	if( riga.getTipo_riga().equals("S") ) {

                		if( primaRiga ) {
                			primaRiga = false;
                			           
							// Descrizione prodotto
							cell = new PdfPCell(new Phrase( "descr.prodotto" ,hfr ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
							
							//Unita misura 
							cell = new PdfPCell(new Phrase( "u.m." ,hfr ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
							
			                // quantita'
							cell = new PdfPCell(new Phrase( "qta" ,hfr  ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
			
							// peso_kg 
							cell = new PdfPCell(new Phrase( "kg" ,hfr  ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);                
			                
			                // valuta
							cell = new PdfPCell(new Phrase( "valuta" ,hfr  ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);
			                
			                // valore
							cell = new PdfPCell(new Phrase( "valore" ,hfr ));
							cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
							cell.setHorizontalAlignment(Element.ALIGN_CENTER);
							cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
							cell.setPaddingRight(5);
							rgtable.addCell(cell);           	
			
                			
                		}
                		
                		              		
                		// Descrizione prodotto
						cell = new PdfPCell(new Phrase( riga.getDescrizione_prodotto() ,lfr ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_LEFT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
		                
		                // unita misura
						um = tum.getOneUnitaMisura(riga.getUnita_misura());
						cell = new PdfPCell(new Phrase(um.getDescrizione() ,lfr ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_LEFT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
						
		                
		                // quantita'
						cell = new PdfPCell(new Phrase( riga.getQuantita().toString(),lfr  ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);

						// peso_kg 
						cell = new PdfPCell(new Phrase( riga.getPeso_kg().toString(),lfr  ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
		
		                
		                // valuta
						vl = tvlt.getOneTabellaValute(riga.getValuta());
						cell = new PdfPCell(new Phrase( vl.getDescrizione() ,lfr  ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_LEFT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
		                
		                // valore
						cell = new PdfPCell(new Phrase( riga.getValore().toString() ,lfr ));
						cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
						cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
						cell.setPaddingRight(5);
						rgtable.addCell(cell);
						
					
                	}
                }
                
                
                // Righe prodotti scarico
                cell = new PdfPCell();
                cell.addElement( rgtable );
                cell.setPadding(0);
                cell.setColspan(5);
                table.addCell(cell);
                             
            }

            PdfWriter writer = PdfWriter.getInstance(document, out);
            MyFooter event = new MyFooter();
            writer.setPageEvent(event);
            document.open();
            
            document.add(table);

            document.close();

        } catch (DocumentException ex) {

            logger.error("Error occurred: {0}", ex);
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
    
    // Inverte campi data
    public String ViewData( String dts) {
    	// 2020-01-01
    	// 0123456789
    	
    	return( dts.substring(8, 10)+
    			'/'+dts.substring(5, 7)+
    			'/'+dts.substring(0,4));
    	
    }
    
    
    
 
}
