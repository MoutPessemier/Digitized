import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'grid', loadChildren: './image/image.module#ImageModule' },
  { path: 'carousel', loadChildren: './video/video.module#VideoModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '', redirectTo: 'grid/images', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
