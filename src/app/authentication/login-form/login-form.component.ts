import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

function validateEmail(control: FormGroup): { [key: string]: any } {
  if (control.get('email').touched) {
    var mailReg = /^([a-zA-Z]+[a-zA-Z0-9.\-_éèàùäëïöüâêîôû]*)@([a-z]+)[.]([a-z]+)([.][a-z]+)*$/g;
    if (!mailReg.test(control.get('email').value)) {
      return { noValidEmail: true };
    }
  }
  return null;
}

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

  onSubmit() {}
}
