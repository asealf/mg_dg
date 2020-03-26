import { RigheMov } from './righemov';

export class RegMov {

public  id: number;
public tipo_registro: string;
public n_operazione: number;
public data_immissione: string;
public descrizione_operazione: string;
public c_tipo_operazione: string;
public c_n_memorandum: string;
public c_dt_memorandum: string;
public c_mezzo_trasporto: String;
public c_doc_dogane: string;
public s_tipo_operazione: string;
public s_n_memorandum: string;
public s_dt_memorandum: string;
public s_mezzo_trasporto: string;
public s_doc_dogane: string;
public righeMovimentiRegistro: RigheMov[]=[];
}


