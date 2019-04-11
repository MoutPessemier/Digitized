import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { VideoResolver } from './video.resolver';

const appRoutes: Routes = [
  {
    path: 'carousel',
    component: CarouselComponent,
    resolve: { video: VideoResolver }
  }
];

@NgModule({
  declarations: [CarouselComponent, VideoComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(appRoutes)]
})
export class VideoModule {}
