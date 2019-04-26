import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { VideoResolver } from './video.resolver';
import { SafePipe } from './safe.pipe';

const appRoutes: Routes = [
  {
    path: 'videos',
    component: CarouselComponent,
    resolve: { video: VideoResolver }
  }
];

@NgModule({
  declarations: [CarouselComponent, VideoComponent, SafePipe],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(appRoutes)]
})
export class VideoModule {}
