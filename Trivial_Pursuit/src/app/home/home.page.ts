import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Question } from '../models/question';
import { OpenTriviaService } from '../providers/openTriviaService';
import { Error } from "../utils/app-errors-enum"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
  
  public username:string ='';
  public levelMode:string ='';
  public isVisible:boolean = true; 
  public isAnswered:boolean = false;
  public questions = Array<Question>();
  public currentQuestion:Question;
  public answers = [];
  public score:number = 0;
  private currentQuestionIndex:number = 0;
  public messageResultAnswer:string ='';
  public userAnswer:string ='';
  public nbQuestions:number = 0;
  
  constructor(
    private alertCtrl:AlertController,
    private questionsService:OpenTriviaService
    ) {}

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

    await this.loadQuestions();
    this.showQuestion();
  }

  private async loadQuestions() {
    this.isVisible = false;
    this.nbQuestions = 2;
    this.questionsService.getQuestions(this.nbQuestions, this.levelMode)
    .then((questions)=>{
      this.questions = questions;
      this.shuffle(this.questions);
    })
    .catch(async (err)=>{
      const alert = await this.alertCtrl.create({
        header: "Erreur de chargement des questions",
        message: "Impossible de récupérer les questions",
        buttons: ["OK"]
      });
      alert.present();
    });
    
  }

  public showQuestion(){    
    console.log(this.questions);
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.answers = [];
    this.answers.push(this.currentQuestion.correct_answer);
    this.currentQuestion.incorrect_answers.forEach((a)=>{
      this.answers.push(a);
    });
    this.shuffle(this.answers);
   
  }

  private getAnswer(answer: string) {
    this.userAnswer = answer;
    if(answer === this.currentQuestion.correct_answer){
      this.messageResultAnswer = "Bonne réponse ! Bien joué :)";
      this.score++;
    } else {
      this.messageResultAnswer = "Mauvaise réponse ! Mal joué :(";
    }
    this.isAnswered = true;
  }

  public goToNextQuestion(){
    this.currentQuestionIndex++;
    if(this.currentQuestionIndex < this.questions.length) {
      this.showQuestion();
      this.isAnswered = false;
    } else {
      this.isVisible = true;
      this.showScore(); 
    }
  }

async showScore(){
  const alert = await this.alertCtrl.create({
    header: "Votre score",
    message: ""+this.score,
    buttons: ["OK"]
  });
  alert.present();
}
  private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
  }
  

}
