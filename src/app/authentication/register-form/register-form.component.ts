import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

function validateEmail(control: FormControl): { [key: string]: any } {
  var mailReg = /^([a-zA-Z]+[a-zA-Z0-9.\-_éèàùäëïöüâêîôû]*)@([a-z]+)[.]([a-z]+)([.][a-z]+)*$/g;
  if (!mailReg.test(control.value)) {
    return {
      noValidEmail: true
    };
  }
  return null;
}

function validatePhone(control: FormControl): { [key: string]: any } {
  var phoneReg = /^0{0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{7,14}$/;
  if (!phoneReg.test(control.value)) {
    return {
      noValidPhone: true
    };
  }
  return null;
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const pass = control.get('password');
  const confPass = control.get('passwordConfirmation');
  return pass.value === confPass.value ? null : { passwordDiffer: true };
}

function serverSideValidateUsername(checkAvailabilityFn: (n: string) => Observable<boolean>): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public register: FormGroup;
  public errorMsg: string;
  constructor(
    public dialogRef: MatDialogRef<RegisterFormComponent>,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {
    this.register = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [Validators.required, Validators.minLength(5), validateEmail],
        serverSideValidateUsername(this.authenticationService.checkUserNameAvailability)
      ],
      phone: ['', [Validators.required, Validators.minLength(8), validatePhone]],
      country: [''],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(5)]],
          passwordConfirmation: ['', [Validators.required, Validators.minLength(5)]]
        },
        { validator: comparePasswords }
      )
    });
  }

  ngOnInit() {}

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `need at least ${errors.minlength.requiredLength} characters`;
    } else if (errors.noValidEmail) {
      return 'not a valid email';
    } else if (errors.noValidPhone) {
      return 'not a valid phone number';
    } else if (errors.passwordDiffer) {
      return 'passwords don\'t match';
    } else if (errors.userAlreadyExists) {
      return 'email already in use';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.authenticationService
      .register(
        this.register.value.email,
        this.register.value.passwordGroup.password,
        this.register.value.firstName,
        this.register.value.lastName,
        this.register.value.phone,
        this.register.value.country
      )
      .subscribe(
        val => {
          if (val) {
            this.onNoClick();
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            this.errorMsg = `Error while trying to login user ${this.register.value.email}: ${err.error.message}`;
          } else {
            this.errorMsg = `Error ${err.status} while trying to login user ${this.register.value.email}: ${err.error}`;
          }
          this.openSnackbar('Oops, something went wrong. Please try again!');
        }
      );
  }
  private openSnackbar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}
