import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;

  ngOnInit(){

    this.myLastSnap = new FaceSnap('Me With Oncle Mike', 'Training Hard', 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',new Date(2021, 1, 1), 10);

////////////////////////////////////////////////////////////////////////////////////////////////////
    this.myOtherSnap = new FaceSnap('Me and my Best Friend', 
    'Sniper', 
    'https://i.redd.it/do5vcaf9wpma1.jpg',
    new Date(2020, 1, 1),
        70);

////////////////////////////////////////////////////////////////////////////////////////////////////
      this.mySnap = new FaceSnap('HOOOOO UN GATEEEEE', 
      'Sch',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nsiY9NeExhWwvxIxalZqCWXlAwgA0sJPYQ&usqp=CAU',
       new Date(),
        0);
  }
}
