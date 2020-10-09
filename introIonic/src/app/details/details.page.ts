import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Film } from '../models/film';
import { FilmsProvider } from '../providers/film.provider';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public id:string;
  public film:Film;
  public isLu:boolean = false;

  constructor(private route : ActivatedRoute, 
    private filmsProvider:FilmsProvider,
    private textToSpeech:TextToSpeech) {

    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      console.log("identifiant du film " + this.id);
      this.chargerDetailFilms();
    });
    }
  
    async chargerDetailFilms(){
      this.film = await this.filmsProvider.details(this.id);
    }

  ngOnInit() {
  }

  async lirePlot(){
    //Text-to-speech
    this.isLu = true;
    try{
      await this.textToSpeech.speak(this.film.Plot);
    }catch(err){
      console.log(err);
    } finally {
      this.isLu = false;
    }
  }

}
