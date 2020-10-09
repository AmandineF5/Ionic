import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private subscription : Subscription

  constructor(private router : Router) {}

  ngOnInit(){
    this.subscription =  this. router.events.subscribe((event)=> {
      console.log("subscription", event); //permet de voir les éléments de navigation
    }
    );
  }

}
