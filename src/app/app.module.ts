import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleModalComponent } from './directives/simple-modal.component';
import { ModalService } from './services/modal.service';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleModalComponent,
    GameSelectorComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
