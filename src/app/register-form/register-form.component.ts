import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public register: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegisterFormComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.register = this.fb.group({
      firstName: ['', []],
      lastName: ['', []],
      email: ['', []],
      phone: ['', []],
      country: ['', []],
      password: ['', []],
      passwordConfirmation: ['', []]
    });
  }

  getErrorMessage() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {}
}
