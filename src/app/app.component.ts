import { Component } from '@angular/core';
import { ImageDataService } from './image-data.service';
import { Image } from 'src/image.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digitized';
  constructor() {}

  // addNewImage(image){
  //   this._imageDataService
  // }
}
