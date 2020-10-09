
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public isValid:boolean = false;

  constructor(
    private alertCtrl:AlertController,
    private router: Router
    ) {
     
    }

  ngOnInit(){ 
    this.username = '';
    this.levelMode = '';
  }

  public async logIn() {
    if(!this.username || this.username.length < 3) {
      this.isValid = false;
      const alert =  await this.alertCtrl.create({
        header : 'Informations incorrectes',
        message : Error.Username,
        buttons: ['OK'],
    });
    alert.present();
    
      return;
    }
    if(!this.levelMode) {
      this.isValid = false;
      const alert =  await this.alertCtrl.create({
        header : 'Informations incorrectes',
        message : Error.Level,
        buttons: ['OK'],
    });
    alert.present();
    
      return;
    }
   
    this.startGame();
  }
  
  public startGame(){
    this.router.navigate(['/game', this.username, this.levelMode]);
  }
}
