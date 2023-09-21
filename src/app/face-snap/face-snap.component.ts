import { Component ,OnInit ,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(): void {
      this.buttonText= "1gatéééé!"
  }

  onSnap() {
    if (this.buttonText === '1gatéééé!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Pas de gaté 😞';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = '1gatéééé!';
    }
    
  }


  
}