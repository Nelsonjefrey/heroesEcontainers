import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Heroe} from "../heroe";

@Injectable({
  providedIn: 'root'
})
export class GetheroeslistService {
  constructor(
    private http: HttpClient
  ) { }

  public getheroes(){
      return this.http.get<Heroe[]>(`https://akabab.github.io/superhero-api/api/all.json`);
  }
}
