import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class OpenTriviaService {
    public getQuestions(nbQuestions:number, levelMode:string) : Promise<Array<Question>>{

        return new Promise(async (resolve, reject)=>{
            resolve(
                [
                    { 
                        category: "Entertainment: Japanese Anime & Manga", 
                        type: "multiple", 
                        difficulty: "easy", 
                        question: "1- In &quot;Fairy Tail&quot;, what is the nickname of Natsu Dragneel?", 
                        correct_answer: "The Salamander", 
                        incorrect_answers: ["The Dragon Slayer", "The Dragon", "The Demon"] 
                    }, 
                    { 
                        category: "Entertainment: Video Games", 
                        type: "boolean", 
                        difficulty: "medium",
                        question: "2- &quot;Return to Castle Wolfenstein&quot; was the only game of the Wolfenstein series where you don&#039;t play as William &quot;B.J.&quot; Blazkowicz.", 
                        correct_answer: "False", 
                        incorrect_answers: ["True"] 
                    },
                    { 
                        category: "Entertainment: Japanese Anime & Manga", 
                        type: "multiple", 
                        difficulty: "easy", 
                        question: "3- In &quot;Fairy Tail&quot;, what is the nickname of Natsu Dragneel?", 
                        correct_answer: "The Salamander", 
                        incorrect_answers: ["The Dragon Slayer", "The Dragon", "The Demon"] 
                    }, 
                    { 
                        category: "Entertainment: Video Games", 
                        type: "boolean", 
                        difficulty: "medium",
                        question: "4- &quot;Return to Castle Wolfenstein&quot; was the only game of the Wolfenstein series where you don&#039;t play as William &quot;B.J.&quot; Blazkowicz.", 
                        correct_answer: "False", 
                        incorrect_answers: ["True"] 
                    },
                ]
            );
        });
    }


}