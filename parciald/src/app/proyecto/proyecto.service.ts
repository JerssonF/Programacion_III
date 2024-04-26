import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from './proyecto';
import { PROYECTO } from './proyectoEquipos.json';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  getProyectoU() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getProyecto():Observable<Proyecto[]>{
    return of (PROYECTO)
  }
}
