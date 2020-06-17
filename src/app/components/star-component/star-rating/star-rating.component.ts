import { Component, OnInit,Input, Output, EventEmitter ,ViewEncapsulation} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input('rating') rating: number;
  @Input('starCount') starCount: number ;
  @Input('color')  color: string = 'yellow';
  @Output()  ratingUpdated = new EventEmitter();
  snackBarDuration: number = 20000;
  ratingArr = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    debugger;
    console.log(rating)
    this.snackBar.open('Thank you for rating ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = "yellow",
  accent = "yellow",
  warn = "warn"
}
