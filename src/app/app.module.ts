import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { MatFormFieldModule,MatInputModule, MatGridListModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatGridListModule,
    MatIconModule
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
