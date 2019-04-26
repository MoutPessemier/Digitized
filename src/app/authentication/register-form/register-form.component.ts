import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

function validateEmail(control: FormGroup): { [key: string]: any } {
  if (control.get('email').touched) {
    var mailReg = /^([a-zA-Z]+[a-zA-Z0-9.\-_éèàùäëïöüâêîôû]*)@([a-z]+)[.]([a-z]+)([.][a-z]+)*$/g;
    if (!mailReg.test(control.get('email').value)) {
      return { noValidEmail: true };
    }
  }
  return null;
}

function validatePhone(control: FormGroup): { [key: string]: any } {
  var phoneReg = /^0{0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{7,14}$/;
  if (!phoneReg.test(control.get('phone').value)) {
    return { noValidPhone: true };
  }
  return null;
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const pass = control.get('password');
  const confPass = control.get('passwordConfirmation');
  return pass.value === confPass.value ? null : { passwordDiffer: true };
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public register: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegisterFormComponent>,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.register = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        country: [''],
        passwordGroup: this.fb.group(
          {
            password: ['', [Validators.required, Validators.minLength(5)]],
            passwordConfirmation: [
              '',
              [Validators.required, Validators.minLength(5)]
            ]
          }
          // ,          { validator: comparePasswords }
        )
      },
      { validators: [validateEmail, validatePhone] }
    );
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
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {}
}
