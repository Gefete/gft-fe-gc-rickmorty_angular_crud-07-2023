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
  
  getAll():Observable<Character[]>{
    return this.http.get<Character[]>(baseUrl);
  }

  get(id:any){
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:Character):Observable<any>{
    return this.http.post(baseUrl,data);
  }

  delete(id:Character):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

