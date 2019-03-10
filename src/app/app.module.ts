import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatGridListModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { ImageComponent } from './image/image.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    ImageComponent,
    DigitalArtComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
