import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { ScoreboardComponent } from './layout/scoreboard/scoreboard.component';
import { StartComponent } from './layout/start/start.component';
import { GameHandlerService } from './game-handler/game-handler.service';
import { ButtonComponent } from './layout/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    StartComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    GameHandlerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
