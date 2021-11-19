import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokiService {
  

  private _url: string="https://pokeapi.co/api/v2/pokemon/";
  // private _url: string="https://pokeapi.co/api/v2/pokemon?limit=200&offset=500./";


  constructor(private http: HttpClient) { }


  getPokis(){
    return this.http.get(this._url);
  }

  //get more pokemons
  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  
}
