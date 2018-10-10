import { Injectable } from '@angular/core';
import { BUTTONS } from '../../assets/buttons';
import { randomInt } from '../helpers/javascript.helper';

@Injectable()
export class GameHandlerService {
  sequence = [];
  sequenceReproduced = [];
  iterations = 1;
  level = 0;
  score = 0;
  disabledButton = true;
  disabledStart = false;

  start(): void {
    const max = BUTTONS.length;
    for (let i = 0; i < this.iterations; i++) {
      this.sequence.push(randomInt(max));
    }

    this.disabledButton = false;
    this.disabledStart = true;
    console.log('Sequence emitted by Simon', this.sequence);
  }

  handleChange(value): void {
    this.sequenceReproduced.push(parseInt(value, 0));

    const reproducedLength = this.sequenceReproduced.length;
    const goalLength = this.sequence.length;
    if (reproducedLength !== goalLength) {
      // user didn't finish to click
      return;
    }

    if (JSON.stringify(this.sequenceReproduced) === JSON.stringify(this.sequence)) {
      // user win
      this.level += 1;
      this.score += 10;
      this.iterations += 1;
    } else {
      this.iterations = 1;
      this.level = 0;
      this.score = 0;
    }

    this.cleanLayout();
  }

  private cleanLayout() {
    this.disabledButton = true;
    this.disabledStart = false;
    this.sequence = [];
    this.sequenceReproduced = [];
  }

}
