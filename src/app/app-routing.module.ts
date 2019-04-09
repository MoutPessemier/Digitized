import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { GridComponent } from './image/grid/grid.component';
import { CarouselComponent } from './video/carousel/carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'contact', component: ContactFormComponent },
  { path: 'grid/images', component: GridComponent },
  { path: 'carousel/videos', component: CarouselComponent },
  { path: '', redirectTo: 'image', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
