import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps! : FaceSnap[];

  ngOnInit(){
this.faceSnaps = [
        {
    title: 'Me With Oncle Mike',
    description: 'Training Hard ',
    createdDate: new Date(),
    snaps: 1000000,
    imageUrl: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',
    localtion: 'Las Vegas, Nevada'
      } ,
        {  
    title: 'Me and my Best Friend',
    description: 'Sniper',
    createdDate: new Date(),
    snaps: 1000,
    imageUrl: 'https://i.redd.it/do5vcaf9wpma1.jpg',
    localtion: ''},
      {
      title: 'HOOOOO UN GATEEEEE', 
      description : 'Oncle Dana',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nsiY9NeExhWwvxIxalZqCWXlAwgA0sJPYQ&usqp=CAU',
      createdDate : new Date(),
       snaps : 0
 }

];   }
}
