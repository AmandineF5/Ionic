import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Question } from '../models/question';
import { OpenTriviaService } from '../providers/openTriviaService';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  public username:string;
  public levelMode:string;
  public isAnswered:boolean = false;
  public questions = Array<Question>();
  public currentQuestion:Question;
  public answers = [];
  public score:number = 0;
  private currentQuestionIndex:number = 0;
  public messageResultAnswer:string ='';
  public userAnswer:string ='';
  public nbQuestions:number = 10;

  constructor(private route: ActivatedRoute, 
    private alertCtrl:AlertController,
    private questionsService:OpenTriviaService){ 

    this.route.params.subscribe((params) => { 
      this.username = params['username'];
      this.levelMode = params['levelMode']; 
    });

    this.initGame();
    
  }

  ngOnInit() {}

  private async initGame(){
    this.reset();
    await this.loadQuestions();
    this.showQuestion();
  }
  private async loadQuestions() {
    
    try {
      this.questions = await this.questionsService.getQuestions(this.nbQuestions, this.levelMode);
      this.shuffle(this.questions);
    } catch(err){
      const alert = await this.alertCtrl.create({
        header: "Erreur de chargement des questions",
        message: "Impossible de récupérer les questions",
        buttons: ["OK"]
      });
      alert.present();
    }
    
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

  public async goToNextQuestion(){
    this.currentQuestionIndex++;
    if(this.currentQuestionIndex < this.questions.length) {
      this.showQuestion();
      this.isAnswered = false;
    } else {
      const alert = await this.alertCtrl.create({
        header: "Erreur",
        message: "Il n'y a plus de questions",
        buttons: ["OK"]
      });
      alert.present();
      
    }
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

  private reset(){
    this.currentQuestion = null;
    this.answers = [];
    this.score = 0;
    this.isAnswered = false;
    this.currentQuestionIndex = 0;
  }

}
