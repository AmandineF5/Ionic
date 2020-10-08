import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FilmsProvider } from '../providers/film.provider';

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss'],
})
export class RechercherComponent implements OnInit  {
    public binding:string = 'Hello people !';
    public title:string = '';
    public year:number;
    public type:string = '';
    public films = [];
    constructor(private alertCtrl:AlertController, 
        private rechercherFilm:FilmsProvider){

    }

    clicBouton(){
        this.binding = "Oops j'ai cliqué";
    }

    public error:string =''; //gère les messages d'erreur
    //Vérification sur les champs
    public async rechercher(){
        this.error = '';
        if(!this.title || this.title.length < 3) {
            const alert =  await this.alertCtrl.create({
                header : 'Informations manquantes',
                message : "Veuillez saisir un titre de 3 caractères au minimum",
                buttons: ['OK'],
            });
            alert.present();
            return;
        }
        if(!this.year || (this.year < 1900 || this.year > 2050)) {
            const alert =  await this.alertCtrl.create({
                header : 'Informations manquantes',
                message : "Veuillez saisir une année entre 1900 et 2050",
                buttons: ['OK'],
            });
            alert.present();
            return;
        }
        if(this.type === undefined){
            const alert =  await this.alertCtrl.create({
                header : 'Informations manquantes',
                message : "Veuillez choisir un type",
                buttons: ['OK'],
            });
            alert.present(); 
            return;
        }
        this.lancerRecherche();
    }

    private async lancerRecherche(){
        try {
            this.films = await this.rechercherFilm.search(this.title, this.year, this.type);
            for(let current of this.films){
                console.log(current);
            }
        }catch (err) {
            const alert = await this.alertCtrl.create({
                header: "Erreur appel Service",
                message: "Aucun film trouvé",
                buttons: ["OK"],
            });
            alert.present();
        }
        
    }

    ngOnInit(){}
}