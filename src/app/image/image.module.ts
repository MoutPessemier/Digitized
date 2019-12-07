import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecsComponent } from './specs/specs.component';
import { ChangeCommentComponent } from './change-comment/change-comment.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';

const appRoutes: Routes = [{ path: 'images', component: GridComponent }];

@NgModule({
  declarations: [
    ImageComponent,
    GridComponent,
    CommentComponent,
    SpecsComponent,
    ChangeCommentComponent,
    DeleteCommentComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(appRoutes), ReactiveFormsModule],
  entryComponents: [ChangeCommentComponent, DeleteCommentComponent]
})
export class ImageModule {}
