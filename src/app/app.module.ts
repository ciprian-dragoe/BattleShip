import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { GameBuilderService } from './services/game-builder.service';
import { MapBuilderService } from './services/map-builder.service';
import { ModalService } from './services/modal.service';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    GameSelectorComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ModalService,
    GameBuilderService,
    MapBuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
