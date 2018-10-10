import { Component, OnInit } from '@angular/core';
import { BUTTONS } from '../assets/buttons';
import { Button } from '../assets/models/button';
import { GameHandlerService } from './game-handler/game-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buttons: Button[];

  constructor(private gameHandlerService: GameHandlerService) {}

  ngOnInit() {
    this.buttons = BUTTONS;
  }

  public onButtonClicked(value) {
    this.gameHandlerService.handleChange(value);
  }
}
