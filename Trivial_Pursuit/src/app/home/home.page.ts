import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Error } from "../utils/app-errors-enum"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
  
  public username:string ='';
  public levelMode:string ='';
  public errors = [];
  public isVisible:boolean = true; 
  public isAnswered:boolean = false;
  public answers = [];
  public userAnswer:string ='';
  constructor(private alertCtrl:AlertController) {}

  ngOnInit(){
    this.isVisible = true;
  }

  public async startGame() {
    if(!this.username || this.username.length < 3) {
      const alert =  await this.alertCtrl.create({
        header : 'Informations incorrectes',
        message : Error.Username,
        buttons: ['OK'],
    });
    alert.present();
      return;
    }
    if(!this.levelMode) {
      const alert =  await this.alertCtrl.create({
        header : 'Informations incorrectes',
        message : Error.Level,
        buttons: ['OK'],
    });
    alert.present();
      return;
    }

    this.showQuestion();

  }

  private showQuestion() {
    this.isVisible = false;
    this.answers.push("A", "B", "C", "D");
  }

  private getAnswer(answer: string) {
    this.userAnswer = answer;
    this.isAnswered = true;
  }

}
