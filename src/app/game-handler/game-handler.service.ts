import { Injectable } from '@angular/core';
import { BUTTONS } from '../../assets/buttons';
import { randomInt } from '../helpers/javascript.helper';

@Injectable()
export class GameHandlerService {
  private sequence = [];
  private iterations = 1;
  private level = 0;
  private score = 0;
  private disabledButton = true;
  private disabledStart = false;
  private advancement = 1;

  public start(): void {
    const max = BUTTONS.length;
    for (let i = 0; i < this.iterations; i++) {
      this.sequence.push(randomInt(max));
    }

    this.disabledButton = false;
    this.disabledStart = true;
    console.log('Sequence emitted by Simon', this.sequence);
  }

  public handleChange(value): void {
    const end = this.advancement === this.sequence.length;
    const equal = value === this.sequence[this.advancement - 1];
    
    // TODO add success popin instead of console log

    if (end) {
      console.log('you win');
      // user win
      this.level += 1;
      this.score += 10;
      this.iterations += 1;
      this.cleanLayout();
      return;
    }

    if (!equal) {
      console.log('you loose');
      this.iterations = 1;
      this.level = 0;
      this.score = 0;
      this.cleanLayout();
      return;
    } else {
      this.advancement = this.advancement + 1;
    }
  }

  private cleanLayout() {
    this.disabledButton = true;
    this.disabledStart = false;
    this.advancement = 1;
    this.sequence = [];
  }

}
