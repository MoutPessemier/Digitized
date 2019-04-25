import { Comment } from './comment.model';

export class Image {
  constructor(
    private _id: number,
    private _name: string,
    private _iso: string,
    private _shutter: string,
    private _aperture: string,
    private _country: string,
    private _likes: number,
    private _path: string,
    private _comments: Comment[]
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get iso(): string {
    return this._iso;
  }

  get shutterSpeed(): string {
    return this._shutter;
  }

  get aperture(): string {
    return this._aperture;
  }

  get country(): string {
    return this._country;
  }

  get likes(): number {
    return this._likes;
  }

  get path(): string {
    return this._path;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  static fromJson(json: any): Image {
    return new Image(
      json.id,
      json.name,
      json.iso,
      json.shutterSpeed,
      json.aperture,
      json.country,
      json.likes,
      json.path,
      json.comments
    );
  }
}
