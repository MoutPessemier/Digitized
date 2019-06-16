import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

function validateEmail(control: FormControl): { [key: string]: any } {
  var mailReg = /^([a-zA-Z]+[a-zA-Z0-9.\-_éèàùäëïöüâêîôû]*)@([a-z]+)[.]([a-z]+)([.][a-z]+)*$/g;
  if (!mailReg.test(control.value)) {
    return { noValidEmail: true };
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
  public errorMsg: string;

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      username: ['', [Validators.required, validateEmail]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `need at least ${errors.minlength.requiredLength} characters`;
    } else if (errors.noValidEmail) {
      return `no valid email`;
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.authService
      .login(this.login.value.username, this.login.value.password)
      .subscribe(
        val => {
          if (val) {
            this.onNoClick();
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMsg = `Error while trying to login user ${
              this.login.value.username
            }: ${err.error.message}`;
          } else {
            this.errorMsg = `Error ${err.status} while trying to login user ${
              this.login.value.username
            }: ${err.error}`;
          }
          this.openSnackbar('Oops, something went wrong. Please try again!');
        }
      );
  }

  private openSnackbar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}
