import { Injectable} from '@angular/core';
import { Question } from '../models/question';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiCode } from '../utils/app-api-code';

@Injectable()
export class OpenTriviaService {
    public apiCodeValue: string = '';

    constructor(private httpClient: HttpClient){}

    public getQuestions(nbQuestions:number, levelMode:string) : Promise<Array<Question>>{
        return new Promise(async (resolve, reject)=>{
            let params = new HttpParams();
           params = params.append('amount', String(nbQuestions));
           if(levelMode){
               params = params.append('difficulty', levelMode);
           }
           this.httpClient.get('https://opentdb.com/api.php', {params:params}).toPromise()
           .then((response) => {
               if(response && response['response_code'] === 0 && response['results']){
                   resolve(response['results']);
               } else {
                   reject("Impossible de récupérer les questions" );
               }
           })
           .catch((error) => {
               reject(error);
           })
        });
    }


}