export class Image {
  constructor(
    private _iso: string,
    private _shutter: string,
    private _aperture: string
  ) {}

  get iso(): string {
    return this._iso;
  }

  get shutter(): string {
    return this._shutter;
  }

  get aperture(): string {
    return this._aperture;
  }

  static fromJson(json: any): Image {
    return new Image(json.iso, json.shutter, json.aperture);
  }
}
