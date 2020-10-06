import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(){
    this.isVisible = true;
  }

  public startGame() {
    if(!this.username || this.username.length < 3) {
      this.errors.push(Error.Username);
      return;
    }
    if(!this.levelMode) {
      this.errors.push(Error.Level);
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
