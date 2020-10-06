import { Component, OnInit } from '@angular/core';

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
    constructor(){}

    clicBouton(){
        this.binding = "Oops j'ai cliqué";
    }

    public error:string =''; //gère les messages d'erreur
    //Vérification sur les champs
    public rechercher(){
        this.error = '';
        if(!this.title || this.title.length <=3) {
            this.error = "Veuillez saisir un titre de 3 caractères au minimum";
            return;
        }
        if(!this.year || (this.year < 1900 || this.year > 2050)) {
            this.error = "Veuillez saisir une année entre 1900 et 2050";
            return;
        }
        if(this.type === undefined){
            this.error = "Veuillez choisir un type";
            return;
        }
        this.lancerRecherche();
    }

    private lancerRecherche(){
        this.films = [
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
        ];
    }

    ngOnInit(){}
}