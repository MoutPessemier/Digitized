import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatListModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
