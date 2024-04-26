import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { 
  }

   //Observable - vigilar los datos que vienen del JSON - cualquier cambio
   //actualiza
   getClientes():Observable<Cliente[]>{
    return of(CLIENTES);
  }
  //este método tomar los datos del JSON para llevarlos al componente.
  /*getClientes():Cliente[]{
    return CLIENTES;
  }*/

}
