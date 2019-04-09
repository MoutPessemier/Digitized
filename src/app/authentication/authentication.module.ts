import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterFormComponent, LoginFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  entryComponents: [LoginFormComponent, RegisterFormComponent]
})
export class AuthenticationModule {}
