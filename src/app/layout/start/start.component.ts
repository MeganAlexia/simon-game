import { Component, Input } from '@angular/core';
import { GameHandlerService } from '../../game-handler/game-handler.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  title = 'start';
  @Input() disabled: boolean;

  constructor(private gameHandlerService: GameHandlerService) {}

  onClick(): void {
    this.gameHandlerService.start();
  }
}
