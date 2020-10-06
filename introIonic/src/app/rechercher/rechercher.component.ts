import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss'],
})
export class RechercherComponent implements OnInit  {
    public binding:string = 'Hello people !';
    constructor(){}

    clicBouton(){
        this.binding = "Oops j'ai cliqué";
    }

    ngOnInit(){}
}