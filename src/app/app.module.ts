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
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { ImageComponent } from './image/image.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ParallaxDirective } from './parallax.directive';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DisplayImageFilterPipe } from './display-image-filter.pipe';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    ImageComponent,
    DigitalArtComponent,
    GridComponent,
    ContactFormComponent,
    ParallaxDirective,
    DisplayImageFilterPipe,
    RegisterFormComponent,
    LoginFormComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatGridListModule,
    AngularFontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [LoginFormComponent, RegisterFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
