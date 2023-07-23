import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Character } from './model/character';

const baseUrl = 'http://localhost:3000/characters';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {
  
  constructor( private http:HttpClient ) {}
  
  // Metodo para Recoger los datos del json
  getAll():Observable<Character[]>{
    return this.http.get<Character[]>(baseUrl);
  }

  // Metodo para recoger un objeto del json
  get(id:any){
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Metodo para crear un objeto en el json
  create(data:Character):Observable<any>{
    return this.http.post(baseUrl,data);
  }

  // Metodo para borrar un objeto en el json
  delete(id:Character):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Metodo para actualizar el json
  update(id:Character, data: any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}

