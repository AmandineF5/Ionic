import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable()
export class FilmsProvider {
    public search(titre:string, year:number, type:string) : Promise<Array<Film>>{

        return new Promise((resolve, reject) => {
            resolve([
                {
                    Title : 'The passenger',
                    Poster : 'assets/icon/favicon.png',
                    Year : 2012
                },
                {
                    Title : 'Jurassic park',
                    Poster : 'assets/icon/favicon.png',
                    Year : 1997
                },
                {
                    Title : 'Interstellar',
                    Poster : 'assets/icon/favicon.png',
                    Year : 2014
                },
                {
                    Title : 'Full metal jacket',
                    Poster : 'assets/icon/favicon.png',
                    Year : 1987
                }
            ]);
        });
    }
}