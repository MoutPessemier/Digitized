export class User {
  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _phone: string,
    private _country: string // , // private _password: string, // private _passwordConfirmation: string
  ) {}

  get id(): number {
    return this._id;
  }

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

  // get password(): string {
  //   return this._password;
  // }

  // get confirmationPassword(): string {
  //   return this._passwordConfirmation;
  // }

  static fromJSON(json: any): User {
    return new User(
      json.id,
      json.firstName,
      json.lastName,
      json.email,
      json.phoneNumber,
      json.country
    );
  }
}
