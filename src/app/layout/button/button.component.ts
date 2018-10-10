import { Component, Input } from '@angular/core';
import { GameHandlerService } from '../../game-handler/game-handler.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color: string;
  @Input() id: number;
  @Input() disabled: boolean;

  constructor(private gameHandlerService: GameHandlerService) {}

  onClick(value): void {
    this.gameHandlerService.handleChange(value);
  }
}
