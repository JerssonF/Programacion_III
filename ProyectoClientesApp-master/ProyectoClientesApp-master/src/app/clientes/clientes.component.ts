import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',

})
export class ClientesComponent implements OnInit {
//estructura para recibir los datos de la clase cliente por medio del servicio
  clientes: Cliente[];

//crear el constructor asociado a la clase servicio
  constructor(private clienteService: ClienteService){

  }
  
  ngOnInit(): void {
    //asociar al atributo clientes los datos que vienen del servicio
    //this.clientes = this.clienteService.getClientes()

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
}
