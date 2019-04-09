import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './parallax.directive';
import { ImageComponent } from './image/image.component';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ImageComponent, GridComponent, ParallaxDirective],
  imports: [CommonModule, MaterialModule]
})
export class ImageModule {}
