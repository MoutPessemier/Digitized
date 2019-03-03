import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  declarations: [AppComponent, CarouselComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
