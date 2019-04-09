import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule]
})
export class ContactModule {}
