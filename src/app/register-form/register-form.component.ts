import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

function validateRegister(control: FormGroup): { [key: string]: any } {
  var mailReg = /^([a-zA-Z]+[a-zA-Z0-9.\-_éèàùäëïöüâêîôû]*)@([a-z]+)[.]([a-z]+)([.][a-z]+)*$/g;
  if (!mailReg.test(control.get('email').value)) {
    return { noValidEmail: true };
  }
  var phoneReg = /^0{0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{7,14}$/;
  if (!phoneReg.test(control.get('phone').value)) {
    return { noValidPhone: true };
  }
  if (control.get('password').value !== control.get('passwordConfirmation')) {
    return { noMatchingPasswords: true };
  }
  return null;
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
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.register = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        country: ['', []],
        password: ['', [Validators.required, Validators.minLength(5)]],
        passwordConfirmation: [
          '',
          [Validators.required, Validators.minLength(5)]
        ]
      },
      { validator: validateRegister }
    );
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.noValidEmail) {
      return 'not a valid email';
    } else if (errors.noValidPhone) {
      return 'no valid phone number';
    } else if (errors.noMatchingPasswords) {
      return 'passwords don\'t match';
    } else if (errors.minlength) {
      return `need at least ${errors.minlength.requiredLength} characters`;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.http.post(`${environment.apiUrl}/register`, {
      email: this.register.get('email').value,
      password: this.register.get('password').value,
      firstName: this.register.get('firstName').value,
      lastName: this.register.get('lastName').value,
      phoneNumber: this.register.get('phone').value,
      country: this.register.get('country')
        ? this.register.get('country').value
        : '',
      passwordConfirmation: this.register.get('passwordConfirmation').value
    });
  }
}
