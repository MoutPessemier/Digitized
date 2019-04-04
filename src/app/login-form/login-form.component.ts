import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public login: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {}
}
