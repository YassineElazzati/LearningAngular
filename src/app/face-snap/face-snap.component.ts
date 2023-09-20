import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title! : string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string;

  ngOnInit(): void {
      this.title = 'HOOOOO UN GATEEEEE';
      this.description = 'Sch';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = 'https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008985559.jpg'
  }

  onAddSnap() {
    this.snaps++;
  }
}