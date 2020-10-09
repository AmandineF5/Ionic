import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public id:string;
  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      console.log("identifiant du film " + this.id);
    });
    }
   

  ngOnInit() {
  }

}
