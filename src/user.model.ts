export class User {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _phone: string,
    private _country: string,
    private _password: string,
    private _passwordConfirmation: string
  ) {}

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get country(): string {
    return this._country;
  }

  get password(): string {
    return this._password;
  }

  get confirmationPassword(): string {
    return this._passwordConfirmation;
  }
}
