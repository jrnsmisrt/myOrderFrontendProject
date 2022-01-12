import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.css']
})
export class CharacterCounterComponent implements OnInit {
  maxLengthDescription: number;
  counter: number;

  constructor() {
    this.maxLengthDescription = 255;
    this.counter = this.maxLengthDescription;
  }

  ngOnInit(): void {
  }

  setmaxLengthDescription(maxLength: number) {
    this.maxLengthDescription = maxLength;
  }

  countCharactersLeft(input: string): number {

    if (input != null) {

      if (this.counter>0) {
        this.counter = (this.maxLengthDescription - input.length);
        return this.counter;

      } else {
        return 0
      }
    } else {
      return this.maxLengthDescription;
    }

  }
}
