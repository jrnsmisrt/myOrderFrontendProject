import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.css'],

})
export class CharacterCounterComponent implements OnInit {
  maxLengthCharacters: number;
  counter: number;


  constructor() {
    this.maxLengthCharacters = 255;
    this.counter = this.maxLengthCharacters;

  }

  ngOnInit(): void {
  }

  setmaxLengthDescription(maxLength: number) {
    this.maxLengthCharacters = maxLength;
  }

  countCharactersLeft(input: string): number {
    if (input != null) {
      if (input.length < this.maxLengthCharacters) {
        if (this.counter > 0) {
          this.counter = (this.maxLengthCharacters - input.length);
          return this.counter;
        }
      }
      return 0
    }
    return this.maxLengthCharacters;

  }
}
