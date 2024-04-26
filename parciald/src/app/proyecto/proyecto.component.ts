import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {


  pro : Proyecto[];

  constructor(private proyectoService : ProyectoService){}


  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(
      Proyecto => this.pro = Proyecto
    );
    
  }

}
