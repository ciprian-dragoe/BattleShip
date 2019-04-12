import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { GameMapComponent } from './game-screen/game-map/game-map.component';
import { GameCellComponent } from './game-screen/game-map/game-cell/game-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    GameMapComponent,
    GameCellComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
