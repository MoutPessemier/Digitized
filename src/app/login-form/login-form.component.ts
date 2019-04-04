import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public login: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `need at least ${errors.minlength.requiredLength} characters`;
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.http.post(`${environment.apiUrl}/login/`, {
      email: this.login.get('username').value,
      password: this.login.get('password').value
    });
  }
}
