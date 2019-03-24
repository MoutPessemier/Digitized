export class Image {
  constructor(
    private _name: string,
    private _iso: string,
    private _shutter: string,
    private _aperture: string,
    private _country: string,
    private _likes: number,
    private _content: string
  ) {}

  get name(): string {
    return this._name;
  }

  get iso(): string {
    return this._iso;
  }

  get shutter(): string {
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

  get content(): string {
    return this._content;
  }

  static fromJson(json: any): Image {
    return new Image(
      json.name,
      json.iso,
      json.shutter,
      json.aperture,
      json.country,
      json.likes,
      json.content
    );
  }
}
