import { Comment } from '../image/comment.model';

export class User {
  // constructor(
  //   private _id: number,
  //   private _firstName: string,
  //   private _lastName: string,
  //   private _email: string,
  //   private _phone: string,
  //   private _country: string,
  //   private _comments: Comment[]
  // ) {}

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public country: string,
    public comments: Comment[]
  ) {}

  // get id(): number {
  //   return this._id;
  // }

  // get firstName(): string {
  //   return this._firstName;
  // }

  // get lastName(): string {
  //   return this._lastName;
  // }

  // get email(): string {
  //   return this._email;
  // }

  // get phone(): string {
  //   return this._phone;
  // }

  // get country(): string {
  //   return this._country;
  // }

  // get comments(): Comment[] {
  //   return this._comments;
  // }

  static fromJSON(json: any): User {
    return new User(
      json.id,
      json.firstName,
      json.lastName,
      json.email,
      json.phoneNumber,
      json.country,
      json.comments
    );
  }

  // toJSON(): any {
  //   return {
  //     id: this._id,
  //     firstName: this._firstName,
  //     lastName: this._lastName,
  //     email: this._email,
  //     phoneNumber: this._phone,
  //     country: this._country,
  //     comments: this._comments.map(c => c.toJSON)
  //   };
  // }
}
