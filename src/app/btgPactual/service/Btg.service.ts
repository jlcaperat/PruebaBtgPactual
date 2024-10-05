import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Btg } from '../interfaces/Btg';
import { Inversiones } from '../interfaces/Inversiones';



@Injectable({
  providedIn: 'root'
})
export class BtgService {
 

  private apiUrl: string = 'http://localhost:8080/btg'
  btg!: Btg
  inversiones!: Inversiones

  constructor(private http: HttpClient) { }

  crearSuscripcion(btg: Btg): Observable<Btg> {

    return this.http.post<Btg>(`${this.apiUrl}/apertura`, btg).pipe(
      tap(btg => {
        this.btg = btg
      }))
  }

  crearApertura(inversiones: Inversiones): Observable<Inversiones> {

    return this.http.post<Inversiones>(`${this.apiUrl}/inversiones`, inversiones).pipe(
      tap(inversiones => {
        this.inversiones = inversiones
      }))
  }


  getInversiones(): Observable<Inversiones[]> {

    return this.http.get<Inversiones[]>(`${this.apiUrl}/inversiones`)
  }
  getInversionesActiva(): Observable<Inversiones[]> {
    return this.http.get<Inversiones[]>(`${this.apiUrl}/inversiones/activa`)
  }


  deleteByIdUnico(idUnico: string):void {
    this.http.delete(`${this.apiUrl}/inversiones/${idUnico}`)
  }

}



