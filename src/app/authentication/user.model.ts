import { Comment } from '../image/comment.model';

export class User {
  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _phoneNumber: string,
    private _country: string,
    private _comments: Comment[]
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

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  get country(): string {
    return this._country;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  static fromJSON(json: any): User {
    return new User(
      json.id,
      json.firstName,
      json.lastName,
      json.email,
      json.phoneNumber,
      json.country,
      json.comments.map(c => Comment.fromJSON(c))
    );
  }
}
