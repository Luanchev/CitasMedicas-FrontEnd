import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GestionCitas } from '../shared/models/gestionCitas-models';
import { Observable } from 'rxjs';


const API = 'http://localhost:8080/api/v1/gestionCitas/'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMedicos() {
    return this.http.get( API + 'medicos/getMedicos')
  }
  getMedico(MEDICO_ID: number) {
    return this.http.get(API + 'medicos/getById/'+ MEDICO_ID)
  }
  getEspecialidades(): Observable<string[]>{
    return this.http.get<string[]>(API + 'medicos/especialidades/')
  }
  getMedicosByEspecialidad(especialidad: string){
    return this.http.get(API + 'medicos/getByEspecialidad/'+ especialidad)
  }
  createCita(citas: GestionCitas) {
    return this.http.post(API + 'citas/postCita', citas)
  }
  cancelCita(codigoUnico: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete(API + 'citas/deleteCita?codigoUnico='+ codigoUnico, options)
  }

}
