import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto/proyecto';
import { ProyectoService } from '../proyecto/proyecto.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  pro: Proyecto[];
  constructor(private proyectoService: ProyectoService){}

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(
      Proyecto => this.pro = Proyecto
    );

  }

  

}
