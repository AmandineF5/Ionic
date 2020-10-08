import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable()
export class FilmsProvider {
    constructor(private httpClient: HttpClient){}

    public search(title:string, year:number, type:string) : Promise<Array<Film>>{

        return new Promise((resolve, reject) => {
           let params = new HttpParams();
           params = params.append('apikey', '1898fc97');
           params = params.append('s', title);
           if(year){
               params = params.append('y', String(year));
           }
           if(type && type !==''){
               params = params.append('type', type);
           }
           this.httpClient.get('http://www.omdbapi.com/', {params:params}).toPromise()
           .then((response) => {
               if(response && response['Search'] && response['totalResults']){
                   resolve(response['Search']);
               } else {
                   reject('Le serveur ne retourne pas de valeur');
               }
           })
           .catch((error) => {
               reject(error);
           })
        });
    }
}